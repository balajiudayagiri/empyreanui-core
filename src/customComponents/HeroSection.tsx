"use client";
import React from "react";
import { Button } from "empyreanui/components/ui/button";
import { FlipWords } from "empyreanui/components/ui/flip-words";
import Link from "next/link";
// import { Vortex } from "empyreanui/components/ui/vortex";
import dynamic from "next/dynamic";

const Vortex = dynamic(() => import("empyreanui/components/ui/vortex"));

function HeroSection() {
  const words = [
    "Better",
    "Cute",
    "Beautiful",
    "Modern",
    "Innovative",
    "Intuitive",
    "Responsive",
    "Modern",
    "Elegant",
    "Robust",
    "Versatile",
    "Fast",
    "Customizable",
    "Seamless",
  ];

  return (
    <Vortex
      backgroundColor="black"
      baseHue={320}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
      <main className="relative h-[calc(100dvh-208px)] flex items-center justify-center overflow-y-auto p-8 md:p-24">
        <div className="h-full w-full space-y-6 flex  items-center">
          <div>
            <div className="flex items-center font-semibold text-6xl">
              <div className="md:text-6xl text-2xl mb-5">
                Build
                <FlipWords words={words} className="font-bold" /> <br />
                websites with{" "}
                <span className="font-extrabold">
                  Empyrean
                  <span className="text-primary text-shadow">UI</span>
                </span>
              </div>
            </div>
            <p className="text-md md:text-lg font-medium mb-5">
              EmpyreanUI is a robust UI library offering a range of components,
              hooks, and animating wrappers to streamline development and ensure
              consistent, high-quality user interfaces.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6mb-5">
              <Link href="/blogs">
                <Button className="bg-primary text-black px-5 py-3 md:px-7 md:py-3 text-lg rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-200 h-full">
                  Explore Blogs
                </Button>
              </Link>
              <Link href="/browse">
                <Button className="bg-primary text-black px-5 py-3 md:px-7 md:py-3 text-lg rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-200 h-full">
                  Explore UI Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Vortex>
  );
}

export default HeroSection;
