import { useContext, useState } from "react";
import { formatErrors } from "empyreanui/utils";
import { blogsRoute } from "./constant";
import { UserContext } from "empyreanui/Providers/user-provider";

export const useFetchBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userToken } = useContext(UserContext);
  const postBlog = async (
    blogData: any,
    onSuccess: (result: any) => void,
    onError: (error: any) => void
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(blogsRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();
      if (result.success) {
        onSuccess(result);
      } else {
        onError(formatErrors(result.error));
      }
    } catch (error) {
      if (error instanceof Error) {
        onError(formatErrors(error.message));
      } else {
        onError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { postBlog, isLoading };
};
