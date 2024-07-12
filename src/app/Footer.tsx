import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-white p-6 md:p-12">
      <div className="container mx-auto">
        <div className="text-center md:text-start">
          <Link href="/">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight">
              Empyrean<span className="text-yellow-500">UI</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-between pt-6 pb-12 max-md:flex-col max-md:gap-4">
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/browse">
            UI Gallery
          </Link>
          {/* className="hover:text-yellow-500 text-sm transition-colors duration-200" <Link href="/core">
            
              EmpyreanUI Core
            
          </Link> */}
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/colorpalette">
            Color Palette
          </Link>
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/gradientpalette">
            Gradient Palette
          </Link>
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/imagecolorextractor">
            Image Color Extractor
          </Link>
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/gradientgenerator">
            Gradient Generator
          </Link>
          <Link
            className="hover:text-yellow-500 text-sm transition-colors duration-200"
            href="/blogs">
            Blogs
          </Link>
        </nav>
        <div className="text-center text-foreground/50">
          <p className="text-xs md:text-sm font-medium">
            &copy; 2024{" "}
            <span className="font-bold">
              Empyrean<span className="text-yellow-500/50">UI</span>
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
