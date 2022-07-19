import { Router } from "express";
import authRouter from "./authRoter.js";

const router = Router();

router.use(authRouter);

export default router;
