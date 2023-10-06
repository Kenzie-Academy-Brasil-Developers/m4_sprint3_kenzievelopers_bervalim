import { Router } from "express";
import {
  createProjectController,
  getProjectsByIdController,
} from "../controllers/projects.controllers";
import { verifyBodyIdProject } from "../middlewares/verifyBodyIdProject.middlewares";

export const projectsRoutes: Router = Router();

projectsRoutes.post("/", verifyBodyIdProject, createProjectController);
projectsRoutes.get("/:id", getProjectsByIdController);
projectsRoutes.patch("/:id");
