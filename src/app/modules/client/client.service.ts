import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOption } from '../../../interfaces/pagination';
import { IClientFilters, IClientInfo } from './client.interface';
import { Client } from './client.model';

const getAllClientUnderCoach = async (
  id: string,
  filters: IClientFilters,
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<IClientInfo[]>> => {
  const { searchTerm, ...filtersData } = filters;
  console.log('searchTerm', searchTerm);
  const clientSearchFiled = ['name.clientFirstName', 'name.clientLastName'];

  const andCondition = [];
  if (searchTerm) {
    andCondition.push({
      $or: clientSearchFiled.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  // const whereConditions = andCondition.length > 0 ? { $and: andCondition };
  const whereConditions =
    andCondition.length > 0 ? { andCondition } : { coachId: id };

  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;

  const result = await Client.find({
    $and: [{ coachId: id }, { whereConditions }],
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
