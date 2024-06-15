"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "empyreanui/components/ui/use-toast";
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
import { CSSICON, Html5ColoredIcon } from "empyreanui/customComponents";

interface EditorRendererProps {
  initialCssFramework?: string;
  initialHtmlContent?: string;
  initialCssContent?: string;
  initialIsHorizontal?: boolean;
}

const ViewEditorRenderer: React.FC<EditorRendererProps> = ({
  initialCssFramework = "tailwind",
  initialHtmlContent = "",
  initialCssContent = "",
  initialIsHorizontal = true,
}) => {
  const [cssFramework] = useState(initialCssFramework);
  const [htmlContent, setHtmlContent] = useState(initialHtmlContent);
  const [cssContent, setCssContent] = useState(initialCssContent);
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
      <ResizablePanelGroup
        direction={isHorizontal ? "horizontal" : "vertical"}
        className="lg:min-h-[500px] min-h-[calc(100dvh-10px)]">
        <ResizablePanel
          defaultSize={50}
          className="border rounded-lg bg-background">
          <IframeRenderer
            htmlContent={htmlContent}
            cssContent={cssContent}
            cssFramework={cssFramework}
            style={{ height: "100%" }}
          />
        </ResizablePanel>
        <ResizableHandle withHandle className="mx-2 border-2" />
        <ResizablePanel defaultSize={50} className="border rounded-lg">
          <Tabs defaultValue="html">
            <TabsList className="m-1">
              <TabsTrigger value="html">
                <Html5ColoredIcon height={16} width={16} /> <span>HTML</span>
              </TabsTrigger>
              {cssFramework === "css" && (
                <TabsTrigger value="css" className="flex items-center gap-2">
                  <CSSICON size={16} /> <span>CSS</span>
                </TabsTrigger>
              )}
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
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ViewEditorRenderer;
