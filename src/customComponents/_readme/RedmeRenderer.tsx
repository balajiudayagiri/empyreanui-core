// components/RedmeRenderer.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "empyreanui/lib/utils";
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
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={vscDarkPlus as any} // Ensure the correct type for style
      language={match[1]}
      PreTag="div"
      {...props}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
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
