import { ModeToggle } from "empyreanui/components/ui/ModeToggle";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { CreateNewComponent } from "@customcomponent";

function Header() {
  return (
    <header className="h-14 border-b flex items-center px-5 md:px-9 justify-between bg-background/70 backdrop-blur-lg sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
          Empyrean<span className="text-yellow-500">UI</span>
        </h1>
      </Link>
      <nav className="hidden md:flex items-center gap-3 md:gap-5">
        <Link
          href="/"
          className="hover:bg-yellow-500/10 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200">
          Home
        </Link>
        <Link
          href="/empyreanuicomponents"
          className="hover:bg-yellow-500/10 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200">
          Explore Components
        </Link>
        <CreateNewComponent />
        {/* <Link
          href="/components"
          className="hover:bg-yellow-500/10 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-200">
          empyreanui Components
        </Link> */}
        <ModeToggle />
      </nav>
      <div className="md:hidden block">
        <div className="flex items-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button className="focus:outline-none ml-3">
                <MenuIcon className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-center gap-3 p-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="hover:bg-yellow-500/10 w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/empyreanuicomponents"
                    className="hover:bg-yellow-500/10 w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                    Explore Components
                  </Link>
                </SheetClose>
                {/* <SheetClose asChild>
                  <Link
                    href="/components"
                    className="hover:bg-yellow-500/10 w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                    empyreanui Components
                  </Link>
                </SheetClose> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
