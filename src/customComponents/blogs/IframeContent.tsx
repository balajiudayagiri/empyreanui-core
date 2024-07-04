import { cn } from "empyreanui/lib/utils";
import React, { useEffect, useRef } from "react";

interface IframeContentProps {
  content: string;
  className?: string;
}

const IframeContent: React.FC<IframeContentProps> = ({
  content,
  className,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && iframeRef.current) {
      const doc =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <style>
            * {
              scrollbar-width: thin;
            }
            ::-webkit-scrollbar {
              width: 0;
              height: 0;
            }

            pre.ql-syntax {
              border-radius: 5px;
              white-space: pre-wrap !important;
              margin-bottom: 5px !important;
              margin-top: 5px !important;
              padding: 5px 10px !important;
              background-color: #23241f;
              color: #f8f8f2;
              overflow: visible;
            }
            body {
              border: none;
            }
          </style>
          <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css" />
          ${content}
        `);
        doc.body.className = "ql-editor ql-container ql-snow";
        doc.close();
      }
    }
  }, [content]);

  return (
    <iframe
      ref={iframeRef}
      className={cn("w-full h-[calc(100dvh-300px)]", className)}
    />
  );
};

export default IframeContent;
