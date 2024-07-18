import ImageColorExtractor from "empyreanui/customComponents/palette/ImageColorExtractor/ImageColorExtractor";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Image Color Extractor",
    description:
      "Upload an image to extract colors and generate a color palette using base64 encoding.",
    openGraph: {
      title: "Image Color Extractor",
      description:
        "Upload an image to extract colors and generate a color palette using base64 encoding.",
      type: "website",
    },
  };
}

function page() {
  return (
    <section className="mt-24">
      <ImageColorExtractor />
    </section>
  );
}

export default page;
