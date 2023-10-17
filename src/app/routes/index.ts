import express from 'express';
import { userRoute } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import { clientRoute } from '../modules/client/client.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/client',
    route: clientRoute,
  },
];

moduleRoutes.map(route => router.use(route.path, route.route));

export default router;
