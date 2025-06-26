import React, { FC, useContext } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "kodebloxui/components/ui/avatar";
import { UserContext } from "kodebloxui/Providers/user-provider";
import { getAvatarInitials } from "kodebloxui/utils";
import MODAL_CONSTANTS from "kodebloxui/constants/MODAL_CONSTANTS.json";
import { Button } from "kodebloxui/components/ui/button";
import clsx from "clsx";
import { removeLocalValue } from "kodebloxui/utils/storageValues/localValues";

function MobileSidebar() {
  const router = useRouter();
  const { userToken, user, setModalInfo, setToken } = useContext(UserContext);

  const currentHour = new Date().getHours();

  let greeting;
  let greetingEmoji;

  if (currentHour < 12) {
    greeting = "Good morning";
    greetingEmoji = "🌅";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
    greetingEmoji = "☕";
  } else {
    greeting = "Good evening";
    greetingEmoji = "🌙";
  }

  const logoutUser = () => {
    removeLocalValue("token");
    setToken("");
  };

  const avatar1 = getAvatarInitials(user?.firstname);
  const avatar2 = getAvatarInitials(user?.lastname);
  if (userToken && Object.keys(user).length !== 0)
    return (
      <div className="p-2 md:hidden">
        <span className="flex items-center gap-4">
          {/* <div>
            <Avatar className="cursor-pointer hover:outline hover:outline-primary size-14">
              <AvatarFallback className="bg-primary/25 text-primary text-xl font-semibold">
                {avatar1}
                {avatar2}
              </AvatarFallback>
            </Avatar>
          </div> */}
          <div>
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {greetingEmoji} {greeting}, {user?.firstname}!
            </h3>
          </div>
        </span>
        <div className="grid grid-cols-2 gap-4 my-4">
          <Tile onClick={() => router.push("/profile")}>Profile</Tile>
          <Tile onClick={() => router.push("/settings")} disabled>
            Settings
          </Tile>
          <Tile onClick={() => router.push("/invite/email")} disabled>
            Email
          </Tile>
          <Tile onClick={() => router.push("/invite/message")} disabled>
            Message
          </Tile>
        </div>
        <Button
          variant={"ghost"}
          className="bg-red-600/20 text-red-500 w-full font-bold"
          onClick={logoutUser}>
          Log out
        </Button>
      </div>
    );
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

export default MobileSidebar;

interface TileProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Tile: FC<TileProps> = ({ children, onClick, disabled, className }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={clsx("bg-muted/20 text-primary p-6 font-bold", className)}>
      {children}
    </Button>
  );
};
