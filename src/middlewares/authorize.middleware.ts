import { NextFunction, Request, Response } from 'express';
import session from 'express-session';

interface authSession extends session.Session {
  userId: string
};

const authorizeMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!(req.session as authSession).userId) {
    return res.redirect('/login');
  }
  next();
};

export default authorizeMiddleware;