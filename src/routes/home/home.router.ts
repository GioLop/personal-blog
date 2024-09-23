import { Router } from 'express';
import { httpGetHomeHandler } from './home.handler';

const homeRouter = Router();

homeRouter.get('/', httpGetHomeHandler);

export default homeRouter;