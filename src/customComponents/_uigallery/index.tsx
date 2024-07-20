import Image from "next/image";
import React from "react";
import img from "../../../public/Gallery.png";
import Link from "next/link";
import { Button } from "empyreanui/components/ui/button";

function UiGalleryHero() {
  return (
    <div className="py-12 flex max-lg:flex-col-reverse md:mx-5 gap-6 max-md:px-4">
      <div className="container mx-auto px-6 text-center md:text-left  pt-20 h-fit pb-10 ">
        <h1 className="text-4xl md:text-6xl font-bold  leading-tight mb-4 text-center">
          Empyrean
          <span className="text-primary text-shadow">UI</span> Gallery
        </h1>
        <p className="text-lg md:text-xl  mb-8 text-center">
          Explore our extensive{" "}
          <span className="font-semibold ">UI Gallery</span>, crafted by users
          like you. Add your own components or use and download others for free.
          Support for Tailwind CSS and plain CSS.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-md:hidden">
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
        <div className="w-full text-center mt-8">
          <Link href={"/browse"}>
            <Button className="font-semibold">Go to EmpyreanUI Gallery</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UiGalleryHero;
