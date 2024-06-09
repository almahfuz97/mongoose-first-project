import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'faculty', 'student'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    // name: {
    //     type: String,
    //     required: true,
    // },
    // gender: {
    //     type: String,
    //     enum: ['male', 'female'],
    //     required: true,
    // },
    // DateOfBirth: {
    //     type: Date,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // contactNo: {
    //     type: String,
    //     required: true,
    // },
    // emergencyContact: {
    //     type: String,
    //     required: true,
    // },
    // presentAddress: {
    //     type: String,
    //     required: true,
    // },
    // parmanentAddress: {
    //     type: String,
    //     required: true,
    // },
    // profileImg: {
    //     type: String,
    //     required: true,
    // },
  },
  { timestamps: true },
);
UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcypt_salt_rounds),
  );
  next();
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
export const UserModel = model<IUser>('User', UserSchema);
