import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, User } from './data/users';
import { posts, Post } from './data/posts';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'POST' || req.method === 'PUT') {
    console.log('Request body:', req.body);
  }
  next();
});

const getAllUsers = (_req: Request, res: Response) => {
  console.log('Getting all users');
  res.json(users);
};

const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  console.log(`Getting user with ID ${userId}`);
  
  const user = users.find((user: User) => user.id === userId);
  
  if (!user) {
    console.log(`User with ID ${userId} not found`);
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
};

const getUserPosts = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  console.log(`Getting posts for user with ID ${userId}`);
  
  const userPosts = posts[userId];
  
  if (!userPosts) {
    console.log(`No posts found for user with ID ${userId}`);
    return res.status(404).json({ message: 'No posts found for this user' });
  }
  
  userPosts.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
  res.json(userPosts);
};

const updateUserPost = (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const postId = parseInt(req.params.postId);
  
  console.log(`Updating post ${postId} for user ${userId}`);
  console.log('Update data:', req.body);
  
  if (!posts[userId]) {
    console.log(`User ${userId} not found in posts data`);
    return res.status(404).json({ message: 'User not found' });
  }
  
  const postIndex = posts[userId].findIndex(post => post.id === postId);
  
  if (postIndex === -1) {
    console.log(`Post ${postId} not found for user ${userId}`);
    return res.status(404).json({ message: 'Post not found for this user' });
  }
  
  const originalPost = posts[userId][postIndex];
  console.log('Original post:', originalPost);
  
  const updatedPost = {
    ...originalPost,
    ...req.body,
    id: postId
  };
  
  console.log('Updated post:', updatedPost);
  
  posts[userId][postIndex] = updatedPost;
  res.json(updatedPost);
};

// Define routes
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.get('/users/:id/posts', getUserPosts);
app.post('/users/:userId/post/:postId', updateUserPost);

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server; 