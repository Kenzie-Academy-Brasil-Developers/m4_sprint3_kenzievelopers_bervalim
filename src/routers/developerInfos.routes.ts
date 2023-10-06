import { Router } from "express";
import { createDeveloperInformationController } from "../controllers/developerInfos.controllers";
import { verifyOS } from "../middlewares/verifyOS.middlewares";
import { verifyId } from "../middlewares/verifyId.middleware";
import { verifyExistingInfo } from "../middlewares/verifyExistingInfo.middlewares";

export const developerInfoRoutes: Router = Router();

developerInfoRoutes.post(
  "/:id/infos",
  verifyId,
  verifyOS,
  verifyExistingInfo,
  createDeveloperInformationController
);
