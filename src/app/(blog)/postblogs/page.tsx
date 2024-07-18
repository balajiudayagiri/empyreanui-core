import { BackButton } from "empyreanui/customComponents";
import { BlogPage } from "empyreanui/customComponents/blogs";
import React from "react";

export async function generateMetadata() {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
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
    <main className="bg-white text-black pt-14 min-h-dvh">
      <BackButton className="bg-white/50 backdrop-blur-lg backdrop-blur-safari" />
      <BlogPage />
    </main>
  );
}

export default page;
