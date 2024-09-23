import { Request, Response, Router } from 'express';

const adminRouter = Router();

adminRouter.get('/', (_req: Request, res: Response) => {
  res.send('Admin Page');
});

export default adminRouter;