"use client";
import { Button } from "empyreanui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "empyreanui/components/ui/tabs";
import { Textarea } from "empyreanui/components/ui/textarea";
import { Clipboard, Loader, RefreshCcwIcon, Send, Sparkle } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import RedmeRenderer from "../_readme/RedmeRenderer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "empyreanui/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

type Message = {
  role: string;
  content: string;
};

function ReadmeAi() {
  const [prompt, setPrompt] = useState<string>("");
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Message[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  const handleGenerateReadme = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generateReadme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectDescription: prompt,
          conversation: conversation,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate README");
      }

      const data = await response.json();
      setReadme(data.readme);

      // Update conversation history
      setConversation([
        ...conversation,
        { role: "user", content: prompt },
        { role: "assistant", content: data.readme },
      ]);

      // Clear the input field
      setPrompt("");
    } catch (error) {
      console.error("Error generating README:", error);
      alert("Failed to generate README.");
    }
    setLoading(false);
  };

  const handleStartNewChat = () => {
    setPrompt("");
    setReadme("");
    setConversation([]);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(readme);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow flex flex-col items-center  p-6 pt-16 justify-center overflow-auto mb-16">
        {!readme ? (
          <>
            <h1 className="text-4xl font-extrabold mb-6 flex max-md:flex-col text-center ">
              <span className="text-primary flex mr-2">
                AI <Sparkle className="mx-1" /> README
              </span>{" "}
              Generator
            </h1>
            <p className="text-lg mb-8 text-center">
              Generate a professional README for your project in seconds with
              the power of AI.
            </p>
          </>
        ) : (
          <Tabs defaultValue="rendered" className="w-full pt-5">
            <TabsList className="flex justify-center mb-4  fixed top-16">
              <TabsTrigger value="rendered">Rendered</TabsTrigger>
              <TabsTrigger value="raw">Raw</TabsTrigger>
            </TabsList>
            <TabsContent value="rendered">
              <RedmeRenderer markdown={readme} />
            </TabsContent>
            <TabsContent value="raw">
              <pre className="whitespace-pre-wrap  pt-5">{readme}</pre>
            </TabsContent>
          </Tabs>
        )}
      </div>
      <TooltipProvider>
        <div className="fixed bottom-0 p-1 w-full">
          <div className="mx-auto bg-background flex items-end p-2 border rounded-[32px] shadow-2xl gap-1 lg:w-3/4 max-lg:w-4/5 max-sm:w-full">
            {readme ? (
              // refresh button
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="px-2 size-12 rounded-3xl"
                      variant={"ghost"}
                      onClick={handleStartNewChat}>
                      <RefreshCcwIcon size={18} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Start new Blog</p>
                    <TooltipArrow />
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="px-2 size-12 rounded-3xl"
                      variant={"ghost"}
                      onClick={copyToClipboard}>
                      <Clipboard size={18} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy</p>
                    <TooltipArrow />
                  </TooltipContent>
                </Tooltip>
              </>
            ) : null}
            <div className="grow">
              <Textarea
                ref={textareaRef}
                className="w-full py-4 bg-background placeholder:max-md:text-nowrap border-none rounded-3xl focus:outline-none focus:ring-none transition duration-300 resize-none overflow-hidden"
                rows={1}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="How can we help"
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  onClick={handleGenerateReadme}
                  disabled={loading}
                  className="px-2 size-12 rounded-3xl flex items-center justify-center">
                  {loading ? (
                    <Loader className="animate-spin" size={18} />
                  ) : (
                    <Send className="" size={18} />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate</p>
                <TooltipArrow />
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}

export default ReadmeAi;
