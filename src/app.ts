import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import necessery files
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

app.use('/api/v1', router);

// app.get('/', async (req: Request, res: Response) => {
//   res.send('Successful');
// });

app.use(globalErrorHandler);

// if not found any route or api
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route not found',
    errorMessage: [
      {
        path: '.',
        message: 'Api Is not found',
      },
    ],
  });
  next();
});

export default app;
