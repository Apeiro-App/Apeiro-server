import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { authService } from './auth.service';
import { ILoginUserResponse } from './auth.interface';

// login a user
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  //   console.log(loginData);
  const result = await authService.loginUser(loginData);

  responseForData.sendResponseForCreate<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'login Successful',
    data: result,
  });
  // next();
});

export const authController = {
  loginUser,
};
