import { Button } from "empyreanui/components/ui/button";
import Link from "next/link";
import React from "react";
import Imagecolorextractor from "./Imagecolorextractor";

function ImageColorExtractorHero() {
  return (
    <div className="flex max-lg:flex-col md:mx-5 gap-6  max-md:px-4">
      <Imagecolorextractor className="lg:w-1/2 max-w-full  max-lg:h-fit  transform rotate-y-6 lg:rotate-y-12 lg:skew-y-6" />
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center">
        <div className="text-primary">
          <h1 className="text-3xl md:text-6xl font-bold  leading-tight mb-4 text-primary flex items-center text-center justify-center gap-2">
            <span>Image Color Extractor</span>
          </h1>
          <p className="text-center mb-10 text-lg text-gray-300">
            Use this tool to extract the most prominent colors from your image.
            Simply upload an image and adjust the scale slider to control the
            precision of color extraction.
          </p>
          <div className="w-full text-center">
            <Link href={"/imagecolorextractor"}>
              <Button className="font-semibold">
                Go to Image Color Extractor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageColorExtractorHero;
