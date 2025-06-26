/* eslint-disable react-hooks/rules-of-hooks */
import { BlogsTypes } from "kodebloxui/customComponents/blogs/blogsTypes";
import { useState, useCallback } from "react";

interface UseFetchPostByIdResult {
  blogs: BlogsTypes[] | null;
  isLoading: boolean;
  error: string | null;
  fetchBlogsByIds: (ids: string[]) => void;
}

export const usefetchBlogsByIds = (): UseFetchPostByIdResult => {
  const [blogs, setPost] = useState<BlogsTypes[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogsByIds = useCallback(async (ids: string[]) => {
    setIsLoading(true);
    setError(null);
    try {
      const idsQuery = ids.join(",");
      const response = await fetch(`/api/blogslist?ids=${idsQuery}`);
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

  return { blogs, isLoading, error, fetchBlogsByIds };
};
