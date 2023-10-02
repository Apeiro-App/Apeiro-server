import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DB_LOCAL,
  default_user_password: process.env.USER_DEFAULT_PASS,
  bycrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
};
