import { StudentModel } from './student.model';
import { Student } from './students.interface';

const createStudentIntoB = async (studentData: Student) => {
  //   const result = await StudentModel.create(student); //static

  // instance
  const student = new StudentModel(studentData);
  const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  createStudentIntoB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
