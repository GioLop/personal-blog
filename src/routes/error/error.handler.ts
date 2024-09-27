import { Request, Response } from 'express';

const httpGetErrorHandler = (req: Request, res: Response) => {
  const { from, error } = req.query;
  
  res.render('pages/error', {
    from,
    message: error
  });
};

export {
  httpGetErrorHandler
};