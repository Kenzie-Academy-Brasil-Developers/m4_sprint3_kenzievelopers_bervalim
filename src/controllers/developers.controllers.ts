import { Request, Response } from "express";
import { createDeveloperResponse } from "../interfaces/developers.interface";
import {
  createDeveloperService,
  deleteDeveloperService,
  getDeveloperDescriptionByIdService,
  updateDeveloperInfoService,
} from "../services/developers.services";

export const createDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newDeveloper: createDeveloperResponse = await createDeveloperService(
    req.body
  );
  return res.status(201).json(newDeveloper);
};

export const getDeveloperDescriptionByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const developerInfo = await getDeveloperDescriptionByIdService(id);
  return res.status(200).json(developerInfo);
};

export const updateDeveloperInfoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const updateDeveloper: createDeveloperResponse =
    await updateDeveloperInfoService(id, req.body);
  return res.status(200).json(updateDeveloper);
};

export const deleteDeveloperController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  await deleteDeveloperService(id);
  return res.status(204).json();
};
