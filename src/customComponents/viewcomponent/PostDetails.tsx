"use client";
import React, { useEffect } from "react";
import { useFetchPostById } from "@apiservices";
import ViewEditorRenderer from "./ViewEditorRenderer";
import { Download, Loader, Maximize2 } from "lucide-react";
import { GetIconFramework } from "kodebloxui/utils/getIconFramwork";
import { useDownloadZip } from "@hooks";
import { Button } from "kodebloxui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "kodebloxui/components/ui/dialog";
import { CreateNewComponent } from "@customcomponent";

interface PostDetailsProps {
  postId: string;
}

const PostDetails: React.FC<PostDetailsProps> = ({ postId }) => {
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
      post.code.javascriptCode,
      post.code.styleType,
      post.componentName
    );
  };

  const handleFullScreen = () => {
    const fullScreenHtml = `
      <html>
        <head>
        <title>${post.componentName}</title>
          <style>
            ${post.code.cssCode}
            body {
              display: flex;
              align-items: center;
              height: 100dvh;
              margin: 0px;
            }
            body > * {
              margin: 0px auto;
            }
          </style>
        </head>
        <body>
          ${post.code.htmlCode}
          <script>
            ${post.code.javascriptCode}
          </script>
        </body>
      </html>
    `;
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(fullScreenHtml);
      newWindow.document.close();
    }
  };

  return (
    <div>
      <div className="flex max-lg:flex-col lg:items-center max-lg:pl-4 gap-2 mb-2">
        <span className="flex items-center gap-2 flex-wrap lg:text-4xl text-xl font-bold mb-2 text-primary capitalize">
          {post.componentName}{" "}
          <GetIconFramework
            size={24}
            framework={post.code.styleType as "css" | "tailwind"}
          />
        </span>

        <span>
          By {post.user.firstName} {post.user.lastName}
        </span>
        <div className="ml-auto flex gap-2 items-center">
          <Button
            onClick={handleFullScreen}
            className="text-primary bg-primary/20 ml-2 flex gap-2 rounded-full max-md:py-1 max-md:px-2.5 hover:bg-primary/20 border-2 border-solid border-primary/20 hover:border-primary">
            <Maximize2 size={16} />
            <span className="max-md:hidden">View in full screen</span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex gap-2 rounded-full">
                <Download size={16} />
                <span>Download code</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Download</DialogTitle>

                <DialogDescription>
                  Note: Make sure to extract the zip file and then use them
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
      </div>
      <div>
        <ViewEditorRenderer
          initialCssContent={post.code.cssCode}
          initialCssFramework={post.code.styleType}
          initialHtmlContent={post.code.htmlCode}
          initialJsContent={post.code.javascriptCode}
        />
      </div>
      {post.description ? (
        <div className="mt-5">
          <h1 className="font-semibold text-xl">Description:</h1>
          <span>{post.description}</span>
        </div>
      ) : null}

      <aside className="fixed bottom-3 left-1/2 transform -translate-x-1/2 p-3 border border-solid border-primary bg-primary/20 backdrop-blur-xl backdrop-blur-safari rounded-full flex max-lg:hidden">
        <CreateNewComponent className="px-3 rounded-full" />
      </aside>
    </div>
  );
};

export default PostDetails;
