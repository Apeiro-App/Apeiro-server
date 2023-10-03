// import { z } from 'zod';

// const coachSchema = z.object({
//   name: z.object({
//     coachFirstName: z.string({
//       required_error: 'Coach first name is required',
//     }),
//     coachLastName: z.string({
//       required_error: 'Coach last name is required',
//     }),
//   }),
//   adminId: z.string({
//     required_error: 'Admin ID is required',
//   }),
//   coachId: z.string({
//     required_error: 'Coach ID is required',
//   }),
//   isVerified: z.boolean({
//     required_error: 'Verification status is required',
//   }),
//   number: z.number({
//     required_error: 'Number is required',
//   }),
//   birthDate: z.string({
//     required_error: 'Birth date is required',
//   }),
//   gender: z.enum(['male', 'female'], {
//     required_error: 'Gender is required',
//   }),
//   owner: z.string().optional(),
//   role: z.string({
//     required_error: 'Role is required',
//   }),
// });

// export const CoachValidation = {
//   coachSchema,
// };
