import config from '../config';

const { 
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
  USERD_ID
} = config;

const isValidAdmin = (
  userName: string,
  password: string
) => userName === ADMIN_USERNAME && password === ADMIN_PASSWORD;

const getUserId = () => {
  return USERD_ID;
};

export {
  isValidAdmin,
  getUserId
};