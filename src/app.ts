import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
// import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import router from "./routers/indexRouter.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);

export default app;
