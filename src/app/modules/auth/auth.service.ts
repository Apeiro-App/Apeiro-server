import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

// login user
const loginUser = async (payload: ILoginUser) => {};

export const authService = {
  loginUser,
};
