import express from 'express';
import { clientController } from './client.controller';

const router = express.Router();

// get all client under the coach
router.get('/', clientController.getAllClientUnderCoach);

export const clientRoute = router;
