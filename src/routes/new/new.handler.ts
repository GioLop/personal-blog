import { Request, Response } from 'express';
import { createArticle } from '../../models/article.model';
import { ArticleData } from '../../models/article.schema';

interface AritcleRequestBody {
  articleTitle: string,
  publishDate: string,
  content: string
}

const httpGetNewHandler = (_req: Request, res: Response) => {
  res.render('pages/articleForm', {
    formTitle: 'New Article',
    submitText: 'Publish',
    handler: '/new',
    method: 'post'
  });
};

const httpPostNewHandler = (req: Request, res: Response) => {
  void(async () => {
    const { body: { articleTitle, publishDate, content } } = req as { body: AritcleRequestBody };
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
  httpPostNewHandler,
  AritcleRequestBody
};