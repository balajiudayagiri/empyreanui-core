"use client";
import React from "react";
import { Button } from "empyreanui/components/ui/button";
import { FlipWords } from "empyreanui/components/ui/flip-words";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroHighlight = dynamic(
  () =>
    import("empyreanui/components/ui/hero-highlight").then(
      (mod) => mod.HeroHighlight
    ),
  {
    ssr: false,
  }
);

function HeroSection() {
  const words = [
    "Better",
    "Elegant",
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
    <main className="relative h-[100dvh] flex items-center justify-center overflow-y-auto">
      <HeroHighlight className="h-dvh">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="h-dvh p-8 md:p-24">
          <div className="z-[-1] h-svh absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
              {/* <p className="text-md md:text-lg font-medium mb-5">
                EmpyreanUI is a robust UI library offering a range of
                components, hooks, and animating wrappers to streamline
                development and ensure consistent, high-quality user interfaces.
              </p> */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-6mb-5">
                <Link href="/browse">
                  <Button className="bg-primary text-black px-5 py-3 md:px-7 md:py-3 text-lg rounded-full font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-200 h-full">
                    Explore UI Gallery
                  </Button>
                </Link>
                <Link href="/blogs">
                  <Button
                    variant={"ghost"}
                    className="text-primary px-5 py-3 md:px-7 md:py-3 text-lg rounded-full hover:bg-transparent border-2 border-solid border-transparent hover:border-primary hover:text-primary font-semibold hover:scale-105 transition-all duration-200 h-full">
                    Explore Blogs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </HeroHighlight>
    </main>
  );
}

export default HeroSection;
