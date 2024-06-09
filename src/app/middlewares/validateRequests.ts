import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method === 'PATCH') {
        const partialSchema = schema.partial();
        await partialSchema.parseAsync(req.body);
        next();
      } else {
        console.log(req.method);
        await schema.parseAsync({
          body: req.body,
        });
        next();
      }
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
