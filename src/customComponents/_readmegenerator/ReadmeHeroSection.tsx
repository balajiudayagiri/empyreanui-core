import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";
import React from "react";
import ReadmeSvg from "./ReadmeSvg";

function ReadmeHeroSection() {
  return (
    <div className="flex max-lg:flex-col-reverse md:mx-5 gap-6  max-md:px-4">
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center">
        <div className="text-primary">
          <h1 className="text-3xl md:text-6xl font-bold  leading-tight mb-4 text-blue-500 flex items-center text-center justify-center gap-2">
            <span>Readme Generator</span>
          </h1>
          <p className="text-center mb-10 text-lg text-gray-300">
            Use our powerful README generator to craft professional and
            eye-catching README files for your projects.
          </p>
          <div className="w-full text-center">
            <Link href={"/readmegenerator"}>
              <Button className="font-semibold bg-blue-500 hover:bg-blue-700 text-white">
                Go to Readme Generator
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <ReadmeSvg className="lg:w-1/2 max-w-full  max-lg:h-fit" />
    </div>
  );
}

export default ReadmeHeroSection;
