import { Router } from 'express';
import { httpGetNewHandler, httpPostNewHandler } from './new.handler';
import articleValidatorMiddleware from '../../middlewares/article-validator.middleware';
import { createArticleDto } from '../../dtos/article.dto';

const newRouter = Router();

newRouter.get('/', httpGetNewHandler);
newRouter.post('/', articleValidatorMiddleware(createArticleDto), httpPostNewHandler);

export default newRouter;