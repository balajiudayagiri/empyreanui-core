import React from "react";
import { Metadata } from "next";
import { EditorExporter } from "kodebloxui/customComponents";

export async function generateMetadata(): Promise<Metadata> {
  return {
    authors: [{ name: "Balaji Udayagiri" }],
    title: "Create a Component",
    keywords: [
      "create a component",
      "HTML elements",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "web design",
      "UI design",
      "frontend development",
      "web development tools",
      "component editor",
      "design tools",
      "web components",
    ],
    description:
      "Create HTML elements using CSS, Tailwind CSS, and JavaScript with our easy-to-use editor.",
    openGraph: {
      title: "Create a Component",
      description:
        "Create HTML elements using CSS, Tailwind CSS, and JavaScript with our easy-to-use editor.",
      type: "website",
    },
    abstract:
      "Create a Component - Create HTML elements using CSS, Tailwind CSS, and JavaScript with our easy-to-use editor. Perfect for web designers and developers.",
  };
}

function page() {
  return (
    <div className="lg:mx-9 mt-14">
      <EditorExporter />
    </div>
  );
}

export default page;
