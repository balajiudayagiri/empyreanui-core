import GradientGenerator from "kodebloxui/customComponents/palette/GradiantGenerator/GradiantGenerator";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Gradient Color Generator",
    keywords: [
      "gradient color generator",
      "CSS gradients",
      "create gradients",
      "gradient CSS values",
      "custom gradients",
      "web design",
      "UI design",
      "frontend development",
      "web development tools",
      "design tools",
      "CSS tools",
      "color palettes",
      "generate gradients",
    ],
    description:
      "Generate your own gradient colors and get the CSS values for your projects.",
    openGraph: {
      title: "Gradient Color Generator",
      description:
        "Generate your own gradient colors and get the CSS values for your projects.",
      type: "website",
    },
    abstract:
      "Gradient Color Generator - Create your own gradient colors and obtain the CSS values for your projects. Ideal for web designers and developers.",
  };
}

function page() {
  return (
    <section className="mt-24">
      <GradientGenerator />
    </section>
  );
}

export default page;
