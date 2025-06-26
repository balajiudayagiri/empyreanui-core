"use client";
import { Button } from "kodebloxui/components/ui/button";
import { UserContext } from "kodebloxui/Providers/user-provider";
import React, { useContext } from "react";
import MODAL_CONSTANTS from "kodebloxui/constants/MODAL_CONSTANTS.json";
import ProfileAvatar from "./ProfileAvatar";

function AuthButton() {
  const { userToken, user, setModalInfo } = useContext(UserContext);

  if (userToken && Object.keys(user).length !== 0) return <ProfileAvatar />;

  return (
    <Button
      onClick={() => {
        setModalInfo({ isOpen: true, modalName: MODAL_CONSTANTS.SIGNIN_MODAL });
      }}
      className="">
      Sign in
    </Button>
  );
}
export default AuthButton;
