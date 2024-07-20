import React, { Suspense } from "react";
import { PostList } from "@customcomponent";
import { Loader } from "lucide-react";
import { Metadata } from "next";
import BrowseHeroSection from "empyreanui/customComponents/browse/BrowseHeroSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Empyrean UI Gallery",
    description:
      "Explore our extensive UI Gallery, crafted by users like you. Add your own components or use and download others for free. Support for Tailwind CSS and plain CSS.",
    openGraph: {
      title: "Empyrean UI Gallery",
      description:
        "Explore our extensive UI Gallery, crafted by users like you. Add your own components or use and download others for free. Support for Tailwind CSS and plain CSS.",
      type: "website",
    },
  };
}

function page() {
  return (
    <div className="w-full relative">
      <BrowseHeroSection />
      <section className="">
        <Suspense fallback={<Loader className="animate-spin" />}>
          <PostList />
        </Suspense>
      </section>
    </div>
  );
}

export default page;
