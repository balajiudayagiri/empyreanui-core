import GradientDisplay from "empyreanui/customComponents/palette/Gradientpalette/GradientDisplay";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gradient Gallery",
    description:
      "Explore and copy hundreds of gradient colors and their CSS values for your projects.",
    openGraph: {
      title: "Gradient Gallery",
      description:
        "Explore and copy hundreds of gradient colors and their CSS values for your projects.",
      type: "website",
    },
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
