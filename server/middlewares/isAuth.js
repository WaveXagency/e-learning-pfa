import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, please login" });
  }

  const decoded = jwt.verify(token, process.env.Jwt_Sec);
  req.user = await User.findById(decoded.id);
  next();
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Only admins can perform this action" });
  }
  next();
};
