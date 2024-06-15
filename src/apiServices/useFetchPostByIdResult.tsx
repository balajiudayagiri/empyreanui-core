import { useState, useEffect, useCallback } from "react";

interface Post {
  _id: string;
  user: {
    firstName: string;
    lastName: string;
  };
  componentName: string;
  componentCategory: string;
  code: {
    styleType: string;
    htmlCode: string;
    cssCode: string;
    tailwindCode: string;
  };
  date: string;
}

interface UseFetchPostByIdResult {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
  fetchPostById: (id: string) => void;
}

export const useFetchPostById = (): UseFetchPostByIdResult => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPostById = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/posts?id=${id}`);
      const result = await response.json();
      if (response.ok) {
        setPost(result.data);
      } else {
        setError(result.error || "Failed to fetch post");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { post, isLoading, error, fetchPostById };
};
