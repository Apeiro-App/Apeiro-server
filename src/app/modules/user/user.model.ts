import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: 0,
  },
  isPasswordChange: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
  },
  clientData: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
});

export const User = model<IUser, UserModel>('User', userSchema);
