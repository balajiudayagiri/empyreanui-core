import { UserContext } from "kodebloxui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";
import SessionKeys from "kodebloxui/constants/SessionKeys.json";
import {
  getSessionValue,
  removeSessionValue,
} from "kodebloxui/utils/storageValues/sessionValues";

const SetPassword = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { setModalInfo } = useContext(UserContext);
  const id = getSessionValue(SessionKeys.forgotPasswordVerificationId);
  const setPWD = useCallback(
    async (formData: any): Promise<void> => {
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
          removeSessionValue(SessionKeys.forgotPasswordVerificationId);
          setModalInfo({ isOpen: false, modalName: "" });
        } else {
          setError(json);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [id, setModalInfo]
  );

  return [data, loading, error, setPWD];
};

export default SetPassword;
