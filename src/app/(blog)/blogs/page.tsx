import { Button } from "kodebloxui/components/ui/button";
import { ScrollToTopButton } from "kodebloxui/customComponents";
import BlogsListing from "kodebloxui/customComponents/blogs/BlogsListing";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "EmpyreanUI Blogs",
    keywords: [
      "EmpyreanUI blogs",
      "blogging",
      "write blogs",
      "UI elements blogs",
      "animated components blogs",
      "web development blogs",
      "front-end development blogs",
      "JavaScript blogs",
      "React blogs",
      "tech blogs",
      "developer blogs",
      "design blogs",
      "README generator blogs",
      "AI JSDocs generator blogs",
      "color palette blogs",
      "gradient palette blogs",
    ],
    description:
      "Explore and write blogs on various topics. Share your thoughts with the world.",
    openGraph: {
      title: "EmpyreanUI Blogs",
      description:
        "Explore and write blogs on various topics. Share your thoughts with the world.",
      type: "website",
    },
    abstract:
      "EmpyreanUI Blogs - Explore and write blogs on various topics with EmpyreanUI. Share your thoughts on UI elements, animated components, buttons, cards, loaders, and more.",
  };
}

function page() {
  return (
    <main className="bg-gray-100 text-black min-h-screen pt-14">
      <nav className="sticky top-14 z-30 bg-white/50 backdrop-blur-sm backdrop-blur-safari  shadow-md px-5 py-2 flex justify-end items-center">
        <Link href="/postblogs">
          <Button className="flex gap-3 bg-purple-500 text-white border-2 border-transparent hover:bg-purple-600 transition ease-in-out duration-300 ml-auto">
            <SquarePen className="w-5 h-5" aria-hidden="true" />
            <span className="font-bold">Write a Blog</span>
          </Button>
        </Link>
      </nav>
      <section className=" flex flex-col items-center">
        <BlogsListing />
      </section>
      <ScrollToTopButton />
    </main>
  );
}

export default page;
