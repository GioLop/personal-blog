import { Router } from 'express';
import { httpGetArticleHandler } from './article.handler';

const articleRouter = Router();

articleRouter.get('/:articleId', httpGetArticleHandler);

export default articleRouter;