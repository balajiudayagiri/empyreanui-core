import { Button } from "empyreanui/components/ui/button";
import { UserContext } from "empyreanui/Providers/user-provider";
import { getAvatarBgColor, getAvatarInitials } from "empyreanui/utils";
import Link from "next/link";
import React, { CSSProperties, useContext, useMemo } from "react";
import constants from "empyreanui/constants/MODAL_CONSTANTS.json";

function Signup() {
  const { userToken, user, setModalInfo } = useContext(UserContext);
  const avatar1 = getAvatarInitials(user?.firstname);
  const avatar2 = getAvatarInitials(user?.lastname);
  const colorOFAvatar = useMemo(() => getAvatarBgColor(), []);

  if (userToken && Object.keys(user).length !== 0)
    return (
      <p
        onClick={() => {
          setModalInfo({ isOpen: true, modalName: constants.USER_MODAL });
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
    // <Link href="/signup">
    <Button
      onClick={() => {
        setModalInfo({ isOpen: true, modalName: constants.SIGNIN_MODAL });
      }}
      className=""
    >
      Sign in
    </Button>
    // </Link>
  );
}
export default Signup;
