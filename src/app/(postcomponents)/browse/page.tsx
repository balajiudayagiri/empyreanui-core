import React, { Suspense } from "react";
import { PostList } from "@customcomponent";
import { Loader } from "lucide-react";

function page() {
  return (
    <div className="w-full">
      <main className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
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
      <section>
        <Suspense fallback={<Loader className="animate-spin" />}>
          <PostList />
        </Suspense>
      </section>
    </div>
  );
}

export default page;
