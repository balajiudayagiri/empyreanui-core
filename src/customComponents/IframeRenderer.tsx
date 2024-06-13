import React, { useEffect, useRef } from "react";

interface IframeRendererProps {
  htmlContent: string;
  cssContent: string;
  cssFramework: string;
}

const IframeRenderer: React.FC<IframeRendererProps> = ({
  htmlContent,
  cssContent,
  cssFramework,
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
        height: "100%",
        border: "1px solid #ccc",
        marginTop: "20px",
      }}></iframe>
  );
};

export default IframeRenderer;
