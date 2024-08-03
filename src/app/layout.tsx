import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import { cn } from "empyreanui/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "empyreanui/components/ui/toaster";
import Footer from "./Footer";
import { NextThemesProviders } from "empyreanui/Providers/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EmpyreanUI - The Ultimate UI Library",
    template: "%s | EmpyreanUI",
  },
  description:
    "Discover the best user-created UI elements including animated components, buttons, cards, loaders, and more with EmpyreanUI. Generate READMEs and JSDocs with AI, explore our extensive color and gradient palettes, and use our image color extractor and gradient generator.",
  applicationName: "EmpyreanUI",
  authors: [{ name: "Balaji Udayagiri" }, { name: "EmpyreanUI Team" }],
  generator: "Next.js",
  keywords: [
    "UI library",
    "EmpyreanUI",
    "animated UI elements",
    "UI components",
    "README generator",
    "AI JSDocs generator",
    "color palette",
    "gradient palette",
    "image color extractor",
    "gradient generator",
    "web development",
    "front-end development",
    "JavaScript",
    "React",
  ],
  referrer: "origin",
  viewport: "width=device-width, initial-scale=1",
  creator: "Balaji Udayagiri",
  publisher: "EmpyreanUI",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://empyreanui-core.vercel.app",
  },
  icons: {
    icon: [
      { url: "/public/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/public/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [
      {
        url: "/public/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "https://empyreanui-core.vercel.app/manifest.json",
  openGraph: {
    type: "website",
    url: "https://empyreanui-core.vercel.app",
    title: "EmpyreanUI - The Ultimate UI Library",
    description:
      "Discover the best user-created UI elements including animated components, buttons, cards, loaders, and more with EmpyreanUI.",
    siteName: "EmpyreanUI",
    images: [
      {
        url: "/seo/HomePage.png", // Path to the image in your public folder
        alt: "EmpyreanUI - The Ultimate UI Library",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@EmpyreanUI",
  //   creator: "@EmpyreanUI",
  //   title: "EmpyreanUI - The Ultimate UI Library",
  //   description:
  //     "Discover the best user-created UI elements including animated components, buttons, cards, loaders, and more with EmpyreanUI.",
  //   images: ["/public/seo/HomePage.png"],
  // },
  // verification: {
  //   google: "1234567890",
  //   yandex: "1234567890",
  // },
  appleWebApp: {
    capable: true,
    title: "EmpyreanUI",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "EmpyreanUI - The best user-created UI library with AI-powered README and JSDocs generators.",
  archives: ["https://empyreanui-core.vercel.app/archives"],
  assets: ["https://empyreanui-core.vercel.app/assets"],
  bookmarks: ["https://empyreanui-core.vercel.app/bookmarks"],
  category: "Web Development",
  classification: "UI Library",
  // other: {
  //   customMeta: "Custom Meta Value",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          sizes="192x192"
          type="image/png"
        />
        <link
          rel="icon"
          href="/android-chrome-512x512.png"
          sizes="512x512"
          type="image/png"
        />
      </head>
      <body className={cn(montserrat.className, "h-dvh")}>
        <SpeedInsights />
        <NextThemesProviders>
          <Header />
          {children}
          <Footer />
        </NextThemesProviders>
        <Toaster />
      </body>
    </html>
  );
}
