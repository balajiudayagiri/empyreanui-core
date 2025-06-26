import React from "react";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "kodebloxui/components/ui/drawer";
import CommandMenu from "kodebloxui/customComponents/_command_menu/CommandMenu";
import ListItem from "kodebloxui/components/ui/list-item";
import AuthButton from "kodebloxui/customComponents/_authentication/AuthButton";
import { gettingStartedLinks, toolsLinks } from "./header-menu-config";

const MobileNav = () => {
  return (
    <div className="md:hidden block">
      <div className="flex items-center">
        <CommandMenu />
        <Drawer>
          <DrawerTrigger asChild>
            <button className="focus:outline-none ml-3">
              <MenuIcon className="w-6 h-6" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-dvh">
            <DrawerTitle className="mt-10">
              <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-center">
                KodeBlox<span className="text-primary">UI</span>
              </h1>
            </DrawerTitle>

            <nav className="flex flex-col items-center overflow-y-scroll gap-3 p-4 justify-between h-[calc(100dvh-77.04px)]">
              <div className="flex flex-col mt-6 w-full">
                <AuthButton />
                <hr className="my-4" />

                {/* Getting Started Section */}
                <div className="mb-2 px-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Getting Started
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {gettingStartedLinks.map((link) => (
                    <DrawerClose asChild key={link.href}>
                      <ListItem
                        className="bg-muted/20"
                        href={link.href}
                        title={link.title}
                      />
                    </DrawerClose>
                  ))}
                </div>

                {/* Tools Section */}
                <div className="mb-2 px-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Tools
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {toolsLinks.map((link) => (
                    <DrawerClose asChild key={link.href}>
                      <ListItem
                        className="bg-muted/20"
                        href={link.href}
                        title={link.title}
                      />
                    </DrawerClose>
                  ))}
                </div>
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileNav;
