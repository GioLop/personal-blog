import { Router } from 'express';
import { httpLoginGetHandler, httpLoginPostHandler } from './login.handler';
import loginValidatorMiddleware from '../../middlewares/login-validator.middleware';
import { loginDto } from '../../dtos/login.dto';

const loginRouter = Router();

loginRouter.get('/', httpLoginGetHandler);
loginRouter.post('/', loginValidatorMiddleware(loginDto), httpLoginPostHandler);

export default loginRouter;