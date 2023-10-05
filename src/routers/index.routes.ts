import { Router } from "express";
import { developerRoutes } from "./developers.routes";
import { developerInfoRoutes } from "./developerInfos.routes";

export const allRoutes: Router = Router();

allRoutes.use("/developers", developerRoutes);
allRoutes.use("/developers", developerInfoRoutes);
