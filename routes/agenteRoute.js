import { Router } from "express";
import { AgenteController } from "../controllers/agenteController.js";

const router = Router();

router.post("/login", AgenteController.login);

export default router;
