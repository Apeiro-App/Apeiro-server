import { z } from 'zod';

const clientZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    client: z.object({
      name: z.object({
        clientFirstName: z.string({
          required_error: 'First name is required',
        }),
        clientLastName: z.string({
          required_error: 'Last Name is required',
        }),
      }),
      email: z
        .string({
          required_error: 'Email is required',
        })
        .email(),

      // isPasswordChange: z.boolean(),
      // role: z.string({
      //   required_error: 'Role is required',
      // }),
      status: z.enum(['in-person', 'online', 'hybrid'], {
        required_error: 'Role is Required',
      }),
      position: z.enum(['connected', 'offline', 'pending'], {
        required_error: 'Role is Required',
      }),
      phoneNumber: z.string({
        required_error: 'Phone number is required',
        // You can add more phone number validation here if needed
      }),

      birthDate: z.string().optional(),
      gender: z.string({
        required_error: 'Gender is required',
      }),
      owner: z.string().optional(),
      clientData: z.string({
        required_error: 'Client ID is required',
      }),
    }),
  }),
});
// console.log('createUserZodValidation', createUserZodValidation)

export const userValidation = {
  clientZodSchema,
};
