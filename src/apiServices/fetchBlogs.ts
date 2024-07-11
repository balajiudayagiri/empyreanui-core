import { useState, useCallback } from "react";
import { blogsRoute } from "@apiservices"; // Ensure this path is correct

interface FetchBlogsOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useFetchBlogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const fetchBlogs = useCallback(
    async ({ onSuccess, onError }: FetchBlogsOptions = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(blogsRoute, { next: { revalidate: 3600 } });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await res.json();
        setData(data);
        if (onSuccess) {
          onSuccess(data);
        }
      } catch (error: any) {
        setError(error.message);
        if (onError) {
          onError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { fetchBlogs, isLoading, error, data };
};
