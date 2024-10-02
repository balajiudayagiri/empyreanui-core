import { useState, useCallback } from "react";

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
    javascriptCode: string;
  };
  description: string;
  date: string;
}

interface UseFetchPostByIdResult {
  posts: Post[] | null;
  isLoading: boolean;
  error: string | null;
  fetchPostsByIds: (ids: string[]) => void;
}

export const useFetchPostsByIds = (): UseFetchPostByIdResult => {
  const [posts, setPost] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPostsByIds = useCallback(async (ids: string[]) => {
    setIsLoading(true);
    setError(null);
    try {
      const idsQuery = ids.join(",");
      const response = await fetch(`/api/postslist?ids=${idsQuery}`);
      const result = await response.json();
      if (response.ok) {
        setPost(result.data);
        console.log(result.data);
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
  console.log({ posts });
  return { posts, isLoading, error, fetchPostsByIds };
};
