import { Request, Response } from 'express';
import { posts } from '../data/posts';

export const updateUserPost = (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const postId = parseInt(req.params.postId);
  
  console.log(`Updating post ${postId} for user ${userId}`);
  
  if (!posts[userId]) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const post = posts[userId].find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  const updatedPost = {
    ...post,
    title: req.body.title || post.title,
    body: req.body.body || post.body,
  };
  
  const postIndex = posts[userId].findIndex(p => p.id === postId);
  posts[userId][postIndex] = updatedPost;
  
  res.json(updatedPost);
}; 