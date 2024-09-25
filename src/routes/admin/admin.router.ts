import { Router } from 'express';
import { httpGetAdminHandler } from './admin.handler';
import authorizeMiddleware from '../../middlewares/authorize.middleware';

const adminRouter = Router();

adminRouter.get('/', authorizeMiddleware, httpGetAdminHandler);

export default adminRouter;