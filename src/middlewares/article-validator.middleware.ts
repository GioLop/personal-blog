import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import { ArticleRequestBody } from '../types/request.types';

const articleValidatorMiddleware = (schema: Schema) => {
  return (req:Request, res: Response, next: NextFunction) => {
    const data = req.body as ArticleRequestBody;
    const { error } = schema.validate(data, { abortEarly: false });
    
    if (error) {
      throw new Error(`${error.message}`);
    }

    next();
  };
};

export default articleValidatorMiddleware;