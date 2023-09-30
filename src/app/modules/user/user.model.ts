import mongoose, { Schema, model } from 'mongoose';

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
  },
  categories: [
    {
      type: String,
    },
  ],
  phoneNumber: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // You can add more properties as needed
});

export const User = model<IUser, UserModel>('User', userSchema);
