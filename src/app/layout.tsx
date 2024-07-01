import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "empyreanui/components/ui/theme-provider";
import Header from "./Header";
import { cn } from "empyreanui/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "empyreanui/components/ui/toaster";
import Footer from "./Footer";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
