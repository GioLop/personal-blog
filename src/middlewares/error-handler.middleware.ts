import url from 'node:url';
import { NextFunction, Request, Response } from 'express';

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    const { message } = err;
    res.redirect(url.format({
      pathname: '/error',
      query: {
        from: req.url.replace('/', ''),
        error: message
      }
    }));
  }
  next();
};

export default errorHandlerMiddleware;