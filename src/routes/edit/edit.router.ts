import { Request, Response, Router } from 'express';

const editRouter = Router();

editRouter.get('/', (_req: Request, res: Response) => {
  res.send('Edit Page');
});

export default editRouter;