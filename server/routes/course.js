import express from "express";
import { getAllCourses, getSingleCourse, fetchLectures } from "../controllers/course";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);
router.get("/course/:id/lectures", isAuth, getAllLectures);

export default router;
