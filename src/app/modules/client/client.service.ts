import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../interfaces/pagination';
import querySchema from '../../../shared/types';
import { IClientInfo } from './client.interface';
import { Client } from './client.model';
import { InferOutput } from 'rype';

const getAllClientUnderCoach = async (
  id: string,
  filters: InferOutput<typeof querySchema>,
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<IClientInfo[]>> => {
  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;

  const result = await Client.find({
    coachId: id,
    'name.clientFirstName': {
      $regex: filters.searchTerm,
      $options: 'i',
    },
    position: filters.position,
    status: filters.status,
    email: {
      $regex: filters.email,
      $options: 'i',
    },
  })
    .sort({
      createdAt: 'desc',
    })
    .skip(skip)
    .limit(limit);

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
// $and: [{ coachId: id }, { whereConditions }],
