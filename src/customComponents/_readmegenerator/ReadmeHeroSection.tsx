import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "empyreanui/components/ui/button";

const ReadmeSvg = dynamic(() => import("./ReadmeSvg"), { ssr: false });

function ReadmeHeroSection() {
  return (
    <div className="flex max-lg:flex-col md:mx-5 gap-6  max-md:px-4">
      <ReadmeSvg className="lg:w-1/2 max-w-full  max-lg:h-fit" />
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
    </div>
  );
}

export default ReadmeHeroSection;
