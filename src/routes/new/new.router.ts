import { Request, Response, Router } from 'express';

const newRouter = Router();

newRouter.get('/', (_req: Request, res: Response) => {
  res.send('New Page');
});

export default newRouter;