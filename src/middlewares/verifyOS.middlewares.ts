import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";

export const verifyOS = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const favoriteOs = req.body.preferredOS;

  if (
    favoriteOs !== "Windows" &&
    favoriteOs !== "Linux" &&
    favoriteOs !== "MacOS"
  ) {
    throw new AppError("Invalid OS option.", 400);
  }

  return next();
};
