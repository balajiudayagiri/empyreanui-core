import { UserContext } from "empyreanui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";
import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";

const useGetForgotOtp = () => {
  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<any>(null);

  const { setModalInfo } = useContext(UserContext);

  const submitMail = useCallback(async (formData: any): Promise<void> => {
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
      const response = await fetch(`api/users/forgot-password/getOTP`, options);
      const json = await response.json();

      if (response.ok) {
        setData(json);
        sessionStorage.setItem("verification_id", json?.verification_id);
        setModalInfo({ isOpen: true, modalName: MODAL_CONSTANTS.FP_OTP_MODAL });
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, error, submitMail];
};

export default useGetForgotOtp;
