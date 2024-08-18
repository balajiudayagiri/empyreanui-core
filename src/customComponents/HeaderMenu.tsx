"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ListItem from "empyreanui/components/ui/list-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "empyreanui/components/ui/dropdown-menu";
import CommandMenu from "./_command_menu/CommandMenu";
import { Grid2X2, Image, LayoutPanelTop, Palette } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Signup from "./_authentication/Signup";

function HeaderMenu() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setOpen1(false);
    setOpen2(false);
  }, [pathname]);
  return (
    <nav className="hidden  md:flex items-center gap-3 md:gap-5">
      <CommandMenu />
      <DropdownMenu open={open1} onOpenChange={setOpen1}>
        <DropdownMenuTrigger className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          Getting started
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <DropdownMenuItem className="h-full">
                  <Link
                    className="hover:scale-105 transition-all duration-200 flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium">
                      <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
                        Empyrean<span className="text-primary">UI</span>
                      </h1>
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </DropdownMenuItem>
              </li>
              <DropdownMenuItem>
                <ListItem
                  href="/browse"
                  title={
                    <>
                      <span className="text-primary">UI </span>Gallery
                    </>
                  }
                >
                  Explore our extensive Gallery, crafted by users like you. Add
                  your own components or use and download others for free.
                  Support for Tailwind CSS and plain CSS.
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem
                  href="/blogs"
                  title={
                    <>
                      EmpyreanUI <span className="text-primary">Blogs</span>
                    </>
                  }
                >
                  Discover the latest news, tips, and insights from our experts.
                  Stay updated with the newest trends and stories that matter to
                  you.
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem
                  href="/readme"
                  title={
                    <>
                      Readme.<span className="text-primary">md</span> Generator
                    </>
                  }
                >
                  Use our powerful README generator to craft professional and
                  eye-catching README files for your projects.
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem
                  href="/jsdoc-ai"
                  title={
                    <>
                      <span className="text-primary">AI JsDocs</span> Generator
                    </>
                  }
                >
                  Generate a professional JsDocs for your project in seconds
                  with the power of AI.
                </ListItem>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListItem
                  href="/readme-ai"
                  title={
                    <>
                      <span className="text-primary">AI README</span> Generator
                    </>
                  }
                >
                  Generate a professional README for your project in seconds
                  with the power of AI.
                </ListItem>
              </DropdownMenuItem>
            </ul>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu open={open2} onOpenChange={setOpen2}>
        <DropdownMenuTrigger className="hover:bg-primary/20 hover:text-primary font-semibold px-4 py-2 md:px-6 md:py-2 rounded-lg transition-all duration-200">
          Tools
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <DropdownMenuItem>
              <ListItem
                href="/colorpalette"
                title={
                  <span className="flex gap-1">
                    <Palette size={16} /> Color Palette
                  </span>
                }
              >
                Discover a vibrant array of colors to enhance your designs.
                Click on any color to copy its value to your clipboard and
                easily integrate it into your projects.
              </ListItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ListItem
                href="/gradientpalette"
                title={
                  <span className="flex gap-1">
                    <Grid2X2 size={16} /> Gradient Gallery{" "}
                  </span>
                }
              >
                Explore our extensive collection of beautiful gradient
                backgrounds. Choose any gradient to see how it enhances your
                design. Click on a gradient to copy the CSS code and elevate
                your projects with stunning color transitions.
              </ListItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ListItem
                href="/imagecolorextractor"
                title={
                  <span className="flex gap-1">
                    <Image size={16} /> Image Color Extractor{" "}
                  </span>
                }
              >
                Use this tool to extract the most prominent colors from your
                image. Simply upload an image and adjust the scale slider to
                control the precision of color extraction.
              </ListItem>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ListItem
                href="/gradiantgenerator"
                title={
                  <span className="flex gap-1">
                    <LayoutPanelTop size={16} /> Gradient Generator{" "}
                  </span>
                }
              >
                Create beautiful gradients easily by adding and adjusting color
                stops. Choose from different gradient types and customize the
                angle or position to suit your design needs.
              </ListItem>
            </DropdownMenuItem>

            {/* <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
      <Signup />
    </nav>
    //       <NavigationMenuTrigger className="hover:text-primary font-semibold text-md backdrop-blur-lg">
    //         Getting started
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //       </NavigationMenuContent>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger className="hover:text-primary font-semibold text-lg  backdrop-blur-lg">
    //         Tools
    //       </NavigationMenuTrigger>
    //       <NavigationMenuContent>

    //       </NavigationMenuContent>
    // </NavigationMenuItem>
  );
}

export default HeaderMenu;
