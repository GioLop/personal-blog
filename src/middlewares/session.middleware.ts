import session from 'express-session';

const options: session.SessionOptions = {
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
};

const sessionMiddleware = session(options);

export default sessionMiddleware;