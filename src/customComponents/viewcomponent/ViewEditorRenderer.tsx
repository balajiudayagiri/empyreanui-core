"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "empyreanui/components/ui/resizable";
import IframeRenderer from "empyreanui/customComponents/IframeRenderer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "empyreanui/components/ui/tabs";
import { CSSICON, Html5ColoredIcon, JSIcon } from "empyreanui/customComponents";

interface EditorRendererProps {
  initialCssFramework?: string;
  initialHtmlContent?: string;
  initialCssContent?: string;
  initialJsContent?: string;
  initialIsHorizontal?: boolean;
}

const ViewEditorRenderer: React.FC<EditorRendererProps> = ({
  initialCssFramework = "tailwind",
  initialHtmlContent = "",
  initialCssContent = "",
  initialJsContent = "",
  initialIsHorizontal = true,
}) => {
  const [cssFramework] = useState(initialCssFramework);
  const [htmlContent, setHtmlContent] = useState(initialHtmlContent);
  const [cssContent, setCssContent] = useState(initialCssContent);
  const [jsContent, setJsContent] = useState(initialJsContent);
  const [isHorizontal, setIsHorizontal] = useState(initialIsHorizontal);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsHorizontal(false);
      } else {
        setIsHorizontal(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div className="hidden md:block">
        <ResizablePanelGroup
          direction={isHorizontal ? "horizontal" : "vertical"}
          className="min-h-[500px]">
          <ResizablePanel defaultSize={50} className="border rounded-lg">
            <IframeRenderer
              htmlContent={htmlContent}
              cssContent={cssContent}
              jsContent={jsContent}
              cssFramework={cssFramework}
              style={{ height: "100%" }}
            />
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-2 border-2" />
          <ResizablePanel defaultSize={50} className="border rounded-lg">
            <Tabs defaultValue="html">
              <TabsList className="m-1">
                <TabsTrigger value="html" className="flex items-center gap-2">
                  <Html5ColoredIcon height={16} width={16} /> <span>HTML</span>
                </TabsTrigger>
                {cssFramework === "css" && (
                  <TabsTrigger value="css" className="flex items-center gap-2">
                    <CSSICON size={16} /> <span>CSS</span>
                  </TabsTrigger>
                )}
                <TabsTrigger value="js" className="flex items-center gap-2">
                  <JSIcon size={16} /> <span>JavaScript</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="mt-0">
                <div className="w-full mt-0">
                  <Editor
                    height="500px"
                    defaultLanguage="html"
                    value={htmlContent}
                    onChange={(value) => setHtmlContent(value || "")}
                    theme="vs-dark"
                  />
                </div>
              </TabsContent>
              {cssFramework === "css" && (
                <TabsContent value="css" className="mt-0">
                  <div className="w-full mt-0">
                    <Editor
                      height="500px"
                      defaultLanguage="css"
                      value={cssContent}
                      onChange={(value) => setCssContent(value || "")}
                      theme="vs-dark"
                    />
                  </div>
                </TabsContent>
              )}
              <TabsContent value="js" className="mt-0">
                <div className="w-full mt-0">
                  <Editor
                    height="500px"
                    defaultLanguage="javascript"
                    value={jsContent}
                    onChange={(value) => setJsContent(value || "")}
                    theme="vs-dark"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="md:hidden block">
        <Tabs defaultValue="preview" className="w-vw h-[calc(100dvh-224px)]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="h-[calc(100dvh-224px)]">
            <IframeRenderer
              htmlContent={htmlContent}
              cssContent={cssContent}
              jsContent={jsContent}
              cssFramework={cssFramework}
              style={{ height: "100%" }}
            />
          </TabsContent>
          <TabsContent value="code" className="h-[calc(100dvh-224px)]">
            <Tabs defaultValue="html">
              <TabsList className="m-1">
                <TabsTrigger value="html" className="flex items-center gap-2">
                  <Html5ColoredIcon height={16} width={16} /> <span>HTML</span>
                </TabsTrigger>
                {cssFramework === "css" && (
                  <TabsTrigger value="css" className="flex items-center gap-2">
                    <CSSICON size={16} /> <span>CSS</span>
                  </TabsTrigger>
                )}
                <TabsTrigger value="js" className="flex items-center gap-2">
                  <JSIcon size={16} /> <span>JavaScript</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="mt-0">
                <div className="w-full mt-0">
                  <Editor
                    height="calc(100dvh - 272px)"
                    defaultLanguage="html"
                    value={htmlContent}
                    onChange={(value) => setHtmlContent(value || "")}
                    theme="vs-dark"
                  />
                </div>
              </TabsContent>
              {cssFramework === "css" && (
                <TabsContent value="css" className="mt-0">
                  <div className="w-full mt-0">
                    <Editor
                      height="calc(100dvh - 272px)"
                      defaultLanguage="css"
                      value={cssContent}
                      onChange={(value) => setCssContent(value || "")}
                      theme="vs-dark"
                    />
                  </div>
                </TabsContent>
              )}
              <TabsContent value="js" className="mt-0">
                <div className="w-full mt-0">
                  <Editor
                    height="calc(100dvh - 272px)"
                    defaultLanguage="javascript"
                    value={jsContent}
                    onChange={(value) => setJsContent(value || "")}
                    theme="vs-dark"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ViewEditorRenderer;
