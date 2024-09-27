import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import { LoginRequestBody } from '../types/request.types';

const loginValidatorMiddleware = (schema: Schema) => {
  return (req:Request, res: Response, next: NextFunction) => {
    const data = req.body as LoginRequestBody;
    const { error } = schema.validate(data, { abortEarly: false });
    
    if (error) {
      throw new Error(`${error.message}`);
    }

    next();
  };
};

export default loginValidatorMiddleware;