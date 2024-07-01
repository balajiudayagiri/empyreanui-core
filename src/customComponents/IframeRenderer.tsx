"use client";
import React, { CSSProperties, useEffect, useRef } from "react";

interface IframeRendererProps {
  htmlContent: string;
  cssContent: string;
  jsContent: string;
  cssFramework: string;
  style?: CSSProperties;
}

const IframeRenderer: React.FC<IframeRendererProps> = ({
  htmlContent,
  cssContent,
  jsContent,
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
      cssLink = `<style id="custom-css">${cssContent}</style>`;
    }

    const iframeContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rendered Content</title>
        ${cssLink}
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
      </head>
      <body>
        <div id="root">${htmlContent}</div>
        <script>${jsContent}</script>
      </body>
      </html>
    `;

    iframe.srcdoc = iframeContent;
  }, [cssFramework]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const updateContent = () => {
      const iframeDoc =
        iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        const rootElement = iframeDoc.getElementById("root");
        const customCss = iframeDoc.getElementById("custom-css");
        const customScript = iframeDoc.querySelector("script");

        if (rootElement) {
          rootElement.innerHTML = htmlContent;
        }

        if (customCss) {
          customCss.innerHTML = cssContent;
        }

        if (customScript) {
          customScript.innerHTML = jsContent;
        }
      }
    };

    updateContent();
  }, [htmlContent, cssContent, jsContent]);

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
