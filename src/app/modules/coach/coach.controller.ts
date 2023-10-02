import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import catchAsync from '../../../shared/catchAsync';

const createCoach: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {},
);

export const CoachController = {
  createCoach: createCoach,
};
