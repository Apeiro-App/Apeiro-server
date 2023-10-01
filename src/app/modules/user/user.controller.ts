import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { responseForData } from '../../../shared/sendResponse';
import { Request, Response } from 'express';
import { userService } from './user.service';

const createClient = catchAsync(async (req: Request, res: Response) => {
  const { client, ...userData } = req.body;
  console.log('client', client);
  console.log('userData', userData);

  const result = await userService.createClient(userData, client);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: result,
  });
});

export const userController = {
  createClient,
};
