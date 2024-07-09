"use client";
import dynamic from "next/dynamic";
import React from "react";
const Vortex = dynamic(() => import("empyreanui/components/ui/vortex"), {
  ssr: false,
});

function BrowseHeroSection() {
  return (
    <main className="pt-20 md:pt-40 pb-10 md:h-[80dvh]">
      <Vortex
        backgroundColor="black"
        baseHue={10}
        className="px-2 md:px-10 py-4 w-full h-full">
        <div className="container mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold  leading-tight mb-4">
            Welcome to Empyrean
            <span className="text-primary text-shadow">UI</span> Gallery
          </h1>
          <p className="text-lg md:text-xl  mb-8">
            Explore our extensive{" "}
            <span className="font-semibold ">UI Gallery</span>, crafted by users
            like you. Add your own components or use and download others for
            free. Support for Tailwind CSS and plain CSS.
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
      </Vortex>
    </main>
  );
}

export default BrowseHeroSection;
