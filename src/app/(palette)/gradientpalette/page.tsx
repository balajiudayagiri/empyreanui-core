import GradientDisplay from "empyreanui/customComponents/palette/Gradientpalette/GradientDisplay";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Gradient Gallery",
    keywords: [
      "gradient gallery",
      "CSS gradients",
      "gradient colors",
      "gradient CSS values",
      "color gradients",
      "web design",
      "UI design",
      "frontend development",
      "web development tools",
      "design tools",
      "CSS tools",
      "color palettes",
    ],
    description:
      "Explore and copy hundreds of gradient colors and their CSS values for your projects.",
    openGraph: {
      title: "Gradient Gallery",
      description:
        "Explore and copy hundreds of gradient colors and their CSS values for your projects.",
      type: "website",
    },
    abstract:
      "Gradient Gallery - Explore and copy hundreds of gradient colors and their CSS values for your projects. Perfect for web designers and developers.",
  };
}

function page() {
  return (
    <section className="mt-24">
      <GradientDisplay />
    </section>
  );
}

export default page;
