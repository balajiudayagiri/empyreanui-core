import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "empyreanui/components/ui/theme-provider";
import Header from "./Header";
import { cn } from "empyreanui/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(inter.className, "relative")}>
        <div className="absolute inset-0 z-[-1] overflow-hidden">
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
      </body>
    </html>
  );
}
