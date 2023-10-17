import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../interfaces/pagination';
import { IClientInfo } from './client.interface';
import { Client } from './client.model';

const getAllClientUnderCoach = async (
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<IClientInfo[]>> => {
  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;

  const result = await Client.find().sort().skip(skip).limit(limit);

  const total = await Client.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const clientService = {
  getAllClientUnderCoach,
};
