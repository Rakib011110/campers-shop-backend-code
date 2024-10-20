import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) => {
  return catchAsynce(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body,
        cookies: req.cookies,
      });

      next();
    }
  );
};

export default validateRequest;

function catchAsynce(
  arg0: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  throw new Error("Function not implemented.");
}
