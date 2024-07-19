"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const navLinks: { [key: string]: JSX.Element } = {
  "/blogs": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-purple-400">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
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
          Empyrean<span className="text-purple-500">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
      <Link href="/blogs">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Blogs
        </h1>
      </Link>
    </>
  ),
  "/readmegenerator": (
    <>
      <Link href="/">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Empyrean<span className="text-blue-500">UI</span>
        </h1>
      </Link>
      <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
      <Link href="/readmegenerator">
        <h1
          className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
          Readme.<span className="text-blue-500">md</span>
        </h1>
      </Link>
    </>
  ),
  "/readmegenerator/editor": (
    <Link href="/readmegenerator">
      <h1
        className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
        Readme.<span className="text-blue-500">md</span>
      </h1>
    </Link>
  ),
  "/readmegenerator/learn-more": (
    <Link href="/readmegenerator">
      <h1
        className={`text-2xl font-extrabold leading-tight tracking-tight ${montserrat.className}`}>
        Readme.<span className="text-blue-500">md</span>
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

  return <>{renderNavLinks}</>;
};

export default HeaderNavLink;
