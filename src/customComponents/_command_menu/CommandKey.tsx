"use client";
import React, { useState, useEffect } from "react";

const CommandKey: React.FC = () => {
  // State to determine if the user is on a Mac
  const [isMac, setIsMac] = useState<boolean>(false);

  useEffect(() => {
    // Detect the user's platform
    const platform = navigator.platform.toLowerCase();
    setIsMac(platform.includes("mac"));
  }, []);

  return (
    <kbd className="group-hover:text-primary max-sm:hidden pointer-events-none inline-flex bg-primary/10 h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 mr-2">
      <span className="text-xs">{isMac ? "⌘" : "Ctrl"} + &#47;</span>
    </kbd>
  );
};

export default CommandKey;
