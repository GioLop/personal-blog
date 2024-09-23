import { Request, Response, Router } from 'express';

const articleRouter = Router();

articleRouter.get('/', (_req: Request, res: Response) => {
  res.send('Article Page');
});

export default articleRouter;