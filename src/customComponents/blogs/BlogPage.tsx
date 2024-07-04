"use client";
import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import IframeContent from "./IframeContent";
import { Button } from "empyreanui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "empyreanui/components/ui/tabs";

import { useFetchBlog } from "empyreanui/apiServices/blogsServices";
import { toast } from "empyreanui/components/ui/use-toast";
import { Blog } from "./Blogtypes";
import PostBlogDialog from "./BlogModal";
import { cn } from "empyreanui/lib/utils";

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("editor");
  const { postBlog, isLoading } = useFetchBlog();
  const addBlog = (content: string) => {
    setBlogs(content);
  };

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

  const handlePostCode = (data: Blog, closeDialog: () => void) => {
    const postData = {
      ...data,
      data: blogs,
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

  return (
    <div className="container mx-auto p-4">
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold mb-4">Publish your Blogs</h1>
          <PostBlogDialog
            onSubmit={handlePostCode}
            isLoading={isLoading}
            disabled={!blogs}
          />
        </div>
        <p className="mb-4">
          Use this page to write and preview your blog posts. Switch between the
          &quot;Editor&quot; and &quot;Preview&quot; tabs to see your content in
          real-time. Once you&apos;re satisfied with your post, click the
          &quot;Post&quot; button to publish it.
        </p>
      </div>
      <Tabs
        defaultValue="editor"
        className="w-full"
        onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="w-full bg-transparent gap-1 items-center justify-center">
          <TabsTrigger
            value="editor"
            className="data-[state=active]:border-2 data-[state=active]:font-semibold data-[state=inactive]:border-2 data-[state=inactive]:text-black ">
            Editor
          </TabsTrigger>
          <TabsTrigger
            disabled={!blogs}
            value="preview"
            className="data-[state=active]:border-2 data-[state=active]:font-semibold data-[state=inactive]:border-2 data-[state=inactive]:text-black ">
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="editor"
          className={cn(
            activeTab === "editor" ? "slide-right" : "slide-left",
            "h-[calc(100dvh-300px)] blog-editor border-b border-solid border-gray-400/50"
          )}>
          <Editor onChangeText={addBlog} text={blogs} />
        </TabsContent>
        <TabsContent
          value="preview"
          className={cn(
            activeTab === "preview" ? "slide-left" : "slide-right",
            "h-[calc(100dvh-325px)]"
          )}>
          <div className="border">
            <IframeContent content={blogs} />
          </div>
        </TabsContent>
      </Tabs>
      <style jsx global>{`
        @keyframes slideLeft {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .slide-left {
          animation: slideLeft 0.5s forwards;
        }

        .slide-right {
          animation: slideRight 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
