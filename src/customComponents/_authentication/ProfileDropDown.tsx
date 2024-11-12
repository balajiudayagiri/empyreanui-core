"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "empyreanui/components/ui/dropdown-menu";
import { UserContext } from "empyreanui/Providers/user-provider";
import { removeLocalValue } from "empyreanui/utils/storageValues/localValues";
import { useRouter } from "next/navigation"; // Import the useRouter hook from next/navigation
import { ENV } from "empyreanui/utils";

function ProfileDropDown({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isMac, setIsMac] = useState<boolean>(false);
  const { setToken } = useContext(UserContext);
  const router = useRouter(); // Initialize the useRouter hook

  const logoutUser = () => {
    removeLocalValue("token");
    setToken("");
  };

  useEffect(() => {
    // Keydown event listener for Shift + Ctrl/Command + Q
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMacPlatform = isMac && event.metaKey; // ⌘ on Mac
      const isNonMacPlatform = !isMac && event.ctrlKey; // Ctrl on other platforms

      if (
        event.shiftKey &&
        (isMacPlatform || isNonMacPlatform) &&
        event.key.toLowerCase() === "q"
      ) {
        event.preventDefault(); // Prevent default browser behavior
        logoutUser();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown); // Cleanup event listener
    };
  }, [isMac]);

  useEffect(() => {
    // Detect the user's platform
    const platform = navigator.platform.toLowerCase();
    setIsMac(platform.includes("mac"));
  }, []);

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className} asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Add onClick handlers to navigate to respective pages */}
          <DropdownMenuItem onClick={() => router.push("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/settings")} disabled>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => router.push("/invite/email")}
                  disabled>
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => router.push("/invite/message")}
                  disabled>
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => router.push("/invite/more")}
                  disabled>
                  More...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {/* Add other navigations or actions */}
        <DropdownMenuItem
          onClick={() => openExternalLink("https://discord.gg/qw6fYxcCcW")}>
          Discord
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            openExternalLink("https://www.instagram.com/empyreanui/")
          }>
          Instagram
        </DropdownMenuItem>
        {/* <DropdownMenuItem
          onClick={() => openExternalLink("https://github.com")}>
          GitHub
        </DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => router.push("/support")} disabled>
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutUser}>
          Log out
          <DropdownMenuShortcut>
            ⇧+{isMac ? "⌘" : "Ctrl"}+Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropDown;
