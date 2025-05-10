import express from 'express';
import { createCourse, addLecture } from '../controllers/admin.js';
import { upload } from '../middleware/uploadFiles.js';
import { protect, admin } from '../middlewares/auth.js';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getStats
} from '../controllers/adminController.js';

const router = express.Router();

// Toutes les routes admin sont protégées
router.use(protect);
router.use(admin);

router.post(
  '/create/new',
  upload.single('image'),
  createCourse
);

router.post(
  '/:courseId/lecture',
  upload.single('video'),
  addLecture
);

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/stats', getStats);

export default router;
