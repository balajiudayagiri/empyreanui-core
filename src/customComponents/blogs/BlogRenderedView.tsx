"use client";
import React, { useEffect } from "react";
import { useFetchBlogById } from "empyreanui/apiServices/useFetchBlogById";
import { Loader } from "lucide-react";
import IframeContent from "./IframeContent";
import { months } from "empyreanui/utils";

function BlogRenderedView({ id }: { id: string }) {
  const { blog, isLoading, error, fetchBlogById } = useFetchBlogById();

  useEffect(() => {
    fetchBlogById(id);
  }, [id, fetchBlogById]);

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

  if (!blog) {
    return <div>No post found</div>;
  }
  const date = new Date(blog.date).toLocaleDateString();
  const formatedDate =
    months[date.split("/")[1] as unknown as number] +
    " / " +
    date.split("/")[2];
  return (
    <div className="flex flex-col items-center">
      <div className="h-[160px] text-black">
        {" "}
        <h1 className="text-4xl capitalize font-bold">{blog.title}</h1>
        <h1 className="mb-9">
          <span className="font-bold capitalize">{blog.author}</span> -{" "}
          <span className="text-sm"> on {formatedDate}</span>
        </h1>
        <p className="line-clamp-2">{blog.content}</p>
      </div>
      <IframeContent
        content={blog.data}
        className="border-none h-[calc(100dvh-216px)] md:w-4/5"
      />
    </div>
  );
}

export default BlogRenderedView;
