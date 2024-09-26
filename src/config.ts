import 'dotenv/config';
import Config from './types/config.types';

const {
  SERVER_PORT,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  USERD_ID,
  SESSION_SECRET_KEY
} = process.env;

export default {
  SERVER_PORT: SERVER_PORT || 8000,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  USERD_ID,
  SESSION_SECRET_KEY
} as Config;