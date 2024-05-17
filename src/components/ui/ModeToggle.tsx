"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@components/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      onClick={toggleTheme}
      className={`size-5 border-none bg-background p-0 text-foreground shadow-none transition-all hover:-rotate-90 hover:bg-background focus-visible:ring-0`}>
      <Moon className="size-[1.2rem] scale-0 dark:scale-100" />
      <Sun className="absolute size-[1.2rem] scale-100 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
