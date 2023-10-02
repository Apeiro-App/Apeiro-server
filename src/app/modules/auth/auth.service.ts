import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';

// login user
const loginUser = async (payload: ILoginUser) => {
  const getEmail = await User.findOne({ clientData: payload.email });
  console.log('getEmail', getEmail);
};

export const authService = {
  loginUser,
};
