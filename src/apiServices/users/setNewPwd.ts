import { UserContext } from "empyreanui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";

const SetPassword = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { setModalInfo } = useContext(UserContext);
  const id = sessionStorage.getItem("verification_id");
  const setPWD = useCallback(async (formData: any): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      };
      const response = await fetch(
        `api/users/forgot-password/change-password/${id}`,
        options
      );
      const json = await response.json();

      if (response.ok) {
        setData(json);
        sessionStorage.removeItem("verification_id");
        setModalInfo({ isOpen: false, modalName: "" });
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error, setPWD];
};

export default SetPassword;
