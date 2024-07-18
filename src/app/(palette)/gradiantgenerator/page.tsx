import GradientGenerator from "empyreanui/customComponents/palette/GradiantGenerator/GradiantGenerator";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Gradient Color Generator",
    description:
      "Generate your own gradient colors and get the CSS values for your projects.",
    openGraph: {
      title: "Gradient Color Generator",
      description:
        "Generate your own gradient colors and get the CSS values for your projects.",
      type: "website",
    },
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
