import { Request, Response } from 'express';
import { getAvailableArticlesList } from '../../models/index.model';

const httpGetHomeHandler = (_req: Request, res: Response) => {
  void (async () => {
    const articles = await getAvailableArticlesList();

    res.render('pages/home', { articles });
  })();
};

export {
  httpGetHomeHandler
};