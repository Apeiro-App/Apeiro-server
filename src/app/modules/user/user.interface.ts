import { Model } from 'mongoose';

export type UserName = {
  firstName: string;
  lastName: string;
};

export type IUser = {
  name: UserName;
  email: string;
  password: string;
  isPasswordChange: boolean;
  role: 'admin' | 'coach' | 'client';
  category: 'in-person' | 'online' | 'hybrid';
  status: 'connected' | 'pending' | 'online';
  phoneNumber: string;
  birthDate: string;
  gender: string;
  owner: string;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

// export type IStudentFilters = {
//   searchTerm?: string;
// };
