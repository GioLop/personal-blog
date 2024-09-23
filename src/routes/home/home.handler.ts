import { Request, Response } from 'express';
import { getArticlesList } from '../../models/articles.model';

const httpGetHomeHandler = (_req: Request, res: Response) => {
  void (async () => {
    const articleList = await getArticlesList();

    res.render('pages/home', {
      articles: articleList
    });
  })();
};

export {
  httpGetHomeHandler
};