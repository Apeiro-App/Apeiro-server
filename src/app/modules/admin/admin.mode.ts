import { Schema, model } from 'mongoose';
import { IAdminInfo } from './admin.interface';

const coachSchema = new Schema<IAdminInfo>(
  {
    name: {
      adminFirstName: {
        type: String,
        required: true,
      },
      adminLastName: {
        type: String,
        required: true,
      },
    },
    coachId: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: Number,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    owner: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Create the Admin model
export const Admin = model<IAdminInfo>('Admin', coachSchema);
