import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";

import { userSchema } from "../schemas/userSchema.js";

const authRouter = Router();
authRouter.post("/sign-up", validateSchemaMiddleware(userSchema), signUp);

authRouter.post("/sign-in", validateSchemaMiddleware(userSchema), signIn);

export default authRouter;
