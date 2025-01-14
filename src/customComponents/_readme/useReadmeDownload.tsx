// hooks/useReadmeDownload.ts

"use client";

import { useCallback } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { saveAs } from "file-saver";
import htmlDocx from "html-docx-js/dist/html-docx";

const useReadmeDownload = (markdown: string) => {
  const MAX_MARKDOWN_LENGTH = 10000; // Adjust as needed

  // Function to convert Markdown to sanitized HTML
  const convertMarkdownToHtml = useCallback((): string => {
    const rawHtml = marked.parse(markdown); // Use marked.parse for synchronous parsing
    const sanitizedHtml = DOMPurify.sanitize(rawHtml as string | Node);
    return sanitizedHtml;
  }, [markdown]);

  // Function to download as PDF via server
  const downloadPDF = useCallback(async (): Promise<void> => {
    if (markdown.length > MAX_MARKDOWN_LENGTH) {
      alert(
        "Your README is too long to generate a PDF. Please shorten it and try again."
      );
      return;
    }

    const sanitizedHtml = convertMarkdownToHtml();

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ htmlContent: sanitizedHtml }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      saveAs(blob, "README.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  }, [convertMarkdownToHtml, markdown.length]);

  // Function to download as DOCX
  const downloadDOCX = useCallback((): void => {
    const sanitizedHtml = convertMarkdownToHtml();
    const converted = htmlDocx.asBlob(sanitizedHtml);
    saveAs(converted, "README.docx");
  }, [convertMarkdownToHtml]);

  return { downloadPDF, downloadDOCX };
};

export default useReadmeDownload;
