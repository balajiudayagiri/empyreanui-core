"use client";
import React, { useState } from "react";
import colors from "./colors"; // Update the path accordingly
import { Palette } from "lucide-react";
import { ScrollToTopButton } from "@customcomponent";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "kodebloxui/components/ui/context-menu";
import { hexToColorCodes } from "kodebloxui/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "kodebloxui/components/ui/dialog";

interface Colors {
  [key: string]: {
    [shade: string]: string;
  };
}

const ColorDisplay: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string>("");
  const [expandedColor, setExpandedColor] = useState<string | null>(null); // Track expanded color
  const [filterColor, setFilterColor] = useState<string>("All");

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

  const handleColorSelect = (colorKey: string) => {
    setFilterColor(colorKey);
  };

  return (
    <div className="relative flex flex-col py-8 px-4 lg:px-16 min-h-screen">
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

      {/* Dropdown to filter colors */}
      <div className="mb-10 text-center">
        <button
          onClick={() => handleColorSelect("All")}
          className="mx-auto px-4 py-2 border-2 border-solid border-primary bg-gray-800 text-primary rounded-lg">
          Select a Color
        </button>
      </div>

      {/* Render Colors */}
      <div className="flex flex-wrap gap-3 justify-between">
        {Object.entries(colors as Colors).map(([colorKey, shades]) =>
          filterColor === "All" || filterColor === colorKey ? (
            <div key={colorKey} className="relative mb-8">
              {/* Collapsed Tile */}
              <Dialog>
                <DialogTrigger>
                  <div
                    title={colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
                    className={`size-44 cursor-pointer transform hover:scale-105 bg-foreground/20 rounded-lg shadow-md flex justify-center items-center flex-col`}
                    style={{
                      backgroundColor: shades[Object.keys(shades)[4]],
                    }}>
                    <h2 className="font-semibold transition-all duration-300 mix-blend-difference">
                      {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
                    </h2>
                    <div className="absolute bottom-2 bg-white bg-opacity-75 text-black p-1 text-xs font-bold rounded-lg">
                      {copiedColor === shades[Object.keys(shades)[0]]
                        ? "Copied"
                        : "Click to Expand"}
                    </div>
                  </div>
                </DialogTrigger>

                {/* Expanded View in Dialog */}
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>
                      Shades of{" "}
                      {colorKey.charAt(0).toUpperCase() + colorKey.slice(1)}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="flex flex-wrap gap-6 p-6">
                    {Object.entries(shades).map(([shadeKey, value]) => (
                      <div
                        title={`${
                          colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
                        }-${shadeKey}`}
                        key={shadeKey}
                        className="flex flex-col items-center">
                        <ContextMenu>
                          <ContextMenuTrigger>
                            <div
                              className="relative w-28 h-28 p-2 transform transition-transform hover:scale-105 rounded-lg shadow-md"
                              onClick={() => copyToClipboard(value)}
                              aria-label={`Copy ${colorKey} ${shadeKey}`}
                              style={{ backgroundColor: value }}>
                              <span className="bg-white bg-opacity-75 text-black p-1 text-xs font-bold rounded-lg shadow-md absolute bottom-2">
                                {copiedColor === value ? "Copied" : "Copy"}
                              </span>
                            </div>
                          </ContextMenuTrigger>
                          <ContextMenuContent className="bg-black/70 backdrop-blur-lg w-36">
                            <ContextMenuItem
                              onClick={() =>
                                copyToClipboard(hexToColorCodes(value).hex)
                              }
                              className="hover:bg-primary hover:text-black">
                              Copy HEX code
                            </ContextMenuItem>
                            <ContextMenuItem
                              onClick={() =>
                                copyToClipboard(hexToColorCodes(value).rgb)
                              }
                              className="hover:bg-primary hover:text-black">
                              Copy RGB code
                            </ContextMenuItem>
                            <ContextMenuItem
                              onClick={() =>
                                copyToClipboard(hexToColorCodes(value).hsl)
                              }
                              className="hover:bg-primary hover:text-black">
                              Copy HSL code
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                        <div className="text-sm font-bold text-center mt-2">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <DialogClose>Close</DialogClose>
                </DialogContent>
              </Dialog>
            </div>
          ) : null
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default ColorDisplay;
