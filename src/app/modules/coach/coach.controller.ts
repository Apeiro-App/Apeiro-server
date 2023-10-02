import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './coach.services';
import httpStatus from 'http-status';
import { ICoachInfo } from './coach.interface';
import { responseForData } from '../../../shared/sendResponse';

const createCoach: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student, ...userData } = req.body;

    const result = await UserService.createStudent(student, userData);

    responseForData.sendResponseForCreate<ICoachInfo>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  },
);

export const CoachController = {
  createCoach,
};
