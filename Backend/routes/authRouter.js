import { Router } from "express";
import { loginMiddleware, signupMiddleware } from "../middlewares/authMiddleware.js";
import { login, singup } from "../controllers/authController.js";

const router = Router();

router.post("/api/login", loginMiddleware, login);
router.post("/api/signup", signupMiddleware, singup);

export default router;