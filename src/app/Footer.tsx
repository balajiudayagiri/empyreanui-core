import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="p-6 md:p-12">
      <div className="">
        <Link href="/">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
            Empyrean<span className="text-yellow-500">UI</span>
          </h1>
        </Link>
      </div>
      <nav className="flex flex-wrap md:justify-between pt-6 pb-12 max-md:flex-col max-md:gap-4">
        <Link href="/browse" className="hover:text-primary text-sm">
          UI Gallery
        </Link>
        {/* <Link href="/core" className="hover:text-primary text-sm">
          EmpyreanUI Core
        </Link> */}
        <Link href="/colorpalette" className="hover:text-primary text-sm">
          Color Palette
        </Link>
        <Link href="/postcomponent" className="hover:text-primary text-sm">
          Create a Component
        </Link>
        <Link href="/gradientpalette" className="hover:text-primary text-sm">
          Gradient Palette
        </Link>{" "}
        <Link
          href="/imagecolorextractor"
          className="hover:text-primary text-sm">
          Image Color Extractor
        </Link>{" "}
        <Link href="/gradiantgenerator" className="hover:text-primary text-sm">
          Gradiant Generator
        </Link>
      </nav>
      <div className="max-w-7xl mx-auto text-foreground/50">
        <p className="text-xs md:text-sm font-medium  text-center">
          &copy; 2024{" "}
          <span className="font-bold">
            Empyrean<span className="text-yellow-500/50">UI</span>
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
