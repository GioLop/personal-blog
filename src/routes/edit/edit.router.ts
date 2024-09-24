import { Router } from 'express';
import { httpGetEditHandler, httpPostEditHandler } from './edit.handler';

const editRouter = Router();

editRouter.get('/:articleId', httpGetEditHandler);
editRouter.post('/:articleId', httpPostEditHandler);

export default editRouter;