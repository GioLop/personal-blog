import { Request, Response } from 'express';
import { getArticleById, updateArticle } from '../../models/article.model';
import { ArticleRequestBody } from '../new/new.handler';
import { ArticleData } from '../../types/article.types';
import { updateArticleIndex } from '../../models/index.model';
import { getHtmlBreakLInes, getRawBreakLines } from '../../lib/text.lib';

const httpGetEditHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    const article = await getArticleById(articleId);

    if (article) {
      const body = getRawBreakLines(article?.body);

      res.render('pages/articleForm', {
        formTitle: 'Edit Article',
        submitText: 'Update',
        handler: `/edit/${articleId}`,
        method: 'post',
        article: { ...article, body }
      });
    }
  })();
};

const httpPostEditHandler = (req: Request, res: Response) => {
  void(async () => {
    const { articleId } = req.params;
    const { body } = req as { body: ArticleRequestBody
    };
    const content = getHtmlBreakLInes(body.content);
    
    const articleData: ArticleData = {
      title: body.articleTitle,
      publishDate: body.publishDate,
      body: content
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