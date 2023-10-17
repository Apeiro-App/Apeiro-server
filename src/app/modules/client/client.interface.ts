import { Model, Types } from 'mongoose';
import { IUser } from '../user/user.interface';

export type Name = {
  clientFirstName: string;
  clientLastName: string;
};

export type IClientInfo = {
  name: Name;
  role: string;
  status: 'online' | 'hybrid' | 'in-person';
  position: 'connected' | 'pending' | 'offline';
  phoneNumber: string;
  birthDate: string;
  owner: string;
  gender: 'male' | 'female';
  email: string;
  coachId: string;
};

export type ClientModel = Model<IClientInfo, Record<string, unknown>>;

export type IClientFilters = {
  searchTerm?: string;
};
