import Course from "../models/Course";
import TryCatch from "../utils/tryCatch.js";
import Lecture from "../models/Lecture.js";

export const getAllCourses = TryCatch(async (req, res) => {
    const courses = await Course.find();
    res.status(200).json(courses);
});
    
export const getSingleCourse = TryCatch(async (req, res) => {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
});

export const fetchLectures = TryCatch(async (req, res) => {
    const lectures = await Lecture.find({ course: req.params.id });
    res.status(200).json(lectures);

    const User = await User.findById(req.user.id);
    if (user.role==="admin"){
        return res.json({lectures});
    }
    if(!user.subscription.includes(req.params.id)){
        return res.json({message:"You are not subscribed to this course"});
    }
    return res.json({lectures});
});
