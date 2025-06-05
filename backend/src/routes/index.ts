import { Router } from 'express';
import { getAllUsers, getUserById, getUserPosts } from '../services/userService';
import { updateUserPost } from '../services/postService';

const router = Router();

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/posts', getUserPosts);

// Post routes
router.post('/users/:userId/post/:postId', updateUserPost);
router.put('/users/:userId/post/:postId', updateUserPost);

export default router; 