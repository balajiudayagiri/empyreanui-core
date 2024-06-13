import { useState } from "react";
import { formatErrors } from "empyreanui/utils";

export const usePostCode = () => {
  const [isLoading, setIsLoading] = useState(false);

  const postCode = async (
    postData: any,
    onSuccess: (result: any) => void,
    onError: (error: any) => void
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
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

  return { postCode, isLoading };
};
