"use client";
import { Button } from "empyreanui/components/ui/button";
import React, { useEffect, useState } from "react";
import { usePostCode } from "@apiservices";
import { useToast } from "empyreanui/components/ui/use-toast";
import PostCodeDialog, {
  PostData,
} from "./PostCodeDialog"; // Adjust the import path as needed
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
import { CodeXml } from "lucide-react";

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
          description: "Code posted successfully!" + result,
        });
        closeDialog();
        console.log(result);
      },
      (error: string) => {
        toast({
          title: "Failed to post code",
          description: error,
        });
        console.error(error);
      }
    );
  };

  return (
    <div className="">
      <h1>Editor and Renderer</h1>
      <nav className="border border-solid">
        <Select onValueChange={(e) => setCssFramework(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultValue={cssFramework} placeholder="Tailwind" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tailwind">Tailwind</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
          </SelectContent>
        </Select>
      </nav>
      <ResizablePanelGroup
        direction={isHorizontal ? "horizontal" : "vertical"}
        className="w-full rounded-lg border min-h-[500px]">
        <ResizablePanel defaultSize={50}>
          <IframeRenderer
            htmlContent={htmlContent}
            cssContent={cssContent}
            cssFramework={cssFramework}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Tabs defaultValue="html">
            <TabsList>
              <TabsTrigger value="html">
                <CodeXml className="text-current w-10" /> HTML
              </TabsTrigger>
              {cssFramework === "css" && (
                <TabsTrigger value="css">CSS</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="html">
              <div className="w-full mt-2">
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
              <TabsContent value="css">
                <div className="w-full mt-2">
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
      <PostCodeDialog onSubmit={handlePostCode} isLoading={isLoading} />
    </div>
  );
};

export default EditorRenderer;
