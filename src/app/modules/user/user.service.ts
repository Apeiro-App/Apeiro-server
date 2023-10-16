import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import config from '../../../config';
import { IClientInfo } from '../client/client.interface';
import mongoose from 'mongoose';
import { Client } from '../client/client.model';
import { ICoachInfo } from '../coach/coach.interface';
import { Coach } from '../coach/coach.model';
import { IAdminInfo } from '../admin/admin.interface';
import { Admin } from '../admin/admin.mode';

// create a client
const createClient = async (
  user: IUser,
  client: IClientInfo,
): Promise<IUser | null> => {
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  // set role
  user.role = 'client';
  client.role = 'client';

  // transection and rollback
  const session = await mongoose.startSession();
  let newUserAllData = null;
  try {
    session.startTransaction();

    const createClient = await Client.create([client], { session });
    if (!createClient.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Can't create client");
    }
    // console.log('createClient', createClient);

    user.clientData = createClient[0]._id;
    user.email = createClient[0].email;

    const newUser = await User.create([user], { session });
    // console.log('newUser', newUser);

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "can't create user");
    }

    newUserAllData = newUser[0];
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ _id: newUserAllData._id }).populate(
      'clientData',
    );
  }

  return newUserAllData;
};

// create a coach
const createCoach = async (
  user: IUser,
  coach: ICoachInfo,
): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_coach_password as string;
  }

  user.role = 'coach';
  coach.role = 'coach';

  const session = await mongoose.startSession();
  let newUserAllData = null;

  try {
    session.startTransaction();

    const newCreatedCoach = await Coach.create([coach], {
      session,
    });

    if (!newCreatedCoach.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Can't create Coach");
    }
    user.coachData = newCreatedCoach[0]._id;
    user.email = newCreatedCoach[0].email;

    const newUser = await User.create([user], { session });
    // console.log('newUser', newUser);

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "can't create user");
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ _id: newUserAllData._id }).populate(
      'coachData',
    );
  }

  return newUserAllData;
};

// create admin
const createAdmin = async (
  user: IUser,
  admin: IAdminInfo,
): Promise<IUser | null> => {
  if (!user.password) {
    user.password = config.default_admin_password as string;
  }

  user.role = 'admin';
  admin.role = 'admin';

  let newUserAllData = null;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newCreatedAdmin = await Admin.create([admin], {
      session,
    });
    if (!newCreatedAdmin.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Can't create Coach");
    }
    user.coachData = newCreatedAdmin[0]._id;
    user.email = newCreatedAdmin[0].email;

    const newUser = await User.create([user], { session });
    // console.log('newUser', newUser);

    if (!newUser.length) {
      throw new ApiError(httpStatus.BAD_REQUEST, "can't create admin");
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ _id: newUserAllData._id }).populate(
      'adminData',
    );
  }

  return newUserAllData;
};

export const userService = {
  createClient,
  createCoach,
  createAdmin,
};
