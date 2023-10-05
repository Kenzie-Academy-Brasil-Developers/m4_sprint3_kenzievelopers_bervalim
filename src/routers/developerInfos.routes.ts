import { Router } from "express";
import { createDeveloperInformationController } from "../controllers/developerInfos.controllers";
import { verifyIdDeveloperInfo } from "../middlewares/verifyIdDeveloperInfo";

export const developerInfoRoutes: Router = Router();

developerInfoRoutes.post(
  "/:id/infos",
  verifyIdDeveloperInfo,
  createDeveloperInformationController
);
