"use client";
import { Clapperboard, Clipboard, ClipboardCopy } from "lucide-react";
import React, { useState } from "react";

interface CopyableCodeProps {
  code: string;
}

const CopyableCode: React.FC<CopyableCodeProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div
      className="inline-flex gap-6 w-fit py-4 px-6 border border-solid border-foreground rounded-lg bg-muted cursor-pointer"
      onClick={handleCopy}>
      <code className="">{code}</code>
      {copied ? <ClipboardCopy className="text-green-500" /> : <Clipboard />}
    </div>
  );
};

export default CopyableCode;
