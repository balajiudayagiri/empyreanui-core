import { UserContext } from "empyreanui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";

const VerifyOTP = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const id = sessionStorage.getItem("verification_id");
  const { setToken } = useContext(UserContext)
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
        localStorage.setItem("token", json.token);
        setToken(json?.token);
        setData(json);
        sessionStorage.removeItem("verification_id");
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
