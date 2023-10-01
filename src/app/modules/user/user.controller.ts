// import httpStatus from 'http-status';
// import catchAsync from '../../../shared/catchAsync';
// import { responseForData } from '../../../shared/sendResponse';
// import { Request, Response } from 'express';
// import { userService } from './user.service';

// const createUser = catchAsync(async (req: Request, res: Response) => {
//   const user = req.body;

//   const result = await userService.createUser(user);
//   responseForData.sendResponseForCreate(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User created Successful',
//     data: result,
//   });
// });

// export const userController = {
//   createUser,
// };
