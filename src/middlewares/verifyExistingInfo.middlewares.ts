import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { client } from "../database";
import AppError from "../errors/App.error";

export const verifyExistingInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const query: string = format(
    `SELECT * FROM "developers" AS "d" JOIN "developerInfos" AS "di" 
    ON "di"."developerId"="d".id
    WHERE "d".id = (%L);`,
    id
  );

  const data = await client.query(query);

  if (data.rowCount > 0) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};
