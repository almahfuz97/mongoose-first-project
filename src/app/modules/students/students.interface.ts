// import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fathersName: string;
    fathersOccupation: string;
    fathersContact: string;
    mothersName: string;
    mothersOccupation: string;
    mothersContact: string;
}
export type StudentName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type Student = {
    id: string,
    name: StudentName
    gender: "male" | "female";
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContact: string;
    bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    avatar?: string;
    presentAddress: string;
    parmanentAddress: string;
    guardian: Guardian;
    isActive: "active" | "inactive"
}