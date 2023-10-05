import "express-async-errors";
import express, { Application } from "express";
import "dotenv/config";
import { handleErrors } from "./middlewares/handleError.middlewares";
import { allRoutes } from "./routers/index.routes";

const app: Application = express();

app.use(express.json());

app.use("/", allRoutes);

app.use(handleErrors);

export default app;
