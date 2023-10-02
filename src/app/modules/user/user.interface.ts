import { Model, Types } from 'mongoose';
import { IClientInfo } from '../client/client.interface';

export type IUser = {
  email: string;
  password: string;
  isPasswordChange: boolean;
  role: string;
  clientData: Types.ObjectId | IClientInfo;
};

export type UserModel = Model<IUser, Record<string, unknown>>;
