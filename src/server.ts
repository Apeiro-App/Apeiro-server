import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorLogger } from './shared/logger';

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('database is connected successfully');
    app.listen(config.port, () => {
      logger.info(`app is listening in the ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('Failed to connect database', err);
  }

  //   process.on("unhandledRejection", (error) => {
  //     console.log(
  //       "Unhandled rejection is detected we are closing our server....."
  //     );
  //     if (server) {
  //       server.close(() => {
  //         errorLogger.error(error);
  //         process.exit(1);
  //       });
  //     } else {
  //       process.exit(1);
  //     }
  //   });
}

boostrap();
