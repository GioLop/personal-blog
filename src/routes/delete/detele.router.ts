import { Router } from 'express';
import { httpGetDeleteHandler, httpPostDeleteHandler } from './delete.handler';

const deleteRouter = Router();

deleteRouter.get('/:articleId', httpGetDeleteHandler);
deleteRouter.post('/:articleId', httpPostDeleteHandler);

export default deleteRouter;