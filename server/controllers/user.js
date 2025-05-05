import TryCatch from "../middlewares/TryCatch.js";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import sendMail from "../middlewares/sendMail.js";

export const register = TryCatch(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  user = await User.create({ name, email, password });

  const otp = Math.floor(1000 + Math.random() * 9000);

  await sendMail(email, "OTP Verification", { name, otp });

  res.status(201).json({ message: "OTP sent to email", userId: user._id, otp });
});

export const verifyUser = TryCatch(async (req, res) => {
  const { otp } = req.body;
  res.status(200).json({ message: "Verified successfully" });
});

export const loginUser = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.Jwt_Sec);

  res.status(200).json({ message: "Login successful", token });
});

export const myProfile = TryCatch(async (req, res) => {
  res.status(200).json({ user: req.user });
});
