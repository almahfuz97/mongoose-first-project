import { Schema, model } from 'mongoose'
import { Guardian, Student, StudentName } from './students.interface'

const studentNameSchema = new Schema<StudentName>({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    }
})

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
})

// main schema
const studentsSchema = new Schema<Student>({
    id: { type: String },
    name: studentNameSchema,
    gender: ["male", "female"],
    dateOfBirth: { type: String },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String, required: true
    },
    emergencyContact: {
        type: String, required: true
    },
    bloodGroup: [
        'A+',
        'A-',
        'B+',
        'B-',
        'AB+',
        'AB-',
        'O+',
        'O-'
    ],
    avatar: { type: String },
    presentAddress: { type: String, required: true },
    parmanentAddress: { type: String, required: true },
    guardian: guardianSchema,
    isActive: { type: String }

}, {
    collection: 'students' // Explicitly specify collection name if needed
})

export const StudentModel = model<Student>("Student", studentsSchema)