import { Router } from 'express';
import homeRouter from './home/home.router';
import articleRouter from './article/article.router';
import adminRouter from './admin/admin.router';
import editRouter from './edit/edit.router';
import newRouter from './new/new.router';
import loginRouter from './login/login.router';
import authorizeMiddleware from '../middlewares/authorize.middleware';
import deleteRouter from './delete/detele.router';

const appRouter = Router();

appRouter.use('/', homeRouter);
appRouter.use('/article', articleRouter);
appRouter.use('/login', loginRouter);
appRouter.use('/admin', authorizeMiddleware, adminRouter);
appRouter.use('/edit', authorizeMiddleware, editRouter);
appRouter.use('/new', authorizeMiddleware, newRouter);
appRouter.use('/delete', authorizeMiddleware, deleteRouter);

export default appRouter;