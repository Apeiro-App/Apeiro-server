import express from 'express';
import { authController } from './auth.controller';
import validateRequest from '../../middlewares/validationRequest';
import { authValidation } from './auth.validation';

const router = express.Router();

// login
router.post(
  '/login',
  validateRequest(authValidation.authValidationZodSchema),
  authController.loginUser,
);

// refresh token
router.post(
  '/refresh-token',
  validateRequest(authValidation.refreshTokenValidationZodSchema),
  authController.refreshToken,
);

export const authRoute = router;
