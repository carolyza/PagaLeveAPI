import { Request, Response, NextFunction } from "express";

export function validateSchemaMiddleware(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      res.sendStatus(422);
      return;
    }

    next();
  };
}
