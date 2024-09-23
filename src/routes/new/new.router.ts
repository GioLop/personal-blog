import { Router } from 'express';
import { httpGetNewHandler, httpPostNewHandler } from './new.handler';

const newRouter = Router();

newRouter.get('/', httpGetNewHandler);
newRouter.post('/', httpPostNewHandler);

export default newRouter;