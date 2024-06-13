import { useState, useCallback } from "react";
import { postRoute } from "@apiservices"; // Ensure this path is correct

interface FetchPostsOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useFetchPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const fetchPosts = useCallback(
    async ({ onSuccess, onError }: FetchPostsOptions = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(postRoute);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await res.json();
        console.log("Fetched data:", data); // Log the fetched data
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

  return { fetchPosts, isLoading, error, data };
};