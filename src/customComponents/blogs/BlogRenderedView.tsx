"use client";
import React, { useEffect, useState } from "react";
import { useFetchBlogById } from "empyreanui/apiServices/useFetchBlogById";
import { Loader } from "lucide-react";
import IframeContent from "./IframeContent";
import { months } from "empyreanui/utils";
import Image from "next/image";
import RedmeRenderer from "../_readme/RedmeRenderer";

function BlogRenderedView({ id }: { id: string }) {
  const { blog, isLoading, error, fetchBlogById } = useFetchBlogById();
  const [iframeHeight, setIframeHeight] = useState("auto");

  useEffect(() => {
    fetchBlogById(id);
  }, [id, fetchBlogById]);

  useEffect(() => {
    const handleResizeMessage = (event: {
      data: { type: string; height: any };
    }) => {
      if (event.data.type === "resize") {
        setIframeHeight(`${event.data.height}px`);
      }
    };
    window.addEventListener("message", handleResizeMessage);
    return () => {
      window.removeEventListener("message", handleResizeMessage);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader className="text-primary animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-red-600 font-bold">Error: {error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-600">No post found</div>
      </div>
    );
  }

  const date = new Date(blog.date).toLocaleDateString();
  const formattedDate =
    months[parseInt(date.split("/")[0])] + " / " + date.split("/")[2];
  return (
    <div className="flex flex-col items-center bg-white p-4 md:p-8 lg:p-12 max-w-5xl mx-auto">
      <header className="text-center mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg shadow-md w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-white">
          {blog.title}
        </h1>
        <p className="mt-2 text-sm md:text-base lg:text-lg text-white">
          <span className="font-semibold">{blog.author}</span> - on{" "}
          {formattedDate}
        </p>
      </header>
      {blog.thumbnail ? (
        <Image
          src={blog.thumbnail}
          alt={blog.thumbnail}
          height={1000}
          width={1000}
          className="w-3/5 mb-3"
        />
      ) : null}
      <section className="mb-6 p-4 rounded-lg">
        <p className="line-clamp-3 text-gray-700">{blog.content}</p>
      </section>
      <hr className="w-full my-4" />

      {blog.blogType ? (
        <RedmeRenderer markdown={blog.data} />
      ) : (
        <IframeContent
          content={blog.data}
          className="w-full"
          style={{ height: iframeHeight }}
        />
      )}
    </div>
  );
}

export default BlogRenderedView;
