import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "empyreanui/components/ui/theme-provider";
import Header from "./Header";
import { cn } from "empyreanui/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "empyreanui/components/ui/toaster";

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
      <body className={cn(montserrat.className, "relative")}>
        <SpeedInsights />
        <div className="fixed inset-0 z-[-1] overflow-hidden h-dvh">
          <div className="absolute w-96 h-96 bg-yellow-200 opacity-10 rounded-full -top-20 -left-20 transform rotate-45"></div>
          <div className="absolute w-96 h-96 bg-yellow-200 opacity-10 rounded-full -bottom-20 -right-20 transform rotate-45"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
