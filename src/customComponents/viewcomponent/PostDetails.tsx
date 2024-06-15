"use client";
import React, { useEffect, useState } from "react";
import { useFetchPostById } from "@apiservices";
import ViewEditorRenderer from "./ViewEditorRenderer";
import { Download, Loader } from "lucide-react";
import { GetIconFramework } from "empyreanui/utils/getIconFramwork";
import { useDownloadZip } from "@hooks";
import { Button } from "empyreanui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "empyreanui/components/ui/dialog";

const PostDetails: React.FC<{ postId: string }> = ({ postId }) => {
  const { post, isLoading, error, fetchPostById } = useFetchPostById();
  const { downloadZip } = useDownloadZip();

  useEffect(() => {
    fetchPostById(postId);
  }, [postId, fetchPostById]);

  if (isLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <Loader className="text-primary animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  const handleDownload = () => {
    downloadZip(
      post.code.htmlCode,
      post.code.cssCode,
      post.code.styleType,
      post.componentName
    );
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-4xl font-bold mb-2 text-primary">
          {post.componentName}
        </span>
        <GetIconFramework
          size={24}
          framework={post.code.styleType as "css" | "tailwind"}
        />
        <span>
          By {post.user.firstName} {post.user.lastName}
        </span>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto flex gap-2">
              <Download size={16} />
              <span>Download code</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Download</DialogTitle>

              <DialogDescription>
                Note: Make sure extract the zip file and then use them
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleDownload} className="flex gap-2">
                  <Download size={16} />
                  <span>Download</span>
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <ViewEditorRenderer
          initialCssContent={post.code.cssCode}
          initialCssFramework={post.code.styleType}
          initialHtmlContent={post.code.htmlCode}
        />
      </div>
    </div>
  );
};

export default PostDetails;
