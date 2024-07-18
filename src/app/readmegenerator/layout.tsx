import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Readme Editor",
  description: "Edit your README files with ease using the Readme Editor.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Readme, Editor, React, Next.js, EmpyreanUI",
  authors: [{ name: "Balaji Udayagiri" }],
};

export default function ReadmeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
