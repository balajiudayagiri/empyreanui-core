import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "empyreanui/components/ui/drawer";
import { CreateNewComponent } from "@customcomponent";
import HeaderNavLink from "empyreanui/customComponents/HeaderNav";

function Header() {
  return (
    <header className="h-14 border-b flex items-center px-5 md:px-9 justify-between bg-background/70 backdrop-blur-lg backdrop-blur-safari fixed w-full top-0 z-50">
      <span className="flex">
       
        <HeaderNavLink />
        
      </span>
      <nav className="hidden md:flex items-center gap-3 md:gap-5">
        <Link
          href="/browse"
          className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          UI Gallery
        </Link>
        {/* <Link
          href="/core"
          className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          EmpyreanUI Core
        </Link> */}
        <Link
          href="/colorpalette"
          className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          Color Palette
        </Link>
        <Link
          href="/blogs"
          className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          Blogs
        </Link>
      </nav>
      <div className="md:hidden block">
        <div className="flex items-center">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="focus:outline-none ml-3">
                <MenuIcon className="w-6 h-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-dvh">
              <DrawerTitle className="mt-10">
                <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-center">
                  Empyrean<span className="text-yellow-500">UI</span>
                </h1>
              </DrawerTitle>
              <nav className="flex flex-col items-center gap-3 p-4 justify-between h-[calc(100dvh-77.04px)]">
                <div className="flex flex-col mt-6">
                  <DrawerClose asChild>
                    <Link
                      href="/"
                      className="hover:bg-primary/20 hover:text-primary w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                      Home
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link
                      href="/browse"
                      className="hover:bg-primary/20 hover:text-primary w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                      UI Gallery
                    </Link>
                  </DrawerClose>
                  {/* <DrawerClose asChild>
                    <Link
                      href="/core"
                      className="hover:bg-primary/20 hover:text-primary w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                      EmpyreanUI Core
                    </Link>
                  </DrawerClose> */}
                  <DrawerClose asChild>
                    <Link
                      href="/colorpalette"
                      className="hover:bg-primary/20 hover:text-primary w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                      Color Palette
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <Link
                      href="/blogs"
                      className="hover:bg-primary/20 hover:text-primary w-full text-center px-4 py-2 rounded-lg transition-all duration-200">
                      Blogs
                    </Link>
                  </DrawerClose>
                </div>
                <div>
                  <DrawerClose asChild>
                    <span>
                      <CreateNewComponent className="rounded-full" />
                    </span>
                  </DrawerClose>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
