import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

// login user
const loginUser = async (payload: ILoginUser) => {
  const { email, password } = payload;
};

export const authService = {
  loginUser,
};
