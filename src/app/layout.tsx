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
  title: "EmpyreanUi",
  description: "EmpyreanUi best UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
