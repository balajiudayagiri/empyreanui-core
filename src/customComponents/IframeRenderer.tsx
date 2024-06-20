"use client";
import React, { CSSProperties, useEffect, useRef } from "react";

interface IframeRendererProps {
  htmlContent: string;
  cssContent: string;
  cssFramework: string;
  style?: CSSProperties;
}

const IframeRenderer: React.FC<IframeRendererProps> = ({
  htmlContent,
  cssContent,
  cssFramework,
  style,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let cssLink = "";
    if (cssFramework === "tailwind") {
      cssLink = `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>`;
    } else {
      cssLink = `<style>${cssContent}</style>`;
    }

    const iframeContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rendered Content</title>
         <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
            background-image: radial-gradient(circle at center, #00000017 0.1rem, transparent 0), radial-gradient(circle at center, #00000017 0.1rem, transparent 0);
            background-size: 1.3rem 1.3rem;
            background-position: 0 0, 0.6rem 0.6rem;
          }
        </style>
        ${cssLink}
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    iframe.srcdoc = iframeContent;
  }, [htmlContent, cssContent, cssFramework]);

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: "100%",
        minWidth: 320,
        height: "500px",
        border: "1px solid #ccc",
        ...style,
      }}></iframe>
  );
};

export default IframeRenderer;
