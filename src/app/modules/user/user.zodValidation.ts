import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string(),
    isPasswordChange: z.boolean().optional(),
    role: z.enum(['admin', 'client', 'coach'], {
      required_error: 'Role is Required',
    }),
    category: z.enum(['in-person', 'online', 'hybrid'], {
      required_error: 'Role is Required',
    }),
    status: z.enum(['connected', 'online', 'pending'], {
      required_error: 'Role is Required',
    }),
    phoneNumber: z
      .string({
        required_error: 'Phone number is required',
        // You can add more phone number validation here if needed
      })
      .optional(),
    birthDate: z
      .string({
        required_error: 'Birth date is required',
        // You can add more birth date validation here if needed
      })
      .optional(),
    gender: z
      .string({
        required_error: 'Gender is required',
        // You can add more gender validation here if needed
      })
      .optional(),
    owner: z
      .string({
        required_error: 'Owner is required',
        // You can add more owner validation here if needed
      })
      .optional(),
  }),
});
// console.log('createUserZodValidation', createUserZodValidation)

export const userValidation = {
  createUserZodSchema,
};
