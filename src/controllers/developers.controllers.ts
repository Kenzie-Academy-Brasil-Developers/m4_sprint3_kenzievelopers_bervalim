import { Request, Response } from "express";
import { createDeveloperResponse } from "../interfaces/developers.interface";
import { createDeveloperService } from "../services/developers.services";

export const createDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDeveloper: createDeveloperResponse = await createDeveloperService(
    req.body
  );
  return res.status(201).json(newDeveloper);
};
