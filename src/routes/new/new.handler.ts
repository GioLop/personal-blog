import { Request, Response } from 'express';
import { createArticle } from '../../models/articles.model';
import { ArticleData } from '../../models/articles.schema';

interface RequestBody {
  articleTitle: string,
  publishDate: string,
  content: string
}

const httpGetNewHandler = (_req: Request, res: Response) => {
  res.render('pages/form', {
    formTitle: 'New Article',
    submitText: 'Publish',
    handler: '/new',
    method: 'post'
  });
};

const httpPostNewHandler = (req: Request, res: Response) => {
  void(async () => {
    const { body: { articleTitle, publishDate, content } } = req as { body: RequestBody };
    const articleData: ArticleData = {
      title: articleTitle,
      publishDate,
      body: content
    };

    await createArticle(articleData);
    
    res.send('form sended');
  })();
};

export {
  httpGetNewHandler,
  httpPostNewHandler
};