import express from 'express';
import { userController } from './user.controller';
import { userValidation } from './user.zodValidation';
import validateRequest from '../../middlewares/validationRequest';

const router = express.Router();

router.post(
  '/create-client',
  validateRequest(userValidation.clientZodSchema),
  userController.createClient,
);

export const userRoute = router;
