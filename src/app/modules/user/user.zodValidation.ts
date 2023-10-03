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
      coachId: z.string({
        required_error: 'Coach id is required',
      }),
    }),
  }),
});
// console.log('createUserZodValidation', createUserZodValidation)

const coachZodSchema = z.object({
  body: z.object({
    coach: z.object({
      name: z.object({
        coachFirstName: z.string({
          required_error: 'Coach first name is required',
        }),
        coachLastName: z.string({
          required_error: 'Coach last name is required',
        }),
      }),
      email: z.string({
        required_error: 'Email is required',
      }),
      adminId: z.string({
        required_error: 'Admin ID is required',
      }),
      isVerified: z.boolean({
        required_error: 'Verification status is required',
      }),
      number: z.number({
        required_error: 'Number is required',
      }),
      birthDate: z.string({
        required_error: 'Birth date is required',
      }),
      gender: z.string({
        required_error: 'Gender is required',
      }),
      owner: z.string().optional(),
      role: z.string({
        required_error: 'Role is required',
      }),
    }),
  }),
});

const adminZodSchema = z.object({
  body: z.object({
    admin: z.object({
      name: z.object({
        adminFirstName: z.string({
          required_error: 'Admin first name is required',
        }),
        adminLastName: z.string({
          required_error: 'Admin last name is required',
        }),
      }),
      email: z.string({
        required_error: 'Email is required',
      }),
      adminId: z.string({
        required_error: 'Admin ID is required',
      }),
      isVerified: z.boolean({
        required_error: 'Verification status is required',
      }),
      number: z.number({
        required_error: 'Number is required',
      }),
      birthDate: z.string({
        required_error: 'Birth date is required',
      }),
      gender: z.string({
        required_error: 'Gender is required',
      }),
      owner: z.string().optional(),
      role: z.string({
        required_error: 'Role is required',
      }),
    }),
  }),
});

export const userValidation = {
  clientZodSchema,
  coachZodSchema,
  adminZodSchema,
};
