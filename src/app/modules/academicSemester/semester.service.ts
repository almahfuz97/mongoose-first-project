import { ObjectId } from 'mongodb';
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

//  gett all academic semesters
const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleSemesterWithIDFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findOne({ _id: id });
  return result;
};

const updateSemesterWithIDInDB = async (
  id: string,
  payload: Partial<IAcademicSemester>,
) => {
  const academicSemesterNameMapper: IAcademicSemesterNameAndCode = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (
    payload.name &&
    payload.code &&
    academicSemesterNameMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid academic semester code');
  } else {
    const result = await AcademicSemesterModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    return result;
  }
};
export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleSemesterWithIDFromDB,
  updateSemesterWithIDInDB,
};
