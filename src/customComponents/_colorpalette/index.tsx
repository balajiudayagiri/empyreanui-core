import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Palette } from "lucide-react";
import { Button } from "empyreanui/components/ui/button";

const ColorPalletSvg = dynamic(() => import("./ColorPalletSvg"), {
  ssr: false,
});

function ColorPaletteHero() {
  return (
    <div className="py-12 flex max-lg:flex-col md:mx-5 gap-6  max-md:px-4">
      <ColorPalletSvg className="lg:w-1/2" />
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center">
        <div className="text-primary">
          <h1 className="text-3xl md:text-6xl font-bold  leading-tight mb-4 text-primary flex items-center text-center justify-center gap-2">
            <Palette className="md:size-12 size-8" />
            <span>Color Palette</span>
          </h1>
          <p className="text-center mb-10 text-lg text-gray-300">
            Discover a vibrant array of colors to enhance your designs. Click on
            any color to copy its value to your clipboard and easily integrate
            it into your projects.
          </p>
          <div className="w-full text-center">
            <Link href={"/colorpalette"}>
              <Button className="font-semibold">Go to Color Palette</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPaletteHero;
