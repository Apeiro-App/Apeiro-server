import { Model, Types } from 'mongoose';
import { IClientInfo } from '../client/client.interface';
import { ICoachInfo } from '../coach/coach.interface';
import { IAdminInfo } from '../admin/admin.mode';

export type IUser = {
  email: string;
  password: string;
  isPasswordChange: boolean;
  role: string;
  clientData: Types.ObjectId | IClientInfo;
  coachData: Types.ObjectId | ICoachInfo;
  adminData: Types.ObjectId | IAdminInfo;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
