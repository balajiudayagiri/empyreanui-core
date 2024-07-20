"use client";
import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "empyreanui/components/ui/resizable";
import { snippets } from "./snippits";
import { Download, MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { Button } from "empyreanui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "empyreanui/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { useFetchBlog } from "empyreanui/apiServices/blogsServices";
import { toast } from "empyreanui/components/ui/use-toast";
import { Blog } from "../blogs/Blogtypes";
import PostBlogDialog from "../blogs/BlogModal";
import RedmeRenderer from "./RedmeRenderer";

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
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([markdown], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="relative readme-container min-h-[calc(100dvh-56px)] w-vw mt-14 flex flex-col lg:flex-row">
      <div className="p-1">
        {/* left options */}
        <div className="flex lg:flex-col flex-row items-start gap-2">
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
                <SheetTitle>Select snippits</SheetTitle>
                <SheetDescription>
                  Make changes to your Readme by clicking on the required
                  snippit in here
                </SheetDescription>
              </SheetHeader>
              <ul className="h-[calc(100dvh-200px)] overflow-y-scroll">
                {Object.keys(snippets).map((snippet) => (
                  <li key={snippet} className="my-2">
                    <button
                      className="w-full text-white p-2 rounded hover:bg-primary hover:text-black hover:font-bold text-left"
                      onClick={() => addSnippet(snippet)}>
                      {snippet.replace(/([A-Z])/g, " $1").trim()}
                    </button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="p-2"
                  onClick={handleDownload}>
                  <Download />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Download Readme.md</p>
                <TooltipArrow className="TooltipArrow" />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <PostBlogDialog
          onSubmit={handlePostCode}
          isLoading={isLoading}
          disabled={!markdown}>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold">
            post this as a blog
          </Button>
        </PostBlogDialog>
      </div>
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
  );
};

export default ReadmeEditor;
