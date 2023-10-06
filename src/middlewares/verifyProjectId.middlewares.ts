import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { client } from "../database";
import AppError from "../errors/App.error";
import { createProjectResponse } from "../interfaces/projects.interface";

export const verifyProjectId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  const query: string = format(`SELECT * FROM "projects" WHERE id=(%L);`, id);

  const data = await client.query(query);

  if (data.rowCount === 0) {
    throw new AppError("Project not found.", 404);
  }

  const foundProject: createProjectResponse = data.rows[0];
  res.locals = { ...res.locals, foundProject };
  return next();
};
