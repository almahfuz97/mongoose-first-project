import { z } from 'zod';

const zodUserSchema = z.object({
  password: z
    .string({ invalid_type_error: 'Password must a string' })
    .min(3, { message: 'min 3 characters for password' })
    .max(20, { message: 'Max 20 characters password' })
    .optional(),
});

export const ZodValidationUser = {
  zodUserSchema,
};
