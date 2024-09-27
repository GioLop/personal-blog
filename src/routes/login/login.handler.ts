import { Request, Response } from 'express';
import { getUserId, isValidAdmin } from '../../lib/user.lib';
import { authSession } from '../../middlewares/authorize.middleware';
import { LoginRequestBody } from '../../types/request.types';

const httpLoginGetHandler = (req: Request, res: Response) => {
  res.render('pages/loginForm', {
    formTitle: 'Login',
    handler: '/login',
    method: 'post'
  });
};

const httpLoginPostHandler = (req: Request, res: Response) => {
  const { userName, userPassword } = req.body as LoginRequestBody;
  
  if (isValidAdmin(userName, userPassword)) {
    const userId = getUserId();
    (req.session as authSession).userId = userId;
    
    return res.redirect('/admin');
  } else {
    throw new Error('Invalid user name or wrong user password');
  }
};

export {
  httpLoginGetHandler,
  httpLoginPostHandler
};