"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";
interface ModalInfo {
  isOpen: boolean;
  modalName: string;
}

interface UserContextType {
  userToken: string;
  user: any;
  setToken: (token: string) => void;
  fetchUser: () => void;
  modalInfo: ModalInfo;
  setModalInfo: (data: ModalInfo) => void;
}

export const UserContext = createContext<UserContextType>({
  userToken: localStorage.getItem("token") ?? "",
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJIYXJzaGl0aCIsImVtYWlsIjoicmVkZHliaGFyc2hpdGgzQGdtYWlsLmNvbSIsIl9pZCI6IjY2OWJjZTJmMTMyMjQwYTI4OTY2YjViMSIsImlzX3ZlcmlmaWVkIjp0cnVlLCJ1c2VyX3JvbGUiOiJVU0VSIiwiaWF0IjoxNzIzMzU0OTM1fQ._l_OyHjg4WZRchmoe_54_CNiIIiAIkJyPop5uwIyEaE",
  user: {},
  setToken: () => {},
  fetchUser: () => {},
  modalInfo: {
    isOpen: false,
    modalName: "",
  },
  setModalInfo: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState({});
  const [modalInfo, setModalInfo] = useState<ModalInfo>({
    isOpen: false,
    modalName: "",
  });
  const fetchUser = useCallback(async () => {
    if (!userToken) return; // Exit early if there's no token

    try {
      const response = await fetch(`api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching user: ${response.statusText}`);
      }

      const data = await response.json();
      setUser(data);
      setModalInfo({ isOpen: false, modalName: "" });
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  }, [userToken]);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <UserContext.Provider
      value={{ userToken, user, setToken, fetchUser, setModalInfo, modalInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};
