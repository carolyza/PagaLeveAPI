import { Router } from "express";
import authRouter from "./authRoter.js";
import createRouter from "./createRouter.js";
import listRouter from "./listRouter.js";
const router = Router();
router.use(authRouter);
router.use(createRouter);
router.use(listRouter);
export default router;
//# sourceMappingURL=indexRouter.js.map