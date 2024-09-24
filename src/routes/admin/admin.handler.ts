import { Request, Response } from 'express';
import { getArticlesList } from '../../models/article.model';

const httpGetAdminHandler = async (_req: Request, res: Response) => {
  void (async () => {
    const articles = await getArticlesList();

    res.render('pages/admin', { articles });
  })();
};

export {
  httpGetAdminHandler
};