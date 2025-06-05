export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  image: string;
  createdAt: string;
} 