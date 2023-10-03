import { Schema, model } from 'mongoose';
import { ICoachInfo } from './coach.interface';

const coachSchema = new Schema<ICoachInfo>(
  {
    name: {
      coachFirstName: {
        type: String,
        required: true,
      },
      coachLastName: {
        type: String,
        required: true,
      },
    },
    adminId: {
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

// Create the Coach model
export const Coach = model<ICoachInfo>('Coach', coachSchema);
