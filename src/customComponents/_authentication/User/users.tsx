import { Button } from "kodebloxui/components/ui/button";
import { UserContext } from "kodebloxui/Providers/user-provider";
import { getAvatarBgColor, getAvatarInitials } from "kodebloxui/utils";
import { removeLocalValue } from "kodebloxui/utils/storageValues/localValues";
import React, { CSSProperties, useContext, useMemo } from "react";

function USER() {
  const { user, setToken, setModalInfo } = useContext(UserContext);
  const avatar1 = getAvatarInitials(user?.firstname);
  const avatar2 = getAvatarInitials(user?.lastname);
  const colorOFAvatar = useMemo(() => getAvatarBgColor(), []);

  const logoutUser = () => {
    removeLocalValue("token");
    setToken("");
    setModalInfo({ isOpen: false, modalName: "" });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex  gap-2 items-center">
        <p
          style={{ "--bg-color": colorOFAvatar } as CSSProperties}
          className="rounded-full p-2 text-xl  bg-[var(--bg-color)] hover:shadow-md hover:scale-[102%] cursor-pointer">
          {" "}
          {avatar1}
          {avatar2}{" "}
        </p>{" "}
        <div>
          <p className="leading-4">
            <span className="text-white/80">
              {user?.firstname} {user?.lastname}
            </span>
          </p>
          <p className="text-xs text-white/80 mt-0.5">{user?.email}</p>
        </div>
      </div>

      <Button
        onClick={logoutUser}
        className=" text-center focus-visible:ring-0">
        Logout
      </Button>
    </div>
  );
}

export default USER;
