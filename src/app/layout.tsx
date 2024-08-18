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
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  creator: "Balaji Udayagiri",
  publisher: "EmpyreanUI",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://empyreanui-core.vercel.app",
    languages: {
      "en-US": "https://empyreanui-core.vercel.app/en",
      "es-ES": "https://empyreanui-core.vercel.app/es",
    },
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
    locale: "en_US",
    images: [
      {
        url: "/public/HomePage.png",
        alt: "EmpyreanUI - The Ultimate UI Library",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EmpyreanUI",
    creator: "@EmpyreanUI",
    title: "EmpyreanUI - The Ultimate UI Library",
    description:
      "Discover the best user-created UI elements including animated components, buttons, cards, loaders, and more with EmpyreanUI.",
    images: [
      {
        url: "/public/HomePage.png",
        alt: "EmpyreanUI - The Ultimate UI Library",
      },
    ],
  },
  verification: {
    google: "1234567890", // Update with actual verification code
    yandex: "1234567890", // Update with actual verification code
  },
  appleWebApp: {
    capable: true,
    title: "EmpyreanUI",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  abstract:
    "EmpyreanUI - The best user-created UI library with AI-powered README and JSDocs generators.",
  archives: ["https://empyreanui-core.vercel.app/archives"],
  assets: ["https://empyreanui-core.vercel.app/assets"],
  bookmarks: ["https://empyreanui-core.vercel.app/bookmarks"],
  category: "Web Development",
  classification: "UI Library",
  // other: {
  //   "theme-color": "#000000", // Customize your theme color
  //   "msapplication-TileColor": "#000000",
  //   "msapplication-config": "/browserconfig.xml", // Add a browser config file if needed
  //   "structured-data": JSON.stringify({
  //     "@context": "https://schema.org",
  //     "@type": "WebSite",
  //     url: "https://empyreanui-core.vercel.app/",
  //     potentialAction: {
  //       "@type": "SearchAction",
  //       target:
  //         "https://empyreanui-core.vercel.app/search?q={search_term_string}",
  //       "query-input": "required name=search_term_string",
  //     },
  //     name: "EmpyreanUI",
  //     description: "The Ultimate UI Library",
  //     mainEntityOfPage: "https://empyreanui-core.vercel.app",
  //     inLanguage: "en-US",
  //     alternateName: "EmpyreanUI - The Ultimate User Interface Library",
  //     keywords: [
  //       "UI library",
  //       "EmpyreanUI",
  //       "animated UI elements",
  //       "web development",
  //     ],
  //     sitelinks: {
  //       "@type": "ItemList",
  //       itemListElement: [
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 1,
  //           name: "Gallery",
  //           url: "https://empyreanui-core.vercel.app/browse",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 2,
  //           name: "Create a Component",
  //           url: "https://empyreanui-core.vercel.app/postcomponent",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 3,
  //           name: "Blogs",
  //           url: "https://empyreanui-core.vercel.app/blogs",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 4,
  //           name: "Readme Editor",
  //           url: "https://empyreanui-core.vercel.app/readme",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 5,
  //           name: "About Us",
  //           url: "https://empyreanui-core.vercel.app/about",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 6,
  //           name: "AI Docs Generator",
  //           url: "https://empyreanui-core.vercel.app/jsdoc-ai",
  //         },
  //         {
  //           "@type": "SiteNavigationElement",
  //           position: 7,
  //           name: "AI Readme Generator",
  //           url: "https://empyreanui-core.vercel.app/readme-ai",
  //         },
  //       ],
  //     },
  //   }),
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
