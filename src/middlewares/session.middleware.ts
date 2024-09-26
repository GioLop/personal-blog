import session from 'express-session';
import config from '../config';

const { SESSION_SECRET_KEY } = config;

const options: session.SessionOptions = {
  secret: SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
};

const sessionMiddleware = session(options);

export default sessionMiddleware;