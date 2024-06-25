import React, { Suspense } from "react";
import { PostList } from "@customcomponent";
import { Loader } from "lucide-react";

function page() {
  return (
    <div className="w-full relative">
      <main className="pt-40 pb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
        <div className="container mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-4">
            Welcome to Empyrean
            <span className="text-yellow-700 text-shadow">UI</span> Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Explore our extensive{" "}
            <span className="font-semibold ">UI Gallery</span>, crafted by users
            like you. Add your own components or use and download others for
            free. Support for Tailwind CSS and plain CSS.
          </p>
          {/* <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
              Get Started
            </button>
            <button className="bg-white text-blue-800 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
              Learn More
            </button>
          </div> */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Free to Use</h2>
              <p className="text-gray-700">
                All components are free to use and customize for your projects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Community Driven</h2>
              <p className="text-gray-700">
                Built by developers, for developers. Join our community and
                contribute.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                Tailwind CSS & Plain CSS
              </h2>
              <p className="text-gray-700">
                Components available in both Tailwind CSS and plain CSS.
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* <!--Waves Container--> */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 mb-11">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto">
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="#00000070" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="#00000050" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="#00000030" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#000" />
          </g>
        </svg>
      </div>
      <section className="">
        <Suspense fallback={<Loader className="animate-spin" />}>
          <PostList />
        </Suspense>
      </section>
    </div>
  );
}

export default page;
