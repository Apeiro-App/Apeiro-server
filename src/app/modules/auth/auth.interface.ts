export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  isPasswordChange: boolean;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};
