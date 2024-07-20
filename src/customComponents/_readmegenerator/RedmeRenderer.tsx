import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./styles.css";


function RedmeRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="preview w-full">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default RedmeRenderer;
