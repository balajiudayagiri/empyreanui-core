import { BlogsTypes } from "kodebloxui/customComponents/blogs/blogsTypes";
import { useState, useCallback } from "react";

interface UseFetchBlogByIdResult {
  blog: BlogsTypes | null;
  isLoading: boolean;
  error: string | null;
  fetchBlogById: (id: string) => void;
}

export const useFetchBlogById = (): UseFetchBlogByIdResult => {
  const [blog, setBlog] = useState<BlogsTypes | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogById = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/blogs?id=${id}`);
      const result = await response.json();
      if (response.ok) {
        setBlog(result.data);
      } else {
        setError(result.error || "Failed to fetch blog");
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

  return { blog, isLoading, error, fetchBlogById };
};
