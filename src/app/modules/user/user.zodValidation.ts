// import { z } from 'zod';

// const createUserZodSchema = z.object({
//   body: z.object({
//     name: z.object({
//       firstName: z.string({
//         required_error: 'First name is required',
//       }),
//       lastName: z.string({
//         required_error: 'Last Name is required',
//       }),
//     }),
//     email: z
//       .string({
//         required_error: 'Email is required',
//       })
//       .email(),
//     password: z.string().optional(),
//     isPasswordChange: z.boolean(),
//     role: z.enum(['admin', 'client', 'coach'], {
//       required_error: 'Role is Required',
//     }),
//     category: z.enum(['in-person', 'online', 'hybrid'], {
//       required_error: 'Role is Required',
//     }),
//     status: z.enum(['connected', 'offline', 'pending'], {
//       required_error: 'Role is Required',
//     }),
//     phoneNumber: z.string({
//       required_error: 'Phone number is required',
//       // You can add more phone number validation here if needed
//     }),

//     birthDate: z.string().optional(),
//     gender: z.string({
//       required_error: 'Gender is required',
//     }),
//     owner: z.string().optional(),
//   }),
// });
// // console.log('createUserZodValidation', createUserZodValidation)

// export const userValidation = {
//   createUserZodSchema,
// };
