interface Config  {
  SERVER_PORT: string | number;
  ADMIN_USERNAME: string;
  ADMIN_PASSWORD: string,
  USERD_ID: string,
  SESSION_SECRET_KEY: string
};

export default Config;