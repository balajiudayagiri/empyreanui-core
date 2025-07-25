import { Avatar, AvatarFallback } from "kodebloxui/components/ui/avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import { UserContext } from "kodebloxui/Providers/user-provider";
import { getAvatarInitials } from "kodebloxui/utils";
import React, { useContext } from "react";
import ProfileDropDown from "./ProfileDropDown";
import MobileSidebar from "./MobileSidebar";

function ProfileAvatar() {
  const { userToken, user, setModalInfo } = useContext(UserContext);

  const avatar1 = getAvatarInitials(user?.firstname);
  const avatar2 = getAvatarInitials(user?.lastname);
  return (
    <>
      <ProfileDropDown className="max-md:hidden">
        <Avatar className="cursor-pointer hover:outline hover:outline-primary">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
          <AvatarFallback className="bg-primary/25 text-primary font-semibold">
            {avatar1}
            {avatar2}
          </AvatarFallback>
          {/* <p
          style={{ "--bg-color": colorOFAvatar } as CSSProperties}
          className="rounded-full p-2 text-sm  bg-[var(--bg-color)] hover:shadow-md hover:scale-[102%] cursor-pointer">
          {" "}
          {avatar1}
          {avatar2}{" "}
          </p> */}
        </Avatar>
      </ProfileDropDown>
      <MobileSidebar />
    </>
  );
}

export default ProfileAvatar;
