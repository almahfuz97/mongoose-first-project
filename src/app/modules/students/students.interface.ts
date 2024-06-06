// import { Schema, model, connect } from 'mongoose';

import { ObjectId } from "mongodb";

export interface Guardian {
  fathersName: string;
  fathersOccupation: string;
  fathersContact: string;
  mothersName: string;
  mothersOccupation: string;
  mothersContact: string;
};
export type StudentName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export interface IStudent {
  id: string;
  password: string;
  user: ObjectId;
  name: StudentName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContact: string;
  // bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  // avatar?: string;
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  academicDept: string;
  profileImg: string
};
