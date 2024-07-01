import React from "react";
import ColorPalletSvg from "./ColorPalletSvg";
import { Palette } from "lucide-react";

function ColorPaletteHero() {
  return (
    <div className="py-12 flex max-lg:flex-col md:mx-5 gap-6  max-md:px-4">
      <ColorPalletSvg className="lg:w-1/2" />
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center">
        <div className="text-primary">
          <h1 className="text-4xl md:text-6xl font-bold  leading-tight mb-4 text-primary flex justify-center gap-2">
            <Palette size={50} />
            <span>Color Palette</span>
          </h1>
          <p className="text-center mb-10 text-lg text-gray-300">
            Discover a vibrant array of colors to enhance your designs. Click on
            any color to copy its value to your clipboard and easily integrate
            it into your projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorPaletteHero;
