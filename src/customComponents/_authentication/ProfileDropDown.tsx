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

function ProfileDropDown({ children }: { children: React.ReactNode }) {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Add onClick handlers to navigate to respective pages */}
          <DropdownMenuItem onClick={() => router.push("/profile")} disabled>
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
          onClick={() => router.push("https://github.com")}
          disabled>
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/support")} disabled>
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutUser}>
          Log out{" "}
          <DropdownMenuShortcut>
            ⇧+{isMac ? "⌘" : "Ctrl"}+Q
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropDown;
