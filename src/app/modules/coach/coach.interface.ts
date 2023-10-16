import { Model } from 'mongoose';

export type Name = {
  clientFirstName: string;
  clientLastName: string;
};

export type ICoachInfo = {
  name: Name;
  adminId: string;
  // coachId: string;
  isVerified: boolean;
  number: number;
  email: string;
  birthDate: string;
  gender: 'male' | 'female';
  owner?: string;
  role: string;
};

export type CoachModel = Model<ICoachInfo, Record<string, unknown>>;
