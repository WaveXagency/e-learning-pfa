import express from "express";
import {
  register,
  verifyUser,
  loginUser,
  myProfile
} from "../controllers/userController.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);

export default router;
