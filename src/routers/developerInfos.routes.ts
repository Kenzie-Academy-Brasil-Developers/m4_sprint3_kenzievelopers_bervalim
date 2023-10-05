import { Router } from "express";
import { createDeveloperInformationController } from "../controllers/developerInfos.controllers";

export const developerInfoRoutes: Router = Router();

developerInfoRoutes.post("/:id/infos", createDeveloperInformationController);
