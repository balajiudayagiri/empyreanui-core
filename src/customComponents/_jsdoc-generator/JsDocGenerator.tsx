"use client";
import React, { useEffect, useRef, useState } from "react";
import { getRandomPrompts } from "../_readme-ai/samplePromts";

import { Textarea } from "empyreanui/components/ui/textarea";
import {
  Clipboard,
  Loader,
  MessageSquareDiff,
  RefreshCcwIcon,
  Send,
  Sparkle,
} from "lucide-react";
import RedmeRenderer from "../_readme/RedmeRenderer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "empyreanui/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Button } from "empyreanui/components/ui/button";

type Message = {
  role: string;
  content: string;
};

function JsDocGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [readme, setReadme] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Message[]>([]);
  const [randomPrompts, setRandomPrompts] = useState<string[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.style.overflowY = "scroll";
    }
  }, [prompt]);

  const handleGenerateReadme = async () => {
    setLoading(true);
    setReadme("");
    try {
      const response = await fetch("/api/generateJsDocs", {
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
        throw new Error("Failed to generate JsDoc");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { done, value } = await reader?.read()!;
        if (done) break;
        result += decoder.decode(value);
        setReadme((prev) => prev + decoder.decode(value));
      }

      // Update conversation history
      setConversation([
        ...conversation,
        { role: "user", content: prompt },
        { role: "assistant", content: result },
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

  useEffect(() => {
    setRandomPrompts(getRandomPrompts(4));
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && prompt.trim() !== "") {
      event.preventDefault();
      handleGenerateReadme();
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between lg:w-3/4 mx-auto">
      <div className="flex-grow flex flex-col items-center  p-6 pt-16 justify-center overflow-auto mb-16">
        {!readme ? (
          <>
            <h1 className="text-4xl font-extrabold mb-6 flex max-md:flex-col text-center ">
              <span className="text-primary flex mr-2">
                AI <Sparkle className="mx-1" /> JsDocs
              </span>{" "}
              Generator
            </h1>
            <p className="text-lg mb-8 text-center">
              Generate professional JsDocs for your code in seconds with the
              power of AI.
            </p>
          </>
        ) : (
          <RedmeRenderer markdown={readme} />
        )}
      </div>
      <TooltipProvider>
        <div className="fixed bottom-0 p-1 w-full">
          <div className="bg-background flex items-end p-2 border rounded-[32px] shadow-2xl gap-1 lg:w-3/4 w-full">
            {readme ? (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      className="px-2 size-12 rounded-3xl"
                      variant={"ghost"}
                      onClick={handleStartNewChat}>
                      <MessageSquareDiff size={18} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Start new Readme</p>
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
                className="w-full max-h-72 overflow-y-scroll py-4 bg-background placeholder:max-md:text-nowrap border-none rounded-3xl focus:outline-none focus:ring-none transition duration-300 resize-none overflow-hidden"
                rows={1}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="How can we help"
                onKeyDown={handleKeyDown}
              />
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  onClick={handleGenerateReadme}
                  disabled={loading}
                  className="px-2 size-12 text-primary rounded-3xl flex items-center justify-center">
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

export default JsDocGenerator;
