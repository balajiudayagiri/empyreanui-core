import Link from "next/link";
// import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "Readme Editor",
    description: "Edit your README files with ease using the Readme Editor.",
    keywords: "Readme, Editor, React, Next.js, EmpyreanUI",
    authors: [{ name: "Balaji Udayagiri" }],
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white p-5">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Create Stunning README Files Effortlessly
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Use our powerful README generator to craft professional and
          eye-catching README files for your projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/readme/editor"
            className="bg-white text-blue-500 font-semibold hover:bg-gray-200 px-8 py-4 rounded-full shadow-md transition duration-300">
            Get Started by generating one
          </Link>
          <Link
            href="/readme/learn-more"
            className="bg-blue-700 font-semibold hover:bg-blue-800 px-8 py-4 rounded-full shadow-md transition duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
