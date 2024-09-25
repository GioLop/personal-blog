import { Request, Response } from 'express';
import { getUserId, isValidAdmin } from '../../lib/user.lib';
import { authSession } from '../../middlewares/authorize.middleware';

interface RequestBody {
  userName: string,
  userPassword: string,
};

const httpLoginGetHandler = (req: Request, res: Response) => {
  res.render('pages/loginForm', {
    formTitle: 'Login',
    handler: '/login',
    method: 'post'
  });
};

const httpLoginPostHandler = (req: Request, res: Response) => {
  const { userName, userPassword } = req.body as RequestBody;
  
  if (isValidAdmin(userName, userPassword)) {
    const userId = getUserId();
    (req.session as authSession).userId = userId;
    
    return res.redirect('/admin');
  } else {
    res.send('Error while login');
  }
};

export {
  httpLoginGetHandler,
  httpLoginPostHandler
};