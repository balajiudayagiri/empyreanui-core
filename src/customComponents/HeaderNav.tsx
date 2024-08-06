"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { Montserrat } from "next/font/google";
import { Sparkle } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

const navLinks: { [key: string]: JSX.Element } = {
  "/blogs": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-primary">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid" />
      <Link href="/blogs">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Blogs
        </h1>
      </Link>
    </>
  ),
  "/postblogs": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-primary">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid" />
      <Link href="/blogs">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Blogs
        </h1>
      </Link>
    </>
  ),
  "/readme": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-primary">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid" />
      <Link href="/readme">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Readme.<span className="text-primary">md</span>
        </h1>
      </Link>
    </>
  ),
  "/readme-ai": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-primary">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid" />
      <Link href="/readme">
        <h1
          className={`md:text-2xl text-lg  font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          <span className="max-md:hidden flex gap-1">
            <span className="text-primary flex mr-2">
              AI <Sparkle className="mx-1" /> README
            </span>{" "}
            Generator
          </span>
        </h1>
      </Link>
    </>
  ),
  "/jsdoc-ai": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-primary">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid" />
      <Link href="/jsdoc-ai">
        <h1
          className={`md:text-2xl text-lg  font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          <span className="max-md:hidden flex gap-1">
            <span className="text-primary flex mr-2">
              AI <Sparkle className="mx-1" /> JsDocs
            </span>{" "}
            Generator
          </span>
        </h1>
      </Link>
    </>
  ),
  "/readme/editor": (
    <Link href="/readme">
      <h1
        className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
        Readme.<span className="text-primary">md</span>
      </h1>
    </Link>
  ),
  "/readme/learn-more": (
    <Link href="/readme">
      <h1
        className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
        Readme.<span className="text-primary">md</span>
      </h1>
    </Link>
  ),
  default: (
    <Link href="/">
      <h1
        className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
        Empyrean<span className="text-yellow-500">UI</span>
      </h1>
    </Link>
  ),
};

const HeaderNavLink: React.FC = () => {
  const pathname = usePathname();

  // Function to find the best match for the pathname
  const findNavLink = (pathname: string) => {
    // Iterate through navLinks to find the most specific match
    const match = Object.keys(navLinks).reduce((acc, key) => {
      if (pathname.startsWith(key) && key.length > acc.length) {
        return key;
      }
      return acc;
    }, "");

    return navLinks[match] || navLinks["default"];
  };

  const renderNavLinks = useMemo(() => findNavLink(pathname), [pathname]);
  return <div className="flex">{renderNavLinks}</div>;
};

export default HeaderNavLink;
