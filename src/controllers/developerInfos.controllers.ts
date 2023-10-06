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
    developerId: req.params.id,
  };
  const newDeveloperInformation: developerInfoResponse =
    await createDeveloperInformationService(data);
  return res.status(201).json(newDeveloperInformation);
};
