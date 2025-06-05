import { useState, useEffect } from 'react';
import type { Post } from '../types';
import { api } from '../api/api';

export const useUserPosts = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        setLoading(true);
        const postsData = await api.getUserPosts(userId);
        setPosts(postsData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch user posts'));
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return { posts, loading, error };
}; 