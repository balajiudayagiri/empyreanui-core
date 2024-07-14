"use client";
import React, { useState, useRef, useCallback } from "react";
import colors from "./colors"; // Update the path accordingly
import { Palette } from "lucide-react";
import { ScrollToTopButton } from "@customcomponent";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "empyreanui/components/ui/context-menu";
import { hexToColorCodes } from "empyreanui/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "empyreanui/components/ui/dropdown-menu";

interface Colors {
  [key: string]: {
    [shade: string]: string;
  };
}

const ColorDisplay: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string>("");
  const [filterColor, setFilterColor] = useState<string>("All");
  const colorRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  const setRef = useCallback((key: string, element: HTMLDivElement | null) => {
    colorRefs.current[key] = element;
  }, []);

  const handleColorSelect = (colorKey: string) => {
    setFilterColor(colorKey);
  };

  return (
    <div className="flex flex-col py-8 px-4 lg:px-16 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 flex justify-center gap-2">
        <Palette size={38} />
        <span>Color Palette</span>
      </h1>
      <p className="text-center mb-5 text-lg text-gray-300">
        Discover a vibrant array of colors to enhance your designs. Click on any
        color to copy its value to your clipboard and easily integrate it into
        your projects.
      </p>
      <p className="text-white/50 hidden md:block mb-3 text-center">
        Right Click on the tile to view more options
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger className="mx-auto mb-10 px-4 py-2 border-2 border-solid border-primary bg-gray-800 text-primary rounded-lg cursor-pointer">
          Select a Color
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-72 overflow-scroll">
          <DropdownMenuItem
            key="All"
            onSelect={() => handleColorSelect("All")}
            className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#000" }}
              />
              All
            </div>
          </DropdownMenuItem>
          {Object.entries(colors as Colors).map(([colorKey, shades]) => {
            const shadeKeys = Object.keys(shades);
            const shadeAtIndex = shades[shadeKeys[4]]; // Get the shade at index 5
            return (
              <DropdownMenuItem
                key={colorKey}
                onSelect={() => handleColorSelect(colorKey)}
                className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: shadeAtIndex }}
                  />
                  {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
      {Object.entries(colors as Colors).map(
        ([colorKey, shades]) =>
          (filterColor === "All" || filterColor === colorKey) && (
            <div
              key={colorKey}
              ref={(el) => setRef(colorKey, el)}
              className="flex flex-col items-start border rounded-xl p-6 mb-8 transform transition-all w-fit mx-auto bg-foreground/20">
              <h2 className="text-2xl font-semibold mb-6">
                {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
              </h2>
              <div className="flex flex-wrap w-full gap-6">
                {Object.entries(shades).map(([shadeKey, value]) => (
                  <div className="flex flex-col max-md:grow" key={shadeKey}>
                    <ContextMenu>
                      <ContextMenuTrigger>
                        <div
                          className="relative max-md:grow w-full cursor-pointer overflow-hidden min-w-28 h-28 p-2 transform transition-transform hover:scale-105 rounded-lg shadow-md"
                          onClick={() => copyToClipboard(value)}
                          aria-label={`Copy ${colorKey} ${shadeKey}`}
                          style={{ backgroundColor: value }}>
                          <span className="bg-white bg-opacity-75 text-black p-1 text-xs font-bold rounded-lg shadow-md absolute bottom-2">
                            {copiedColor === value ? "Copied" : "Copy"}
                          </span>
                        </div>
                      </ContextMenuTrigger>
                      <ContextMenuContent className="bg-black/70 backdrop-blur-lg backdrop-blur-safari w-36">
                        <ContextMenuItem
                          className="hover:bg-primary hover:text-black focus:bg-primary focus:text-black hover:font-semibold focus:font-semibold"
                          onClick={() =>
                            copyToClipboard(hexToColorCodes(value).hex)
                          }>
                          Copy HEX code
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="hover:bg-primary hover:text-black focus:bg-primary focus:text-black hover:font-semibold focus:font-semibold"
                          onClick={() =>
                            copyToClipboard(hexToColorCodes(value).rgb)
                          }>
                          Copy RGB code
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="hover:bg-primary hover:text-black focus:bg-primary focus:text-black hover:font-semibold focus:font-semibold"
                          onClick={() =>
                            copyToClipboard(hexToColorCodes(value).hsl)
                          }>
                          Copy HSL code
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                    <div className="text-sm font-bold text-center">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
      <ScrollToTopButton />
    </div>
  );
};

export default ColorDisplay;
