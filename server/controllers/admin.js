// server/controllers/admin.js
import fs from 'fs';
import path from 'path';
import Course from '../models/Course.js'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import upload from '../utils/uploadImage.js';
import uploadFiles from '../utils/uploadVideo.js';
import Course from '../models/Courses.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Course
export const createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagePath = req.file?.path || '';

    const course = new Course({
      title,
      description,
      image: imagePath,
    });

    await course.save();
    res.status(201).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add Lecture
export const addLecture = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description } = req.body;
    const videoPath = req.file?.path || '';

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    course.lectures.push({ title, description, video: videoPath });
    await course.save();

    res.status(200).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    course.lectures = course.lectures.filter(lecture => lecture._id.toString() !== lectureId);
    await course.save();

    res.status(200).json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
