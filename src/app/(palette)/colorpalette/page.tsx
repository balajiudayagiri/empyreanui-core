import ColorDisplay from "empyreanui/customComponents/palette/ColorDisplay/ColorDisplay";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Color Palette",
    keywords: [
      "color palette",
      "color picker",
      "design colors",
      "1600 colors",
      "web design",
      "UI design",
      "frontend development",
      "web development tools",
      "design tools",
      "CSS colors",
      "color selection",
      "color palette generator",
    ],
    description:
      "Explore and find almost 1600 colors, perfect for your design projects.",
    openGraph: {
      title: "Color Palette",
      description:
        "Explore and find almost 1600 colors, perfect for your design projects.",
      type: "website",
    },
    abstract:
      "Color Palette - Explore and find almost 1600 colors, ideal for your design projects. Perfect for web designers and developers.",
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
