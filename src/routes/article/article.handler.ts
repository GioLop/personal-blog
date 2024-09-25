import { Request, Response } from 'express';
import { getArticleById } from '../../models/article.model';

const httpGetArticleHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    const article = await getArticleById(articleId);
    
    res.render('pages/article', article);
  })();
};

export {
  httpGetArticleHandler
};