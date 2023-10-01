import { Model } from 'mongoose';

export type Name = {
  clientFirstName: string;
  clientLastName: string;
};

export type IClientInfo = {
  name: Name;
  role: string;
  coachId: string;
  status: 'online' | 'hybrid' | 'in-person';
  position: 'connected' | 'pending' | 'offline';
  phoneNumber: string;
  birthDate: string;
  owner: string;
  gender: 'male' | 'female';
};

export type ClientModel = Model<IClientInfo, Record<string, unknown>>;
