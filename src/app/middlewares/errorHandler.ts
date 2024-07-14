import { Request, Response, NextFunction } from "express";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong", error: err.message });
  next();
};

export default globalErrorHandler;
