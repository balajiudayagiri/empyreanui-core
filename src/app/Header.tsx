import Link from "next/link";
import React from "react";
import { MenuIcon, Palette } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "empyreanui/components/ui/drawer";
import { CreateNewComponent } from "@customcomponent";
import dynamic from "next/dynamic";
import HeaderMenu from "empyreanui/customComponents/HeaderMenu";
import CommandMenu from "empyreanui/customComponents/_command_menu/CommandMenu";
import ListItem from "empyreanui/components/ui/list-item";
import AuthButton from "empyreanui/customComponents/_authentication/AuthButton";

const HeaderNavLink = dynamic(
  () => import("empyreanui/customComponents/HeaderNav"),
  { ssr: false }
);

function Header() {
  return (
    <header className="h-14 border-b flex items-center px-5 md:px-9 justify-between bg-background/70 backdrop-blur-lg backdrop-blur-safari fixed w-full top-0 z-50">
      <HeaderNavLink />
      <HeaderMenu />
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
                  Empyrean<span className="text-primary">UI</span>
                </h1>
              </DrawerTitle>
              <nav className="flex flex-col items-center overflow-y-scroll gap-3 p-4 justify-between h-[calc(100dvh-77.04px)]">
                <div className="flex flex-col mt-6">
                  <div>
                    <AuthButton />
                  </div>
                  <hr />
                  {/* Apply grid layout here */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/"
                        title={
                          <>
                            Empyrean<span className="text-primary">UI</span>
                          </>
                        }>
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </ListItem>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/browse"
                        title={
                          <>
                            <span className="text-primary">UI </span>Gallery
                          </>
                        }>
                        Explore our extensive Gallery, crafted by users like
                        you. Add your own components or use and download others
                        for free. Support for Tailwind CSS and plain CSS.
                      </ListItem>
                    </DrawerClose>
                    {/* Continue with other items */}
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/colorpalette"
                        title={
                          <span className="flex gap-1">Color Palette</span>
                        }>
                        Discover a vibrant array of colors to enhance your
                        designs. Click on any color to copy its value to your
                        clipboard and easily integrate it into your projects.
                      </ListItem>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/blogs"
                        title={
                          <>
                            EmpyreanUI{" "}
                            <span className="text-primary">Blogs</span>
                          </>
                        }>
                        Discover the latest news, tips, and insights from our
                        experts. Stay updated with the newest trends and stories
                        that matter to you.
                      </ListItem>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/readme"
                        title={
                          <>
                            Readme.<span className="text-primary">md</span>{" "}
                            Generator
                          </>
                        }>
                        Use our powerful README generator to craft professional
                        and eye-catching README files for your projects.
                      </ListItem>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/readme-ai"
                        title={
                          <>
                            <span className="text-primary">AI README</span>{" "}
                            Generator
                          </>
                        }>
                        Generate a professional README for your project in
                        seconds with the power of AI.
                      </ListItem>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <ListItem
                        className="bg-muted/20"
                        href="/jsdoc-ai"
                        title={
                          <>
                            <span className="text-primary">AI JsDocs</span>{" "}
                            Generator
                          </>
                        }>
                        Generate a professional JsDocs for your project in
                        seconds with the power of AI.
                      </ListItem>
                    </DrawerClose>
                  </div>
                </div>
                {/* <div>
                  <DrawerClose asChild>
                    <span>
                      <CreateNewComponent className="rounded-full" />
                    </span>
                  </DrawerClose>
                </div> */}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
