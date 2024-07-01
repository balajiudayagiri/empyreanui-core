import Image from "next/image";
import React from "react";
import img from "../../../public/Gallery.png";
import Link from "next/link";

function UiGalleryHero() {
  return (
    <div className="py-12 flex max-lg:flex-col-reverse md:mx-5 gap-6 max-md:px-4">
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center text-center">
        <div>
          <Link href={"/browse"}>
            <h1 className="text-4xl md:text-6xl font-bold  leading-tight mb-4 text-primary">
              UI Gallery
            </h1>
          </Link>
          <p className="text-lg md:text-x mb-8">
            Explore our extensive{" "}
            <span className="font-semibold ">UI Gallery</span>, crafted by users
            like you. Add your own components or use and download others for
            free. Support for Tailwind CSS and plain CSS.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          src={img}
          height={1000}
          width={1000}
          alt="image"
          className="h-full md:w-1/2"
        />
      </div>
    </div>
  );
}

export default UiGalleryHero;
