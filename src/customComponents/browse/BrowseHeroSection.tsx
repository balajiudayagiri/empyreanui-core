"use client";
import dynamic from "next/dynamic";
import React from "react";
// import { motion } from "framer-motion";
// const HeroHighlight = dynamic(
//   () =>
//     import("empyreanui/components/ui/hero-highlight").then(
//       (mod) => mod.HeroHighlight
//     ),
//   {
//     ssr: false,
//   }
// );

function BrowseHeroSection() {
  return (
    <main className="h-fit max-sm:hidden">
      {/* <HeroHighlight className="md:h-[70dvh]">
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
          className="md:h-full h-fit md:flex md:items-center">
          <div className="z-[-1] md:h-[70dvh] h-auto absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}

      <div className="container mx-auto px-6 text-center md:text-left  pt-20 h-fit pb-10 ">
        <h1 className="text-4xl md:text-6xl font-bold  leading-tight mb-4">
          Welcome to Empyrean
          <span className="text-primary text-shadow">UI</span> Gallery
        </h1>
        <p className="text-lg md:text-xl  mb-8">
          Explore our extensive{" "}
          <span className="font-semibold ">UI Gallery</span>, crafted by users
          like you. Add your own components or use and download others for free.
          Support for Tailwind CSS and plain CSS.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white/10 backdrop-blur-lg backdrop-blur-safari p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Free to Use</h2>
            <p className="">
              All components are free to use and customize for your projects.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg backdrop-blur-safari p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Community Driven</h2>
            <p className="">
              Built by developers, for developers. Join our community and
              contribute.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg backdrop-blur-safari p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">
              Tailwind CSS & Plain CSS
            </h2>
            <p className="">
              Components available in both Tailwind CSS and plain CSS.
            </p>
          </div>
        </div>
      </div>
      {/* </motion.div>
      </HeroHighlight> */}
    </main>
  );
}

export default BrowseHeroSection;
