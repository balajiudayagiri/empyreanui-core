import ImageColorExtractor from "kodebloxui/customComponents/palette/ImageColorExtractor/ImageColorExtractor";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Image Color Extractor",
    keywords: [
      "image color extractor",
      "color palette generator",
      "extract colors from image",
      "base64 image color extractor",
      "color extraction tool",
      "web development tools",
      "frontend tools",
      "design tools",
      "color palette",
      "image color analysis",
      "web design",
      "UI design",
    ],
    description:
      "Upload an image to extract colors and generate a color palette using base64 encoding.",
    openGraph: {
      title: "Image Color Extractor",
      description:
        "Upload an image to extract colors and generate a color palette using base64 encoding.",
      type: "website",
    },
    abstract:
      "Image Color Extractor - Upload an image to extract colors and generate a color palette using base64 encoding. Perfect for web developers and designers.",
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
