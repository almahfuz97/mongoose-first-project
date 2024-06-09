import config from '../../config';
import { StudentModel } from '../students/student.model';
import { IStudent } from '../students/students.interface';
import { IUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentToDB = async (studentData: IStudent) => {
  const password = studentData.password;
  const userData: Partial<IUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = 'student';
  userData.status = 'in-progress';
  userData.id = '202406001';

  // create a user
  const newUser = await UserModel.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    studentData.user = newUser._id;
    studentData.id = newUser.id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentToDB,
};
