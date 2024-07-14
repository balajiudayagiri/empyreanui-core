import JSZip from "jszip";
import { saveAs } from "file-saver";

/**
 * Custom hook to generate and download a ZIP file containing HTML, CSS, and JavaScript files.
 *
 * This hook provides functionality to create a ZIP file with provided HTML, CSS, and JavaScript
 * content. It generates the HTML file with necessary links to CSS and JS based on the provided
 * framework and content. The ZIP file can be downloaded with a specified file name.
 *
 * @function
 * @returns {Object} - An object containing the `downloadZip` function.
 */
export const useDownloadZip = () => {
  /**
   * Generates the complete HTML content with provided HTML, CSS, and JS links.
   *
   * @param {string} htmlContent - The HTML content to be included in the file.
   * @param {string} cssFramework - The CSS framework to be used ("css" or "tailwind").
   * @param {boolean} hasJsContent - Flag indicating if JavaScript content is present.
   * @returns {string} - The complete HTML content with necessary links.
   */
  const generateHtmlContent = (
    htmlContent: string,
    cssFramework: string,
    hasJsContent: boolean
  ): string => {
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

  /**
   * Generates and downloads a ZIP file containing the provided HTML, CSS, and JavaScript content.
   *
   * @param {string} htmlContent - The HTML content to be included in the ZIP file.
   * @param {string} cssContent - The CSS content to be included in the ZIP file.
   * @param {string} jsContent - The JavaScript content to be included in the ZIP file.
   * @param {string} cssFramework - The CSS framework to be used ("css" or "tailwind").
   * @param {string} fileName - The name of the ZIP file to be downloaded.
   * @returns {Promise<void>} - A promise that resolves when the ZIP file has been generated and downloaded.
   */
  const downloadZip = async (
    htmlContent: string,
    cssContent: string,
    jsContent: string,
    cssFramework: string,
    fileName: string
  ): Promise<void> => {
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

    const sanitizeFileName = (fileName: string): string => {
      return fileName.replace(/\s+/g, "_");
    };

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, `${sanitizeFileName(fileName)}.zip`);
  };

  return { downloadZip };
};
