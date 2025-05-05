

import express from 'express';
import { createCourse, addLecture } from '../controllers/admin.js';
import { uploadFiles } from '../utils/uploadVideo.js';
import { isAuth, isAdmin } from '../middlewares/auth.js';
import upload from '../utils/uploadImage.js';

const router = express.Router();

router.post(
  '/create/new',
  isAuth,
  isAdmin,
  uploadFiles.single('image'),
  createCourse
);

router.post(
  '/:courseId/lecture',
  isAuth,
  isAdmin,
  uploadFiles.single('video'),
  addLecture
);

export default router;
