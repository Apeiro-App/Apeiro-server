import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: IUser): Promise<IUser | null> => {
  if (payload) {
    const existUser = await User.findOne({ email: { $eq: payload.email } });
    if (existUser) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User is already exist');
    }
  }
  const result = await User.create(payload);
  return result;
};

export const userService = {
  createUser,
};
