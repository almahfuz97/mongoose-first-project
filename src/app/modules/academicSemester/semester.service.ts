import {
  IAcademicSemester,
  IAcademicSemesterNameAndCode,
} from './semester.interface';
import { AcademicSemesterModel } from './semester.model';

const createAcademicSemesterIntoDB = async (payload: IAcademicSemester) => {
  const academicSemesterNameMapper: IAcademicSemesterNameAndCode = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (academicSemesterNameMapper[payload.name] !== payload.code) {
    throw new Error('Invalid academic semester code');
  } else {
    const result = await AcademicSemesterModel.create(payload);
    return result;
  }
};

export const AcademicSemesterServices = {
  //   getAllStudentsFromDB,
  createAcademicSemesterIntoDB,
};
