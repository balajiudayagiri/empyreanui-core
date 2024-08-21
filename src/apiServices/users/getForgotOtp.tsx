import { UserContext } from "empyreanui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";
import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";
import SessionKeys from "empyreanui/constants/SessionKeys.json";
import { setSessionValue } from "empyreanui/utils/storageValues/sessionValues";

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
      const response = await fetch(`api/users/forgot-password/get-otp`, options);
      const json = await response.json();

      if (response.ok) {
        setData(json);
        setSessionValue(SessionKeys.forgotPasswordVerificationId, json?.verification_id);
        setModalInfo({ isOpen: true, modalName: MODAL_CONSTANTS.FP_OTP_MODAL });
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [setModalInfo]);

  return [data, loading, error, submitMail];
};

export default useGetForgotOtp;
