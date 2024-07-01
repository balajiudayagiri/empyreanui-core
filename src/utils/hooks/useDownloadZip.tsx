import JSZip from "jszip";
import { saveAs } from "file-saver";

export const useDownloadZip = () => {
  const generateHtmlContent = (
    htmlContent: string,
    cssFramework: string,
    hasJsContent: boolean
  ) => {
    const tailwindCdn = `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>`;
    const cssLink = `<link rel="stylesheet" href="./styles.css">`;
    const jsLink = hasJsContent
      ? `<script src="./script.js" defer></script>`
      : "";

    const headContent = `
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${cssFramework === "tailwind" ? tailwindCdn : cssLink}
        ${jsLink}
      </head>
    `;

    return `
      <!DOCTYPE html>
      <html lang="en">
      ${headContent}
      <body>
        ${htmlContent}
      </body>
      </html>
    `;
  };

  const downloadZip = async (
    htmlContent: string,
    cssContent: string,
    jsContent: string,
    cssFramework: string,
    fileName: string
  ) => {
    const zip = new JSZip();

    // Generate HTML content
    const completeHtmlContent = generateHtmlContent(
      htmlContent,
      cssFramework,
      !!jsContent
    );
    zip.file("index.html", completeHtmlContent);

    // If CSS framework is "css", add CSS file
    if (cssFramework === "css") {
      zip.file("styles.css", cssContent);
    }

    // If JavaScript content is provided, add JS file
    if (jsContent) {
      zip.file("script.js", jsContent);
    }

    const sanitizeFileName = (fileName: string) => {
      return fileName.replace(/\s+/g, "_");
    };

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${sanitizeFileName(fileName)}.zip`);
  };

  return { downloadZip };
};
