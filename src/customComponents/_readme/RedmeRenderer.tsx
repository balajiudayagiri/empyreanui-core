"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "kodebloxui/lib/utils";
import { Button } from "kodebloxui/components/ui/button";
import { Clipboard } from "lucide-react";
import "./styles.css"; // Make sure this path is correct for your project

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeProps> = ({
  inline,
  className,
  children,
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");

  const handleCopy = () => {
    navigator.clipboard.writeText(String(children)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return !inline && match ? (
    <div className="relative">
      <Button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 text-white py-1 px-2 h-fit rounded text-xs"
        style={{ zIndex: 1 }}>
        {copied ? "Copied" : <Clipboard size={12} />}
      </Button>
      <SyntaxHighlighter
        style={vscDarkPlus as any} // Ensure the correct type for style
        language={match[1]}
        PreTag="div"
        {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={cn("rounded-xl", className)} {...props}>
      {children}
    </code>
  );
};

const RedmeRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <div className="preview w-full">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock as any,
        }}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default RedmeRenderer;
