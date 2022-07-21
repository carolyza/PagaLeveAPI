import { Router } from "express";
import { insertContact } from "../controllers/createController.js";

const createRouter = Router();

createRouter.post("/create", insertContact);

export default createRouter;
