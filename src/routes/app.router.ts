import { Router } from 'express';
import homeRouter from './home/home.router';
import articleRouter from './article/article.router';
import adminRouter from './admin/admin.router';
import editRouter from './edit/edit.router';
import newRouter from './new/new.router';
import loginRouter from './login/login.router';
import authorizeMiddleware from '../middlewares/authorize.middleware';

const appRouter = Router();

appRouter.use('/', homeRouter);
appRouter.use('/article', articleRouter);
appRouter.use('/admin', authorizeMiddleware, adminRouter);
appRouter.use('/edit', authorizeMiddleware, editRouter);
appRouter.use('/new', authorizeMiddleware, newRouter);
appRouter.use('/login', loginRouter);

export default appRouter;