import { Router } from 'express';
import { httpGetAdminHandler } from './admin.handler';

const adminRouter = Router();

adminRouter.get('/', httpGetAdminHandler);

export default adminRouter;