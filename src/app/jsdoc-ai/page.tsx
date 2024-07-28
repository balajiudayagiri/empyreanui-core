import JsDocGenerator from "empyreanui/customComponents/_jsdoc-generator/JsDocGenerator";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata() {
  return {
    title: "AI JSDoc Generator | Empyrean UI",
    description:
      "Generate JSDoc documentation effortlessly with our AI-powered tool.",
    keywords: [
      "AI JSDoc Generator",
      "JSDoc documentation",
      "Empyrean UI",
      "JavaScript documentation",
      "automated JSDoc",
      "AI documentation tool",
      "developer tools",
      "JSDoc generator",
      "code comments generator",
      "software documentation",
      "project documentation",
      "JSDoc creator",
      "AI-powered generator",
      "open source JSDoc",
      "documentation automation",
      "JSDoc templates",
      "developer productivity",
      "coding tools",
      "software project setup",
      "JSDoc examples",
      "Empyrean UI tools",
      "AI-driven documentation",
      "code documentation generator",
      "automated project setup",
      "JSDoc best practices",
      "AI for developers",
      "intelligent JSDoc generator",
      "JSDoc generator tool",
      "AI documentation generator",
      "automatic JSDoc creation",
      "smart JSDoc tool",
      "JSDoc generation service",
      "effortless JSDoc creation",
      "professional JSDoc documentation",
      "seamless JSDoc generation",
      "quick JSDoc setup",
      "customizable JSDoc generator",
      "efficient documentation tool",
      "advanced JSDoc generator",
      "AI-powered documentation",
      "easy JSDoc tool",
      "comprehensive JSDoc generator",
      "smart project documentation",
      "AI project documentation",
      "AI-powered JSDoc setup",
      "JSDoc generation software",
      "tech documentation tool",
      "JSDoc tool for developers",
    ],
    author: "Balaji Udayagiri",
    openGraph: {
      title: "AI JSDoc Generator | Empyrean UI",
      description:
        "Generate JSDoc documentation effortlessly with our AI-powered tool.",
      type: "website",
    },
  };
}

function Page() {
  return <JsDocGenerator />;
}

export default Page;
