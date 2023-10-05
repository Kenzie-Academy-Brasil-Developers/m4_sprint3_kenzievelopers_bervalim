import "express-async-errors";
import express, { Application } from "express";
import "dotenv/config";
import { handleErrors } from "./middlewares/handleError.middlewares";

const app: Application = express();

app.use(handleErrors);

export default app;
