import { Router } from "express";
import { developerRoutes } from "./developers.routes";

export const allRoutes: Router = Router();

allRoutes.use("/developers", developerRoutes);
