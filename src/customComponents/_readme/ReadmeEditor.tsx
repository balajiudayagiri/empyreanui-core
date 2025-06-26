"use client";
import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "kodebloxui/components/ui/resizable";
import { snippets } from "./snippits";
import { Download, FileDown, FileText, MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "kodebloxui/components/ui/sheet";
import { Button } from "kodebloxui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "kodebloxui/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { useFetchBlog } from "kodebloxui/apiServices/blogsServices";
import { toast } from "kodebloxui/components/ui/use-toast";
import { Blog } from "../blogs/Blogtypes";
import PostBlogDialog from "../blogs/BlogModal";
import RedmeRenderer from "./RedmeRenderer";
import { readmeTemplates } from "../_readme-templates/readme-templates";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "kodebloxui/components/ui/tabs";
import useReadmeDownload from "./useReadmeDownload";

const ReadmeEditor: React.FC = () => {
  const [markdown, setMarkdown] =
    useState<string>(`# Welcome to the README Editor

You can edit this text to see a live preview of your README file.

`);

  const handleEditorChange = (value: string | undefined) => {
    setMarkdown(value || "");
  };

  const addSnippet = (snippet: string) => {
    setMarkdown((prev) => prev + snippets[snippet]);
  };

  const { postBlog, isLoading } = useFetchBlog();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      toast({
        title: "Warning",
        description:
          "You are leaving without posting your file. This might result in loss of your work.",
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handlePostCode = (data: Blog, closeDialog: () => void) => {
    const postData = {
      ...data,
      data: markdown,
      blogType: "readme",
    };
    postBlog(
      postData,
      (result: string) => {
        toast({
          title: "Hurray",
          description: "Code posted successfully!",
        });
        closeDialog();
        console.info(result);
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

  const handleDownloadMarkdown = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element); // Required for this to work in Firefox
    element.click();
    document.body.removeChild(element);
  };

  // Use the custom hook
  const { downloadPDF, downloadDOCX } = useReadmeDownload(markdown);

  return (
    <div className="relative readme-container min-h-[calc(100dvh-56px)] w-vw mt-14 flex flex-col lg:flex-row">
      <div className="p-1">
        {/* left options */}
        <div className="flex lg:flex-col flex-row items-start gap-2">
          {/* Add Snippet Sheet */}
          <Sheet>
            <TooltipProvider>
              <Tooltip>
                <SheetTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="p-2">
                      <MenuIcon />
                    </Button>
                  </TooltipTrigger>
                </SheetTrigger>
                <TooltipContent side="right">
                  <p>Add Snippit</p>
                  <TooltipArrow className="TooltipArrow" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Select Snippets</SheetTitle>
                <SheetDescription>
                  Make changes to your Readme by clicking on the required
                  snippet in here
                </SheetDescription>
              </SheetHeader>
              <ul className="h-[calc(100dvh-109px)] overflow-y-scroll">
                {Object.keys(snippets).map((snippet) => (
                  <li key={snippet} className="my-2">
                    <Button
                      variant={"ghost"}
                      className="w-full p-2 rounded hover:font-bold hover:bg-primary hover:text-white text-left"
                      onClick={() => addSnippet(snippet)}>
                      {snippet.replace(/([A-Z])/g, " $1").trim()}
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          {/* Select Template Sheet */}
          <Sheet>
            <TooltipProvider>
              <Tooltip>
                <SheetTrigger asChild>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="p-2">
                      <FileText />
                    </Button>
                  </TooltipTrigger>
                </SheetTrigger>
                <TooltipContent side="right">
                  <p>Select Template</p>
                  <TooltipArrow className="TooltipArrow" />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetTitle>Select Templates</SheetTitle>
                <SheetDescription>
                  Add the best premade templates to your README by clicking on
                  the required template from the list below.
                </SheetDescription>
              </SheetHeader>
              <ul className="h-[calc(100dvh-129px)] overflow-y-scroll">
                {Object.values(readmeTemplates).map((template) => (
                  <li key={template.id} className="my-2">
                    <Button
                      variant={"ghost"}
                      className="w-full p-2 rounded hover:font-bold hover:bg-primary hover:text-white text-left"
                      onClick={() => setMarkdown(template.snippets)}>
                      {template.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          {/* Download Buttons */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 flex items-center gap-1 hover:text-indigo-500 hover:bg-indigo-500/20 hover:border-indigo-500"
                  onClick={handleDownloadMarkdown}>
                  <Download />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Download Readme.md</p>
                <TooltipArrow className="TooltipArrow" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Download as PDF */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 flex items-center gap-1 hover:text-red-500 hover:bg-red-500/20 hover:border-red-500"
                  onClick={downloadPDF}>
                  <FileDown />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Download as PDF</p>
                <TooltipArrow className="TooltipArrow" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Download as DOCX */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2 flex items-center gap-1 hover:text-blue-500 hover:bg-blue-500/20 hover:border-blue-500"
                  onClick={downloadDOCX}>
                  <FileDown />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Download as DOCX</p>
                <TooltipArrow className="TooltipArrow" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Post as Blog Button */}
        <PostBlogDialog
          onSubmit={handlePostCode}
          isLoading={isLoading}
          disabled={!markdown}>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold">
            Post this as a Blog
          </Button>
        </PostBlogDialog>
      </div>

      {/* Editor and Preview Panels */}
      <div className="max-md:hidden">
        <ResizablePanelGroup direction="horizontal" className="flex-grow">
          <ResizablePanel defaultSize={50}>
            <Editor
              height="calc(100dvh - 56px)"
              defaultLanguage="markdown"
              value={markdown}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </ResizablePanel>
          <ResizableHandle className="w-1" />
          <ResizablePanel defaultSize={50}>
            <div className="preview p-4 h-[calc(100dvh-56px)] overflow-y-scroll text-black">
              <RedmeRenderer markdown={markdown} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Mobile Tabs for Editor and Preview */}
      <div className="md:hidden">
        <Tabs defaultValue="editor">
          <TabsList className="m-1">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              Editor
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="editor" className="mt-0">
            <Editor
              height="calc(100dvh - 56px)"
              defaultLanguage="markdown"
              value={markdown}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                wordWrap: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />
          </TabsContent>
          <TabsContent value="preview" className="mt-0">
            <div className="preview p-4 h-[calc(100dvh-56px)] overflow-y-scroll text-black">
              <RedmeRenderer markdown={markdown} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadmeEditor;
