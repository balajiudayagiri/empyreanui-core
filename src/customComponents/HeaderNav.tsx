"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderNavLink() {
  const param = usePathname();
  if (param === "/blogs") {
    return (
      <>
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
        <div className="h-auto border-[1.2px] mx-2 border-solid border-white/60" />
        <Link href="/blogs">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
            Blogs
          </h1>
        </Link>
      </>
    );
  }
  return null;
}

export default HeaderNavLink;
