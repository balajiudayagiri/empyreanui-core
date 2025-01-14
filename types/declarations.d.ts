// types/declarations.d.ts

declare module "html2pdf.js" {
  const html2pdf: any;
  export default html2pdf;
}

declare module "html-docx-js/dist/html-docx" {
  interface HtmlDocx {
    asBlob(html: string): Blob;
    asBase64(html: string): string;
    asString(html: string): string;
  }

  const htmlDocx: HtmlDocx;

  export default htmlDocx;
}
