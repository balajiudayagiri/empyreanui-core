import { Button } from "empyreanui/components/ui/button";
import { UserContext } from "empyreanui/Providers/user-provider";
import { getAvatarBgColor, getAvatarInitials } from "empyreanui/utils";
import React, { CSSProperties, useContext, useMemo } from "react";
import MODAL_CONSTANTS from "empyreanui/constants/MODAL_CONSTANTS.json";

function AuthButton() {
  const { userToken, user, setModalInfo } = useContext(UserContext);
  const avatar1 = getAvatarInitials(user?.firstname);
  const avatar2 = getAvatarInitials(user?.lastname);
  const colorOFAvatar = useMemo(() => getAvatarBgColor(), []);

  if (userToken && Object.keys(user).length !== 0)
    return (
      <p
        onClick={() => {
          setModalInfo({ isOpen: true, modalName: MODAL_CONSTANTS.USER_MODAL });
        }}
        style={{ "--bg-color": colorOFAvatar } as CSSProperties}
        className="rounded-full p-2 text-sm  bg-[var(--bg-color)] hover:shadow-md hover:scale-[102%] cursor-pointer"
      >
        {" "}
        {avatar1}
        {avatar2}{" "}
      </p>
    );

  return (
    <Button
      onClick={() => {
        setModalInfo({ isOpen: true, modalName: MODAL_CONSTANTS.SIGNIN_MODAL });
      }}
      className=""
    >
      Sign in
    </Button>
  );
}
export default AuthButton;
