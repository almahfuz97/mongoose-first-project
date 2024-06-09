import { Schema, model } from 'mongoose';
import { IAcademicSemester, months } from './semester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>({
  name: {
    type: String,
    enum: ['Autumn', 'Summer', 'Fall'],
    required: true,
  },
  code: {
    type: String,
    enum: ['01', '02', '03'],
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: months,
  },
  endMonth: {
    type: String,
    enum: months,
  },
});

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterNameExists = await AcademicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterNameExists) {
    throw new Error('Same semester exits!');
  }
  next();
});

export const AcademicSemesterModel = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
