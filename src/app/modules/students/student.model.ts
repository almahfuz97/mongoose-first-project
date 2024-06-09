import { Schema, model } from 'mongoose';
import { Guardian, IStudent, StudentName } from './students.interface';

const studentNameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required!'],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not in capitalize format',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fathersOccupation: {
    type: String,
    required: true,
  },
  fathersContact: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mothersOccupation: {
    type: String,
    required: true,
  },
  mothersContact: {
    type: String,
    required: true,
  },
});

// main schema
const studentsSchema = new Schema<IStudent>({
  id: { type: String, required: true, unique: true },
  password: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  name: { type: studentNameSchema, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
  },

  contactNo: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
  guardian: { type: guardianSchema, required: true },
});

export const StudentModel = model<IStudent>('Student', studentsSchema);
