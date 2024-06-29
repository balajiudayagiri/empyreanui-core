"use client";
import React, { useState } from "react";
import colors from "./colors"; // Update the path accordingly
import { Palette } from "lucide-react";
import { ScrollToTopButton } from "@customcomponent";

interface Colors {
  [key: string]: {
    [shade: string]: string;
  };
}

const ColorDisplay: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string>("");

  const copyToClipboard = (color: string) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(""), 2000); // reset after 2 seconds
      })
      .catch((err) => {
        console.error("Error copying to clipboard: ", err);
      });
  };

  return (
    <div className="flex flex-col py-8 px-4 lg:px-16 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 flex justify-center gap-2">
        <Palette size={48} />
        <span>Color Palette</span>
      </h1>
      <p className="text-center mb-10 text-lg text-gray-300">
        Discover a vibrant array of colors to enhance your designs. Click on any
        color to copy its value to your clipboard and easily integrate it into
        your projects.
      </p>
      {Object.entries(colors as Colors).map(([colorKey, shades]) => (
        <div
          key={colorKey}
          className="flex flex-col items-start border rounded-xl p-6 mb-8 transform transition-all w-fit mx-auto bg-foreground/20">
          <h2 className="text-2xl font-semibold mb-6">
            {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
          </h2>
          <div className="flex flex-wrap w-full gap-6">
            {Object.entries(shades).map(([shadeKey, value]) => (
              <div className="flex flex-col max-md:grow" key={shadeKey}>
                <div
                  className="relative max-md:grow w-full cursor-pointer overflow-hidden min-w-28 h-28 p-2 transform transition-transform hover:scale-105 rounded-lg shadow-md"
                  onClick={() => copyToClipboard(value)}
                  aria-label={`Copy ${colorKey} ${shadeKey}`}
                  style={{ backgroundColor: value }}>
                  <span className="bg-white bg-opacity-75 text-black p-1 text-xs font-bold rounded-lg shadow-md absolute bottom-2">
                    {copiedColor === value ? "Copied" : "Copy"}
                  </span>
                </div>
                <div className="text-sm font-bold text-center">{value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <ScrollToTopButton />
    </div>
  );
};

export default ColorDisplay;
