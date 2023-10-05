import { Request, Response } from "express";
import {
  developerInfoRequest,
  developerInfoResponse,
  developerInfoResult,
} from "../interfaces/developerInfos.interface";
import { createDeveloperInformationService } from "../services/developerInfos.services";

export const createDeveloperInformationController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: developerInfoRequest = {
    ...req.body,
    id: req.params.id,
  };

  const developerInfo: developerInfoResponse =
    await createDeveloperInformationService(req.body, req.params.id);
  return res.status(201).json(developerInfo);
};
