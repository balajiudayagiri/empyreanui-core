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

  return (
    <div className="container mx-auto p-4 min-h-screen ">
      <div className="p-8 rounded-lg shadow-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-5xl mb-3 font-bold text-center">
          Publish Your Blogs
        </h1>
        <PostBlogDialog
          onSubmit={handlePostCode}
          isLoading={isLoading}
          disabled={!blogs}
        />
        <p className="mb-4 text-center">
          Use this page to write and preview your blog posts. Switch between the
          &quot;Editor&quot; and &quot;Preview&quot; tabs to see your content in
          real-time. Once you&apos;re satisfied with your post, click the
          &quot;Post&quot; button to publish it.
        </p>
      </div>
      <Tabs
        defaultValue="editor"
        className="w-full mt-4"
        onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="flex justify-center space-x-4 bg-transparent">
          <TabsTrigger
            value="editor"
            className={cn(
              "px-4 py-2 rounded-md",
              "transition duration-200",
              "border border-gray-300",
              activeTab === "editor"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            )}>
            Editor
          </TabsTrigger>
          <TabsTrigger
            disabled={!blogs}
            value="preview"
            className={cn(
              "px-4 py-2 rounded-md",
              "transition duration-200",
              "border border-gray-300",
              activeTab === "preview"
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            )}>
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="editor"
          className={cn(
            activeTab === "editor"
              ? "animate-slide-right"
              : "animate-slide-left",
            "h-[calc(100vh-300px)] blog-editor border-t border-gray-300 bg-white"
          )}>
          <Editor
            onChangeText={addBlog}
            text={blogs}
            placeholder="Describe your blog here..."
          />
        </TabsContent>
        <TabsContent
          value="preview"
          className={cn(
            activeTab === "preview"
              ? "animate-slide-left"
              : "animate-slide-right",
            "h-[calc(100vh-325px)]"
          )}>
          <div className="border-t border-gray-300 h-full p-4 bg-white rounded-lg shadow-inner">
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

        .animate-slide-left {
          animation: slideLeft 0.5s forwards;
        }

        .animate-slide-right {
          animation: slideRight 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
