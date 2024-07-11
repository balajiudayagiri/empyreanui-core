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
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">

          <style>
            * {
              scrollbar-width: none;
            }
            ::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
            .ql-container img {
              width: 75%;
              margin: 0px auto;
              display: flex;
              justify-content: center;
            }
              .ql-snow .ql-editor img{
              max-width: 75%;
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
              .ql-container-fonts{
                line-height: 2 !important;
              
              }
             /* General styling for the blog container */
.blog-container {
  font-family: 'Roboto', sans-serif !important;
  line-height: 1.8 !important;
  color: #2c3e50 !important;
  padding: 20px !important;
  max-width: 800px !important;
  margin: 0 auto !important;
  background: #f9f9f9 !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
}

/* Headings styling */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700 !important;
  margin-top: 1.5em !important;
  margin-bottom: 0.5em !important;
  line-height: 1.2 !important;
  color: #34495e !important;
}

h1 {
  font-size: 2.5em !important;
  border-bottom: 2px solid #ecf0f1 !important;
  padding-bottom: 0.3em !important;
}

h2 {
  font-size: 2em !important;
  border-bottom: 1px solid #ecf0f1 !important;
  padding-bottom: 0.2em !important;
}

h3 {
  font-size: 1.75em !important;
}

h4 {
  font-size: 1.5em !important;
}

h5 {
  font-size: 1.25em !important;
}

h6 {
  font-size: 1em !important;
}

/* Paragraph styling */
p {
  margin-bottom: 1.5em !important;
  color: #444 !important;
  font-size: 1.1em !important;
  text-align: justify !important;
}

/* Preformatted text styling */
pre {
  font-family: 'Fira Code', monospace !important;
  background: #272822 !important;
  color: #f8f8f2 !important;
  border-left: 5px solid #3498db !important;
  padding: 15px !important;
  overflow-x: auto !important;
  font-size: 0.95em !important;
  border-radius: 5px !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1) !important;
}

/* Inline code styling */
code {
  background: #f4f4f4 !important;
  padding: 2px 6px !important;
  border-radius: 4px !important;
  font-family: 'Courier New', Courier, monospace !important;
  font-size: 0.95em !important;
  color: #e74c3c !important;
}

/* Blockquote styling */
blockquote {
  margin: 1.5em 10px !important;
  padding: 1em 10px !important;
  border-left: 5px solid #16a085 !important;
  background: #ecf0f1 !important;
  color: #555 !important;
  font-style: italic !important;
  quotes: "“" "”" "‘" "’" !important;
}

blockquote:before {
  content: open-quote !important;
  font-size: 2em !important;
  line-height: 0.1em !important;
  margin-right: 10px !important;
  vertical-align: -0.4em !important;
  color: #16a085 !important;
}

blockquote:after {
  content: close-quote !important;
}

/* Links styling */
a {
  color: #2980b9 !important;
  text-decoration: none !important;
  border-bottom: 1px solid #2980b9 !important;
}

a:hover {
  color: #1abc9c !important;
  border-bottom: 1px solid #1abc9c !important;
}

/* Lists styling */
ul, ol {
  margin: 1em 0 !important;
  padding: 0 1em !important;
  color: #555 !important;
}

li {
  margin: 0.5em 0 !important;
  line-height: 1.5 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 2em !important;
  }

  h2 {
    font-size: 1.75em !important;
  }

  h3 {
    font-size: 1.5em !important;
  }

  h4 {
    font-size: 1.25em !important;
  }

  h5 {
    font-size: 1em !important;
  }

  h6 {
    font-size: 0.875em !important;
  }
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
        doc.body.className =
          "ql-editor ql-container ql-snow ql-container-fonts";
        doc.close();
      }
    }
  }, [content]);

  return (
    <iframe
      ref={iframeRef}
      className={cn("w-full border-none h-full", className)}
      sandbox="allow-same-origin allow-scripts"
      style={style}
    />
  );
};

export default IframeContent;
