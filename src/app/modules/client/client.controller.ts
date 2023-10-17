import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { clientService } from './client.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { IClientInfo } from './client.interface';

// get all client under coach
const getAllClientUnderCoach = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, [
      'searchTerm',
      'status',
      'position',
      'email',
    ]);
    console.log(filters);
    const paginationOption = pick(req.query, [
      'limit',
      'page',
      'sortBy',
      'sortOrder',
    ]);
    console.log(paginationOption);
    const id = req.params.coachId;
    // console.log(id);
    const result = await clientService.getAllClientUnderCoach(
      id,
      paginationOption,
      filters,
    );
    console.log('result', result);

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
