import { Request, Response } from 'express';
import { getArticleById } from '../../models/article.model';

const httpGetEditHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    const article = await getArticleById(articleId);
    
    res.render('pages/form', {
      formTitle: 'Edit Article',
      submitText: 'Update',
      handler: `/edit/${articleId}`,
      method: 'post',
      article
    });
  })();
};

const httpPostEditHandler = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Form sended');
};

export {
  httpGetEditHandler,
  httpPostEditHandler
};