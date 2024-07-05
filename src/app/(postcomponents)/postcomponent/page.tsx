import React from "react";
import { Metadata } from "next";
import { EditorExporter } from "empyreanui/customComponents";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Create a Component",
    description:
      "Create HTML elements using CSS, Tailwind CSS, and JavaScript with our easy-to-use editor.",
    openGraph: {
      title: "Create a Component",
      description:
        "Create HTML elements using CSS, Tailwind CSS, and JavaScript with our easy-to-use editor.",
      type: "website",
    },
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
