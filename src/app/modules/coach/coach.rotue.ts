import express from 'express';
import { CoachValidation } from './coach.validation';
import validateRequest from '../../middlewares/validationRequest';
import { CoachController } from './coach.controller';

const router = express.Router();

router.post(
  '/create-coach',
  validateRequest(CoachValidation.coachSchema),
  CoachController.createCoach,
);

export const userRoute = router;
