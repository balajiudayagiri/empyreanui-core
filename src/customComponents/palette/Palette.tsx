"use client";
import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "empyreanui/components/ui/tabs";
import React from "react";
// import ColorDisplay from "empyreanui/customComponents/palette/ColorDisplay/ColorDisplay";
// import GradientDisplay from "empyreanui/customComponents/palette/Gradientpalette/GradientDisplay";
// import ImageColorExtractor from "empyreanui/customComponents/palette/ImageColorExtractor/ImageColorExtractor";
// import GradiantGenerator from "./GradiantGenerator/GradiantGenerator";
import Link from "next/link";

function Palette() {
  return (
    <Tabs
      defaultValue="colorpalette"
      className="w-full"
      onValueChange={(value) => console.log(value)}>
      <TabsList className="flex justify-center w-full md:gap-5 grid-cols-3 rounded-none fixed z-30 top-14 bg-background/70 backdrop-blur-lg flex-wrap h-fit max-md:gap-2 border-b">
        <Link href={"/colorpalette"}>
          <TabsTrigger
            value="colorpalette"
            className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
            Color Palette
          </TabsTrigger>
        </Link>
        <Link href={"/gradientpalette"}>
          <TabsTrigger
            value="gradientpalette"
            className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
            Gradient Palette
          </TabsTrigger>
        </Link>
        <Link href={"/imagecolorextractor"}>
          <TabsTrigger
            value="imagecolorextractor"
            className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
            Image Color Extractor
          </TabsTrigger>
        </Link>
        <Link href={"/gradiantgenerator"}>
          <TabsTrigger
            value="gradiantgenerator"
            className="data-[state=active]:bg-primary max-md:border max-md:border-solid max-md:border-primary data-[state=active]:text-black font-bold data-[state=inactive]:text-primary min-w-fit">
            Gradiant Generator
          </TabsTrigger>
        </Link>
      </TabsList>
      {/* <TabsContent value="colorpalette" className="mt-24">
        <ColorDisplay />
      </TabsContent>
      <TabsContent value="gradientdisplay" className="mt-24">
        <GradientDisplay />
      </TabsContent>
      <TabsContent value="imagecolorextractor" className="mt-24">
        <ImageColorExtractor />
      </TabsContent>
      <TabsContent value="gradiantgenerator" className="mt-24">
        <GradiantGenerator />
      </TabsContent> */}
    </Tabs>
  );
}

export default Palette;
