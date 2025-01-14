// app/api/generate-pdf/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import puppeteer from "puppeteer";

// Define the POST method handler
export async function POST(request: NextRequest) {
  try {
    const { htmlContent } = await request.json();

    if (!htmlContent) {
      return NextResponse.json(
        { error: "Missing htmlContent in request body." },
        { status: 400 }
      );
    }

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Set the HTML content
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // Generate PDF buffer
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
        right: "0.5in",
      },
    });

    await browser.close();

    // Return the PDF as a response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=README.pdf",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF." },
      { status: 500 }
    );
  }
}
