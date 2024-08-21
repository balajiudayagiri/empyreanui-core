import { UserContext } from "empyreanui/Providers/user-provider";

import { setLocalValue } from "empyreanui/utils/storageValues/localValues";
import { getSessionValue, removeSessionValue } from "empyreanui/utils/storageValues/sessionValues";

import { useState, useCallback, useContext } from "react";

const VerifyOTP = () => {
  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<any>(null);

  const id = getSessionValue("verification_id");

  const { setToken } = useContext(UserContext);

  const submitOTP = useCallback(
    async (formData: any): Promise<void> => {
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
          setLocalValue("token", json.token);
          setToken(json?.token);
          setData(json);
          removeSessionValue("verification_id");
        } else {
          setError(json);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [id, setToken]
  );

  return [data, loading, error, submitOTP];
};

export default VerifyOTP;
