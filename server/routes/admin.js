import express from 'express';
import { createCourse, addLecture } from '../controllers/admin.js';
import { upload } from '../middleware/uploadFiles.js';
import { isAuth, isAdmin } from '../middleware/auth.js';
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser as deleteUserController,
  getStats
} from '../controllers/admin.js';

const router = express.Router();

// All admin routes protected
router.use(isAuth);
router.use(isAdmin);

router.post('/create/new', upload.single('image'), createCourse);
router.post('/:courseId/lecture', upload.single('video'), addLecture);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUserController);
router.get('/stats', getStats);

export default router;
