import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";

const VerifyOTP = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const { id } = useParams();
  const submitOTP = useCallback(async (formData: any): Promise<void> => {
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
      const response = await fetch(`api/users/verify/${id}`, options);
      const json = await response.json();

      if (response.ok) {
        setData(json);
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error, submitOTP];
};

export default VerifyOTP;
