import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database";
import { createDeveloperResult } from "../interfaces/developers.interface";
import AppError from "../errors/App.error";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    return next();
  }
  const query: string = format(
    `SELECT FROM "developers" WHERE email = (%L);`,
    email
  );

  const data: createDeveloperResult = await client.query(query);

  if (data.rowCount > 0) {
    throw new AppError("Email already exists.", 409);
  }

  return next();
};
