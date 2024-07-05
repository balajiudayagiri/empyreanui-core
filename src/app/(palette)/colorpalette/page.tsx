import ColorDisplay from "empyreanui/customComponents/palette/ColorDisplay/ColorDisplay";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Color Palette",
    description:
      "Explore and find almost 1600 colors, perfect for your design projects.",
    openGraph: {
      title: "Color Palette",
      description:
        "Explore and find almost 1600 colors, perfect for your design projects.",
      type: "website",
    },
  };
}

function page() {
  return (
    <section className="mt-24">
      <ColorDisplay />
    </section>
  );
}

export default page;
