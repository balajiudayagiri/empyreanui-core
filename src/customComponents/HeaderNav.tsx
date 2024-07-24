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
          className={`text-2xl flex gap-1 font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          <span className="text-primary flex mr-2">
            AI <Sparkle className="mx-1" /> README
          </span>{" "}
          Generator
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
  const param = usePathname();

  const renderNavLinks = useMemo(
    () => navLinks[param] || navLinks["default"],
    [param]
  );

  return <div className="flex">{renderNavLinks}</div>;
};

export default HeaderNavLink;
