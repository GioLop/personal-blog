import { Request, Response } from 'express';
import { getArticleById, updateArticle } from '../../models/article.model';
import { AritcleRequestBody } from '../new/new.handler';
import { ArticleData } from '../../models/article.schema';

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
    const { body: { articleTitle, publishDate, content } } = req as { body: AritcleRequestBody };
    const articleData: ArticleData = {
      title: articleTitle,
      publishDate,
      body: content
    };

    await updateArticle(articleId, articleData);
  
    res.send('Form sended');
  })();
};

export {
  httpGetEditHandler,
  httpPostEditHandler
};