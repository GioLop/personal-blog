import { Router } from 'express';
import { httpLoginGetHandler, httpLoginPostHandler } from './login.handler';

const loginRouter = Router();

loginRouter.get('/', httpLoginGetHandler);
loginRouter.post('/', httpLoginPostHandler);

export default loginRouter;