import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import bcrypt from 'bcrypt';
import { jwtToken } from '../../../shared/jwtToken';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';

// login user
const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  // check user existance
  const isUserExist = await User.findOne(
    { email },
    { email: 1, password: 1, isPasswordChange: 1, role: 1 },
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }
  // console.log('isUserExist', isUserExist);
  // matched password
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );
  // check password

  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password isn't matched");
  }

  const { email: userEmail, role, isPasswordChange } = isUserExist;

  // create access token
  const accessToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in as string },
  );
  // console.log('accessToken'), accessToken;

  // create refresh token
  const refreshToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_refresh_token as Secret,
    { expiresIn: config.jwt_refresh_expires_in as string },
  );

  return {
    accessToken,
    refreshToken,
    isPasswordChange,
  };
};

// refresh token
const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  // verfiy token
  console.log('token', token);
  let verifyToken = null;
  try {
    verifyToken = await jwtToken.verifyToken(
      token,
      config.jwt_refresh_token as Secret,
    );

    console.log('verifyToken', verifyToken);
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid token');
  }
  // console.log(verifyToken);

  // checking deleted user refresh token
  const userEmail = verifyToken?.userEmail;
  // console.log('userId', userId);
  const isUserExist = await User.findOne({ email: userEmail });
  // console.log('isUserExist', isUserExist);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }

  // generate new token
  const newAccessToken = await jwtToken.createToken(
    {
      email: isUserExist.email,
      role: isUserExist.role,
    },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in },
  );

  return {
    accessToken: newAccessToken,
  };
};

export const authService = {
  loginUser,
  refreshToken,
};
