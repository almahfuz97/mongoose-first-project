import { z } from 'zod';
import { months } from './semester.interface';

const zodAcademicSemesterSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    code: z.enum(['01', '02', '03']),
    year: z.string(),
    startMonth: z.enum(months as [string, ...string[]]),
    endMonth: z.enum(months as [string, ...string[]]),
  }),
  // gender: z.enum(['male', 'female']),
  // dateOfBirth: z.date(),
  // email: z.string().email(),
  // contactNo: z.string().min(11),
  // emergencyContact: z.string().min(11),
  // presentAddress: z.string(),
  // parmanentAddress: z.string(),
  // profileImg: z.string().optional().default('abc')
});

export const zodValidationAcademicSemester = {
  zodAcademicSemesterSchema,
};
