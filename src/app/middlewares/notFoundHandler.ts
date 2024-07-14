import { Request, Response, NextFunction } from "express";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: "Not Found" });

  next();
};

export default notFoundHandler;
