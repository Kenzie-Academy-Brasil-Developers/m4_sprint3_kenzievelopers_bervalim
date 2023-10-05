import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database";
import AppError from "../errors/App.error";
import { createDeveloperResponse } from "../interfaces/developers.interface";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const query: string = format(`SELECT * FROM "developers" WHERE id=(%L);`, id);

  const data = await client.query(query);

  if (data.rowCount === 0) {
    throw new AppError("Developer not found.", 404);
  }

  const foundDeveloper: createDeveloperResponse = data.rows[0];
  res.locals = { ...res.locals, foundDeveloper };
  return next();
};
