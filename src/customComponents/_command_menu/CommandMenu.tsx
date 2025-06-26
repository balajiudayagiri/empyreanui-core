"use client";
import React, { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandSeparator,
  // CommandShortcut,
} from "kodebloxui/components/ui/command";
import { Button } from "kodebloxui/components/ui/button";
import { Search } from "lucide-react";
import CommandKey from "./CommandKey";
import { searchItems } from "./searchItems";
import { useRouter, usePathname } from "next/navigation";
import { CommandItem } from "cmdk";

const CommandMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // useEffect(() => {
  //   const down = (e: KeyboardEvent) => {
  //     if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
  //       e.preventDefault();
  //       setOpen((a) => !a);
  //     }
  //   };

  //   document.addEventListener("keydown", down);

  //   return () => {
  //     document.removeEventListener("keydown", down);
  //   };
  // }, [open]);

  const handleSearchClick = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleItemClick = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <>
      <Button
        onClick={handleSearchClick}
        aria-label="Search"
        className="group hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200"
        variant={"ghost"}>
        <CommandKey />
        <Search className="size-4" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} modal={false}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  onClick={() => handleItemClick(item.link)}
                  className="cursor-pointer">
                  <CommandItem
                    data-value={item.title}
                    className="hover:bg-primary/10 dark:hover:bg-primary/20 transition duration-200 rounded-lg p-2">
                    <div className="flex flex-col space-y-1 px-4">
                      <span className="font-bold text-lg text-primary dark:text-primary-light">
                        {item.title}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.description}
                      </span>
                    </div>
                  </CommandItem>
                </div>
                {index < searchItems.length - 1 && (
                  <CommandSeparator className="my-2" />
                )}
              </React.Fragment>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
