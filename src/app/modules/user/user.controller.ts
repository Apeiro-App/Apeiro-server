import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { responseForData } from '../../../shared/sendResponse';
import { Request, Response } from 'express';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;

  // const result = await userService.createStudent(user);
  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created Successful',
    // data: result,
  });
});

export const userController = {
  createUser,
};
