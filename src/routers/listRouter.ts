import { Router } from "express";
import {
  getList,
  updateList,
  deleteContact,
} from "../controllers/listController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const listRouter = Router();

listRouter.get("/customers/:user", getList);
listRouter.put("/update/:id", updateList);
listRouter.delete(`/delete/:id`, deleteContact);

export default listRouter;
