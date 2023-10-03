import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import config from '../../../config';
import { IClientInfo } from '../client/client.interface';
import mongoose from 'mongoose';
import { Client } from '../client/client.model';

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
      throw new ApiError(httpStatus.BAD_REQUEST, "Cann't create client");
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

export const userService = {
  createClient,
};
