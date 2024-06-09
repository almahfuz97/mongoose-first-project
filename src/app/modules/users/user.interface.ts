export interface IUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'faculty' | 'student';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  // name: string,
  // gender: string;
  // DateOfBirth: Date;
  // email: string;
  // contactNo: string;
  // emergencyContact: string;
  // presentAddress: string;
  // parmanentAddress: string;
  // profileImg: string;
}
