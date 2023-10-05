import { Router } from "express";
import {
  createDeveloperController,
  deleteDeveloperController,
  getDeveloperDescriptionByIdController,
  updateDeveloperInfoController,
} from "../controllers/developers.controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middlewares";
import { verifyId } from "../middlewares/verifyId.middleware";

export const developerRoutes: Router = Router();

developerRoutes.post("/", verifyEmail, createDeveloperController);
developerRoutes.get("/:id", verifyId, getDeveloperDescriptionByIdController);
developerRoutes.patch(
  "/:id",
  verifyId,
  verifyEmail,
  updateDeveloperInfoController
);
developerRoutes.delete("/:id", verifyId, deleteDeveloperController);
