import { Request, Response } from 'express';

const httpLoginGetHandler = (req: Request, res: Response) => {
  res.render('pages/loginForm', {
    formTitle: 'Login',
    handler: '/login',
    method: 'post'
  });
};

const httpLoginPostHandler = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Login POST Page');
};

export {
  httpLoginGetHandler,
  httpLoginPostHandler
};