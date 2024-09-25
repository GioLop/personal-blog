import { Request, Response } from 'express';
import { getArticlesList } from '../../models/index.model';

const httpGetHomeHandler = (_req: Request, res: Response) => {
  void (async () => {
    const articles = await getArticlesList();

    res.render('pages/home', { articles });
  })();
};

export {
  httpGetHomeHandler
};