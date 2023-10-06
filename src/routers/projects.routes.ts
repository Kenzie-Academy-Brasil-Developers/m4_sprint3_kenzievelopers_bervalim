import { Router } from "express";
import {
  createProjectController,
  getProjectsByIdController,
  updateProjectsByIdController,
} from "../controllers/projects.controllers";
import { verifyBodyIdProject } from "../middlewares/verifyBodyIdProject.middlewares";
import { verifyProjectId } from "../middlewares/verifyProjectId.middlewares";

export const projectsRoutes: Router = Router();
projectsRoutes.post("/", verifyBodyIdProject, createProjectController);
projectsRoutes.get("/:id", verifyProjectId, getProjectsByIdController);
projectsRoutes.patch(
  "/:id",
  verifyProjectId,
  verifyBodyIdProject,
  updateProjectsByIdController
);
