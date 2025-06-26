"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "kodebloxui/components/ui/dropdown-menu";
import clsx from "clsx";
// import CommandMenu from "./_command_menu/CommandMenu";
import { gettingStartedLinks, toolsLinks } from "./header-menu-config";
import Signup from "./_authentication/AuthButton";

function HeaderMenu() {
  const [open, setOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const renderDropdown = (
    title: string,
    key: string,
    links: { href: string; title: string }[]
  ) => (
    <DropdownMenu
      open={open === key}
      onOpenChange={(state) => setOpen(state ? key : null)}>
      <DropdownMenuTrigger className="text-sm font-medium hover:text-primary transition px-3 py-2">
        {title}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {links.map((item) => (
          <DropdownMenuItem key={item.href}>
            <Link
              href={item.href}
              className={clsx(
                "block w-full text-sm px-2 py-1 rounded-md hover:bg-muted",
                isActive(item.href) && "text-primary font-semibold"
              )}>
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="hidden md:flex items-center gap-4 ml-auto">
      {/* <CommandMenu /> */}

      {/* {renderDropdown(
        "Getting Started",
        "getting-started",
        gettingStartedLinks.map((l) => ({ href: l.href, title: l.title }))
      )} */}
      <Link
        href={"/browse"}
        className="text-sm font-medium hover:text-primary transition px-3 py-2">
        {"UI Gallery"}
      </Link>

      {renderDropdown(
        "Tools",
        "tools",
        toolsLinks.map((l) => ({ href: l.href, title: l.title }))
      )}

      <Signup />
    </nav>
  );
}

export default HeaderMenu;
