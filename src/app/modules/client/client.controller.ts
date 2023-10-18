import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { clientService } from './client.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { IClientInfo } from './client.interface';
import querySchema from '../../../shared/types';

// get all client under coach
const getAllClientUnderCoach = catchAsync(
  async (req: Request, res: Response) => {
    // const filters = pick(req.query, [
    //   'searchTerm',
    //   'status',
    //   'position',
    //   'email',
    //   'createdAt',
    // ]);
    // console.log('searchTerm', filters);
    const filters = querySchema.parse(req.query);

    const paginationOption = pick(req.query, [
      'limit',
      'page',
      'sortBy',
      'sortOrder',
    ]);
    const id = req.params.coachId;

    const result = await clientService.getAllClientUnderCoach(
      id,
      filters,
      paginationOption,
    );

    responseForData.sendResponse<IClientInfo[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student Getting Successful',
      data: result.data,
      meta: result.meta,
    });
  },
);

export const clientController = {
  getAllClientUnderCoach,
};
