import type { User, Post } from "../types";

// Base URL for all API requests
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = {
  getRandomUser: async (): Promise<User> => {
    const userId = Math.floor(Math.random() * 10) + 1;
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
  },

  getUser: async (id: number): Promise<User> => {
    const response = await fetch(`${API_URL}/users/${id}`);
    return response.json();
  },

  getUsers: async (): Promise<User[]> => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  },

  getUserPosts: async (userId: number): Promise<Post[]> => {
    const response = await fetch(`${API_URL}/users/${userId}/posts`);
    return response.json();
  },

  getPost: async (id: number): Promise<Post> => {
    const users = await fetch(`${API_URL}/users`).then((res) => res.json());

    for (let i = 0; i < users.length; i++) {
      try {
        const userPosts = await fetch(
          `${API_URL}/users/${users[i].id}/posts`
        ).then((res) => res.json());

        const post = userPosts.find((post: Post) => post.id === id);
        if (post) {
          return post;
        }
      } catch (err) {
        console.log(err);
      }
    }

    throw new Error(`Post not found: ${id}`);
  },

  updatePost: async (
    id: number,
    data: { title?: string; body?: string }
  ): Promise<Post> => {
    const users = await fetch(`${API_URL}/users`).then((res) => res.json());

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      const posts = await fetch(`${API_URL}/users/${user.id}/posts`).then(
        (res) => res.json()
      );

      const post = posts.find((p: Post) => p.id === id);

      if (post) {
        console.log(`Updating post ${id} for user ${user.id}`);

        const updateData = {
          title: data.title || post.title,
          body: data.body || post.body,
        };

        const response = await fetch(`${API_URL}/users/${user.id}/post/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        return response.json();
      }
    }

    alert("Post not found!");
    throw new Error("Post not found");
  },

  deletePost: async (): Promise<boolean> => {
    return true;
  },
};
