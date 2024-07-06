import { Button } from "empyreanui/components/ui/button";
import BlogsListing from "empyreanui/customComponents/blogs/BlogsListing";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return {
    title: "EmpyreanUI Blogs",
    description:
      "Explore and write blogs on various topics. Share your thoughts with the world.",
    openGraph: {
      title: "EmpyreanUI Blogs",
      description:
        "Explore and write blogs on various topics. Share your thoughts with the world.",
      type: "website",
    },
  };
}

function page() {
  return (
    <main className="bg-gray-100 text-black min-h-screen pt-14">
      <nav className="sticky top-14 z-10 bg-gray-100/50 backdrop-blur-lg backdrop-blur-safari  shadow-md px-5 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">EmpyreanUI Blogs</div>
        <Link href="/postblogs">
          <Button className="flex gap-3 bg-blue-500 text-white border-2 border-transparent hover:bg-blue-600 transition ease-in-out duration-300 ml-auto">
            <SquarePen className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold">Write a Blog</span>
          </Button>
        </Link>
      </nav>
      <section className="md:p-6 flex flex-col items-center">
        <BlogsListing />
      </section>
    </main>
  );
}

export default page;