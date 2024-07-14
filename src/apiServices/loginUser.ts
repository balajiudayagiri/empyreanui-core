import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

const useSignin = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const submitLoginForm = useCallback(async (formData: any): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(`api/users/signin`, options);
      const json = await response.json();

      if (response.ok) {
        localStorage.setItem("token", json.token);
        setData(json);
        router.push("/");
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error, submitLoginForm];
};

export default useSignin;
