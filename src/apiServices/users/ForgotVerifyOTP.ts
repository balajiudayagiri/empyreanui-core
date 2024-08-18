import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";
import { UserContext } from "empyreanui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";

const VerifyOTP = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { setModalInfo } = useContext(UserContext);
  const id = sessionStorage.getItem("verification_id");
  const submitOTP = useCallback(async (formData: any): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, verification_id: id }),
      };
      const response = await fetch(
        `api/users/forgot-password/allow-changing`,
        options
      );
      const json = await response.json();

      if (response.ok) {
        setData(json);
        setModalInfo({
          isOpen: true,
          modalName: MODAL_CONSTANTS.FP_CHANGE_PWD_MODAL,
        });
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
