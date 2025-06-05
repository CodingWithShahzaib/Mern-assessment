import { Request, Response } from 'express';
import { users, User } from '../data/users';
import { posts } from '../data/posts';

export const getAllUsers = (_req: Request, res: Response) => {
  console.log('Getting all users');
  res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  console.log(`Getting user with ID ${userId}`);
  
  const user = users.find((user: User) => user.id === userId);
  
  if (!user) {
    console.log(`User with ID ${userId} not found`);
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
};

export const getUserPosts = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  console.log(`Getting posts for user with ID ${userId}`);
  
  const userPosts = posts[userId];
  
  if (!userPosts) {
    console.log(`No posts found for user with ID ${userId}`);
    return res.status(404).json({ message: 'No posts found for this user' });
  }
  
  userPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
  res.json(userPosts);
}; 