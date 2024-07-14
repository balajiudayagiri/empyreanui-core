import { useCallback } from "react";
import { useRouter } from "next/router";

const useLogout = () => {
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem("token");

    router.push("/login");
  }, [router]);

  return logout;
};

export default useLogout;
