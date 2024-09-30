import { Request, Response } from 'express';
import { createArticle } from '../../models/article.model';
import { ArticleData } from '../../types/article.types';
import { addArticleToIndex } from '../../models/index.model';
import { ArticleRequestBody } from '../../types/request.types';
import { getHtmlBreakLInes } from '../../lib/text.lib';

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
    const { body } = req as { body: ArticleRequestBody };
    const content = getHtmlBreakLInes(body.content);
    
    const articleData: ArticleData = {
      title: body.articleTitle,
      publishDate: body.publishDate,
      body: content
    };

    const { id, publishDate } = await createArticle(articleData);
    await addArticleToIndex(id, { ...articleData, publishDate });
    
    res.redirect(`/article/${id}`);
  })();
};

export {
  httpGetNewHandler,
  httpPostNewHandler,
  ArticleRequestBody
};