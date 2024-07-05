import { cn } from "empyreanui/lib/utils";
import React, { CSSProperties, useEffect, useRef } from "react";

interface IframeContentProps {
  content: string;
  className?: string;
  style?: CSSProperties;
}

const IframeContent: React.FC<IframeContentProps> = ({
  content,
  className,
  style,
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
              scrollbar-width: none;
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
              border: none !important;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          </style>
          <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css" />
          ${content}
          <script>
            function sendHeight() {
              window.parent.postMessage({
                type: 'resize',
                height: document.body.scrollHeight
              }, '*');
            }
            const observer = new MutationObserver(sendHeight);
            observer.observe(document.body, { childList: true, subtree: true });
            window.onload = sendHeight;
          </script>
        `);
        doc.body.className = "ql-editor ql-container ql-snow";
        doc.close();
      }
    }
  }, [content]);

  return (
    <iframe
      ref={iframeRef}
      className={cn("w-full border-none", className)}
      sandbox="allow-same-origin allow-scripts"
      style={style}
    />
  );
};

export default IframeContent;
