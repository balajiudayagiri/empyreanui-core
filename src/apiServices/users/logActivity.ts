import { useCallback } from "react";

const useLogActivity = () => {
  const submitActivity = useCallback(
    async (activity: string | number, token?: string): Promise<void> => {
      const formData = { activity };

      try {
        const options: RequestInit = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        };

        const response = await fetch("/api/users/activity", options);

        if (!response.ok) {
          throw { message: "Failed" };
        }
        return;
      } catch (error) {
        console.error(error);
        return;
      }
    },
    []
  );

  return [submitActivity];
};

export default useLogActivity;
