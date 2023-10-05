import { Router } from "express";
import {
  createDeveloperController,
  getDeveloperDescriptionByIdController,
} from "../controllers/developers.controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middlewares";
import { verifyId } from "../middlewares/verifyId.middleware";

export const developerRoutes: Router = Router();

developerRoutes.post("/", verifyEmail, createDeveloperController);
developerRoutes.get("/:id", verifyId, getDeveloperDescriptionByIdController);
developerRoutes.patch("/:id", verifyId, verifyEmail);
developerRoutes.delete("/:id", verifyId);
