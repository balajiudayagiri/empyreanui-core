"use client";
import React, { useEffect, useState } from "react";
import { usePostCode } from "@apiservices";
import { useToast } from "empyreanui/components/ui/use-toast";
import PostCodeDialog, { PostData } from "./PostCodeDialog"; // Adjust the import path as needed
import { Editor } from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "empyreanui/components/ui/select";
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

const EditorRenderer: React.FC = () => {
  const [cssFramework, setCssFramework] = useState("tailwind");
  const [htmlContent, setHtmlContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [isHorizontal, setIsHorizontal] = useState(true);

  const { postCode, isLoading } = usePostCode();
  const { toast } = useToast();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      toast({
        title: "Warning",
        description:
          "You are leaving without posting your code. This might result in loss of your work.",
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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

  const handlePostCode = (data: PostData, closeDialog: () => void) => {
    const postData = {
      ...data,
      code: {
        styleType: cssFramework,
        htmlCode: htmlContent,
        cssCode: cssFramework === "css" ? cssContent : "",
        tailwindCode: cssFramework === "tailwind" ? htmlContent : "",
      },
    };

    postCode(
      postData,
      (result: string) => {
        toast({
          title: "Hurray",
          description: "Code posted successfully!",
        });
        closeDialog();
        console.log(result);
      },
      (error: string) => {
        toast({
          title: "Failed!",
          description: "Failed to post code" + error,
        });
        console.error(error);
      }
    );
  };
  const handlesetCssFramework = (value: string) => {
    setCssFramework(value);
    setCssContent("");
    setHtmlContent("");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-black mb-4 text-center text-primary">
        Editor
      </h1>
      <nav className="flex justify-end mb-4 gap-4">
        <Select onValueChange={handlesetCssFramework}>
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultValue={cssFramework} placeholder="Tailwind" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tailwind">Tailwind</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
          </SelectContent>
        </Select>
        <PostCodeDialog
          onSubmit={handlePostCode}
          isLoading={isLoading}
          disabled={!htmlContent.trim()}
        />
      </nav>
      <ResizablePanelGroup
        direction={isHorizontal ? "horizontal" : "vertical"}
        className="min-h-[500px]">
        <ResizablePanel defaultSize={50} className="border rounded-lg">
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
              <TabsTrigger value="html" className="flex items-center gap-2">
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

export default EditorRenderer;
