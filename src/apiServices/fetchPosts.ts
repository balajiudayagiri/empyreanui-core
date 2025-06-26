import { useState, useCallback } from "react";
import { postRoute } from "@apiservices"; // Ensure this path is correct

interface FetchPostsOptions {
  onSuccess?: (data: any, totalCount: number, categories?: string[]) => void;
  onError?: (error: any) => void;
  params?: {
    page?: number;
    limit?: number;
    category?: string;
    styleType?: string;
    searchTerm?: string;
  };
}

export const useFetchPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [totalPostsCount, setTotalPostsCount] = useState(0);

  const fetchPosts = useCallback(
    async ({ onSuccess, onError, params }: FetchPostsOptions = {}) => {
      setIsLoading(true);
      setError(null);

      try {
        const cleanParams = params ? Object.fromEntries(Object.entries(params).filter(([_, v]) => v != null)) : {}; // Filter out null/undefined values

        // If searchTerm contains spaces, wrap it in double quotes for exact phrase search in MongoDB text index
        if (cleanParams.searchTerm && typeof cleanParams.searchTerm === 'string' && cleanParams.searchTerm.includes(' ')) {
          cleanParams.searchTerm = `"${cleanParams.searchTerm}"`;
        }
        const queryString = new URLSearchParams(cleanParams as Record<string, string>).toString();
        const url = `${postRoute}${queryString ? `?${queryString}` : ""}`;

        const res = await fetch(url, {
          headers: {
            "Cache-Control": "public, s-maxage=1, stale-while-revalidate=59",
            "CDN-Cache-Control":
              "public, s-maxage=1, stale-while-revalidate=59",
            "Vercel-CDN-Cache-Control":
              "public, s-maxage=1, stale-while-revalidate=59",
          },
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const { data, totalCount, categories } = await res.json();
        setData(data);
        setTotalPostsCount(totalCount);
        if (onSuccess) {
          onSuccess(data, totalCount, categories);
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
  ); // No dependencies needed as params are passed directly

  return { fetchPosts, isLoading, error, data, totalPostsCount };
};
