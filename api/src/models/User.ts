/**
 * _id
 * Name
 * Lastname
 * Username
 * email
 * password
 * salt?
 * isAdmin
 * Status
 * TimeCreated
 * TimeUpdated
 */

import { Document, model, Schema } from 'mongoose';

export interface IUserDto {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  isAdmin?: boolean;
}

export interface IUserDocument extends Document {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  isAdmin: boolean;
}

const UserSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: false, default: false },
  },
  { timestamps: true }
);

const UserModel = model<IUserDocument>('User', UserSchema);

export default UserModel;
