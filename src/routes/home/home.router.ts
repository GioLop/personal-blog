import { Request, Response, Router } from 'express';

const homeRouter = Router();

homeRouter.get('/', (_req: Request, res: Response) => {
  res.send('Home Page');
});

export default homeRouter;