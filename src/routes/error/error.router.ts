import { Router } from 'express';
import { httpGetErrorHandler } from './error.handler';

const errorRouter = Router();

errorRouter.get('/', httpGetErrorHandler);

export default errorRouter;