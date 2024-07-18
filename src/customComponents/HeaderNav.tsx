"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderNavLink() {
  const param = usePathname();
  if (param === "/blogs") {
    return (
      <>
        <Link href="/">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Empyrean<span className="text-purple-400">UI</span>
          </h1>
        </Link>
        <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
        <Link href="/blogs">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Blogs
          </h1>
        </Link>
      </>
    );
  }
  if (param === "/postblogs") {
    return (
      <>
        <Link href="/">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Empyrean<span className="text-purple-500">UI</span>
          </h1>
        </Link>
        <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
        <Link href="/blogs">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Blogs
          </h1>
        </Link>
      </>
    );
  }
  if (param === "/readmegenerator") {
    return (
      <>
        <Link href="/">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Empyrean<span className="text-yellow-500">UI</span>
          </h1>
        </Link>
        <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
        <Link href="/blogs">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            <span className="text-yellow-500">Readme</span>.md
          </h1>
        </Link>
      </>
    );
  }
  return (
    <Link href="/">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
        Empyrean<span className="text-yellow-500">UI</span>
      </h1>
    </Link>
  );
}

export default HeaderNavLink;
