import { BackButton } from "empyreanui/customComponents";
import { BlogPage } from "empyreanui/customComponents/blogs";
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
    <main className="bg-white text-black pt-14 min-h-dvh">
      <BackButton className="bg-white/50 backdrop-blur-lg backdrop-blur-safari" />
      <BlogPage />
    </main>
  );
}

export default page;
