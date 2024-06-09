import { z } from 'zod';

const zodUserSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must a string' })
    .min(3, { message: 'min 3 characters for password' })
    .max(20, { message: 'Max 20 characters password' })
    .optional(),
  // name: z.string().min(3),
  // gender: z.enum(['male', 'female']),
  // dateOfBirth: z.date(),
  // email: z.string().email(),
  // contactNo: z.string().min(11),
  // emergencyContact: z.string().min(11),
  // presentAddress: z.string(),
  // parmanentAddress: z.string(),
  // profileImg: z.string().optional().default('abc')
});

export const ZodValidationUser = {
  zodUserSchema,
};
