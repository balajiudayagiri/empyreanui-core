import { UserContext } from "kodebloxui/Providers/user-provider";
import { useState, useCallback, useContext } from "react";

const useUsers = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const { userToken } = useContext(UserContext);

  const getUsers = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
      };

      const response = await fetch(`api/users`, options);
      const json = await response.json();

      if (response.ok) {
      } else {
        setError(json);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [userToken]);

  return [data, loading, error, getUsers];
};

export default useUsers;
