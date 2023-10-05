import { Router } from "express";
import { createDeveloperController } from "../controllers/developers.controllers";

export const developerRoutes: Router = Router();

developerRoutes.post("/", createDeveloperController);
developerRoutes.get("/");
developerRoutes.patch("/");
developerRoutes.delete("/");
