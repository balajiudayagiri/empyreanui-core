import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";
import { useRouter } from "next/navigation";
import { useState, useCallback, useContext } from "react";
import uselogActivity from "./logActivity";
import { UserContext } from "empyreanui/Providers/user-provider";
import { setLocalValue } from "empyreanui/utils/storageValues/localValues";
import { setSessionValue } from "empyreanui/utils/storageValues/sessionValues";
import localKeys from "empyreanui/constants/localKeys.json";
import SessionKeys from "empyreanui/constants/SessionKeys.json";
/**
 * A custom hook for handling user sign-in.
 *
 * @returns {Array} An array containing the following:
 * - `data` - The data returned from the sign-in request.
 * - `loading` - A boolean indicating if the sign-in request is in progress.
 * - `error` - Any error that occurred during the sign-in process.
 * - `submitLoginForm` - A function to submit the login form.
 */

const useSignin = (): Array<any> => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  const [submitActivity] = uselogActivity();
  const { setToken, setModalInfo } = useContext(UserContext);
  /**
   * Submits the login form data and handles sign-in.
   *
   * @param {Object} formData - The login form data.
   * @param {string} formData.email - The user's email address.
   * @param {string} formData.password - The user's password.
   * @returns {Promise<void>} A promise that resolves when the sign-in process is complete.
   * @throws {Error} Throws an error if the sign-in request fails.
   *
   * @example
   * const [data, loading, error, submitLoginForm] = useSignin();
   * submitLoginForm({ email: "user@example.com", password: "password123" });
   */

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
        setLocalValue(localKeys.token, json.token);
        setToken(json?.token);
        submitActivity("login", json.token);
        setData(json);
      } else {
        if (response.status === 403) {
          setSessionValue(SessionKeys.verification_id, json.verification_id);
          setModalInfo({
            isOpen: true,
            modalName: MODAL_CONSTANTS.VERIFICATION_MODAL,
          });
        }
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
