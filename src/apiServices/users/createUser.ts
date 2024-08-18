import modal_conts from "empyreanui/constants/MODAL_CONSTANTS.json";
import { UserContext } from "empyreanui/Providers/user-provider";
import { useRouter } from "next/navigation";

import { useState, useCallback, useContext } from "react";

const useSignup = () => {
  const [data, setData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<any>(null);

  const { setModalInfo } = useContext(UserContext);

  const router = useRouter();

  const submitRegisterForm = useCallback(
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

        const response = await fetch(`api/users/signup`, options);

        const json = await response.json();

        if (response.ok) {
          setData(json);
          sessionStorage.setItem("verification_id", json.verification_id);
          setModalInfo({
            isOpen: true,
            modalName: modal_conts.VERIFICATION_MODAL,
          });
        } else {
          setError(json);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return [data, loading, error, submitRegisterForm];
};

export default useSignup;
