import { Schema, model } from 'mongoose';
import { ClientModel, IClientInfo } from './client.interface';

export const clientSchema = new Schema<IClientInfo>(
  {
    name: {
      type: {
        clientFirstName: {
          type: String,
          required: true,
        },
        clientLastName: {
          type: String,
          required: true,
        },
      },
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // role: {
    //   type: String,
    //   required: true,
    // },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ['online', 'hybrid', 'in-person'],
      required: true,
    },
    position: {
      type: String,
      enum: ['connected', 'pending', 'offline'],
      required: true,
    },
    owner: {
      type: String,
    },
    coachId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Client = model<IClientInfo, ClientModel>('Client', clientSchema);
