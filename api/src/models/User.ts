import { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { BCRYPT_WORK_FACTOR } from '../config';

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
  matchesPassword: (password: string) => Promise<boolean>;
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

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, BCRYPT_WORK_FACTOR);
  }
});

UserSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform: (doc, { __v, password, ...rest }, options) => rest,
});

UserSchema.set('toObject', {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform: (doc, { __v, password, ...rest }, options) => rest,
});

UserSchema.methods.matchesPassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const UserModel = model<IUserDocument>('User', UserSchema);

export default UserModel;
