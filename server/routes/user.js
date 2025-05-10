import express from "express";
import {
  register,
  verifyUser,
  login,
  getMe
} from "../controllers/userController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyUser);
router.post("/login", login);
router.get("/me", isAuth, getMe);

export default router;
