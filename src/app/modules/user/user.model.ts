import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isPasswordChange: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['admin', 'client', 'coach'],
    default: 'client',
    required: true,
  },
  category: {
    type: String,
    enum: ['in-person', 'online', 'hybrid'],
    required: true,
  },
  status: {
    type: String,
    enum: ['connected', 'offline', 'pending'],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  owner: {
    type: String,
  },
  // You can add more properties as needed
});

export const User = model<IUser, UserModel>('User', userSchema);
