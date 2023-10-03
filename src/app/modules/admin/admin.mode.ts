import { Model } from 'mongoose';

export type Name = {
  clientFirstName: string;
  clientLastName: string;
};

export type IAdminInfo = {
  name: Name;
  adminId: string;
  coachId: string;
  isVerified: boolean;
  number: number;
  birthDate: string;
  gender: 'male' | 'female';
  owner?: string;
  role: string;
};

export type AdminModel = Model<IAdminInfo, Record<string, unknown>>;
