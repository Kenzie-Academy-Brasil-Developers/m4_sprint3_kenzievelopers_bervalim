import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const handleErrors = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  // se o error for um throw new app error
  if (error instanceof AppError) {
    return res.status(error.statusCode).json(error.message);
  }

  console.log(error);
  return res.status(500).json({ message: "Internal server Error" });
};
