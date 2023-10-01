// import httpStatus from 'http-status';
// import ApiError from '../../../errors/ApiError';
// import { IUser } from './user.interface';
// import { User } from './user.model';
// import config from '../../../config';

// const createUser = async (payload: IUser): Promise<IUser | null> => {
//   // default password
//   if (!payload.password) {
//     payload.password = config.default_user_password as string;
//   }
//   if (payload) {
//     const existUser = await User.findOne({ email: { $eq: payload.email } });
//     if (existUser) {
//       throw new ApiError(httpStatus.NOT_FOUND, 'User is already exist');
//     }
//   }
//   const result = await User.create(payload);

//   return result;
// };

// export const userService = {
//   createUser,
// };
