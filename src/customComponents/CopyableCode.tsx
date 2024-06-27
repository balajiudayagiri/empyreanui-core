"use client";
import { Check, Clapperboard, Clipboard, ClipboardCopy } from "lucide-react";
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
      className="flex gap-6 justify-between py-4 px-6 border border-solid border-foreground rounded-lg bg-muted/30 cursor-pointer mb-5"
      onClick={handleCopy}>
      <code className="">{code}</code>
      {copied ? <Check className="text-green-500" /> : <Clipboard />}
    </div>
  );
};

export default CopyableCode;
