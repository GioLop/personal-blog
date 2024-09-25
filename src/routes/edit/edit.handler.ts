import { Request, Response } from 'express';
import { getArticleById, updateArticle } from '../../models/article.model';
import { ArticleRequestBody } from '../new/new.handler';
import { ArticleData } from '../../types/article.types';
import { updateArticleIndex } from '../../models/index.model';

const httpGetEditHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    const article = await getArticleById(articleId);
    
    res.render('pages/articleForm', {
      formTitle: 'Edit Article',
      submitText: 'Update',
      handler: `/edit/${articleId}`,
      method: 'post',
      article
    });
  })();
};

const httpPostEditHandler = (req: Request, res: Response) => {
  void(async () => {
    const { articleId } = req.params;
    const { body } = req as { body: ArticleRequestBody
    };
    const articleData: ArticleData = {
      title: body.articleTitle,
      publishDate: body.publishDate,
      body: body.content
    };

    await updateArticle(articleId, articleData);
    await updateArticleIndex(articleId, articleData);

    res.redirect(`/article/${articleId}`);
  })();
};

export {
  httpGetEditHandler,
  httpPostEditHandler
};