import { Router } from 'express';
import { httpGetEditHandler, httpPostEditHandler } from './edit.handler';
import articleValidatorMiddleware from '../../middlewares/article-validator.middleware';
import { createArticleDto } from '../../dtos/article.dto';

const editRouter = Router();

editRouter.get('/:articleId', httpGetEditHandler);
editRouter.post('/:articleId', articleValidatorMiddleware(createArticleDto), httpPostEditHandler);

export default editRouter;