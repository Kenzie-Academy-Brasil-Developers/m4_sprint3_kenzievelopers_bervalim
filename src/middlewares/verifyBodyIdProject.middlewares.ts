import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database";
import AppError from "../errors/App.error";

export const verifyBodyIdProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { developerId } = req.body;
  const query = format(
    `SELECT * FROM "developers" WHERE id=(%L);`,
    developerId
  );
  const data = await client.query(query);
  if (!data.rowCount) {
    throw new AppError("Developer not found", 404);
  }
  return next();
};
