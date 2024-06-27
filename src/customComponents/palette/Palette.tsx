"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "empyreanui/components/ui/tabs";
import React from "react";
import ColorDisplay from "empyreanui/customComponents/palette/ColorDisplay/ColorDisplay";
import GradientDisplay from "empyreanui/customComponents/palette/GradientDisplay/GradientDisplay";
import ImageColorExtractor from "empyreanui/customComponents/palette/ImageColorExtractor/ImageColorExtractor";

function Palette() {
  return (
    <Tabs defaultValue="colorpalette" className="w-full">
      <TabsList className="flex w-full grid-cols-3 rounded-none fixed z-30 top-14 bg-background/70 backdrop-blur-lg flex-wrap h-fit max-md:gap-2">
        <TabsTrigger
          value="colorpalette"
          className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary grow data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
          Color Palette
        </TabsTrigger>
        <TabsTrigger
          value="gradientdisplay"
          className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary grow data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
          Gradient Gallery
        </TabsTrigger>
        <TabsTrigger
          value="imagecolorextractor"
          className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary grow data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
          Image Color Extractor
        </TabsTrigger>
      </TabsList>
      <TabsContent value="colorpalette" className="mt-24">
        <ColorDisplay />
      </TabsContent>
      <TabsContent value="gradientdisplay" className="mt-24">
        <GradientDisplay />
      </TabsContent>
      <TabsContent value="imagecolorextractor" className="mt-24">
        <ImageColorExtractor />
      </TabsContent>
    </Tabs>
  );
}

export default Palette;
