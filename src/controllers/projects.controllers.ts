import { Request, Response } from "express";
import {
  createProjectRequest,
  createProjectResponse,
} from "../interfaces/projects.interface";
import {
  createProjectService,
  getProjectsByIdService,
} from "../services/projects.services";

export const createProjectController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: createProjectResponse = await createProjectService(req.body);
  return res.status(201).json(project);
};

export const getProjectsByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const project: createProjectResponse = await getProjectsByIdService(
    req.params.id
  );
  console.log(req.params.id);
  return res.status(200).json(project);
};
