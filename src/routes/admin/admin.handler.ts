import { Request, Response } from 'express';
import { getAllArticlesList } from '../../models/index.model';

const httpGetAdminHandler = (_req: Request, res: Response) => {
  void (async () => {
    const articles = await getAllArticlesList();

    res.render('pages/admin', { articles });
  })();
};

export {
  httpGetAdminHandler
};