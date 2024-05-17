import { ModeToggle } from "empyreanui/components/ui/ModeToggle";
import Link from "next/link";
import React from "react";
import { Sacramento } from "next/font/google";
import { cn } from "empyreanui/lib/utils";

const sacramento = Sacramento({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancingScript",
  weight: ["400"],
});

function Header() {
  return (
    <header className="h-20 border-b flex items-center px-9 justify-between">
      <Link href="/">
        <h1
          className={cn(
            sacramento.className,
            "font-thin md:text-3xl text-nowrap flex items-center gap-3 text-2xl"
          )}>
          EmpyreanUi
        </h1>
      </Link>
      <div className="flex gap-5">
        <Link href="/" className="hover:bg-muted px-6 py-3 rounded-lg">
          <h1>Home</h1>
        </Link>
        <Link href="/core" className="hover:bg-muted px-6 py-3 rounded-lg">
          Explore Components
        </Link>
      </div>
      <ModeToggle />
    </header>
  );
}

export default Header;
