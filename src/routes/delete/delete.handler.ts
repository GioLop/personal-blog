import { Request, Response } from 'express';
import { deactivateArticleInIndex, getArticleFromIndex } from '../../models/index.model';
import { DeleteRequestBody } from '../../types/request.types';

const httpGetDeleteHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    const article = await getArticleFromIndex(articleId);
    
    res.render('pages/confirmDelete', article);
  })();
};

const httpPostDeleteHandler = (req: Request, res: Response) => {
  void (async () => {
    const { articleId } = req.params;
    
    if ((req.body as DeleteRequestBody).delete === 'true') await deactivateArticleInIndex(articleId);
    
    res.redirect('/admin');
  })();
};

export {
  httpGetDeleteHandler,
  httpPostDeleteHandler
};