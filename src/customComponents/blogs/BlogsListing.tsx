"use client";
import { useFetchBlogs } from "empyreanui/apiServices/fetchBlogs";
import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BlogsTypes } from "./blogsTypes";
import BlogCard from "./BlogCard";

function BlogsListing() {
  const { fetchBlogs, isLoading, error } = useFetchBlogs();
  const [blogs, setBlogs] = useState<BlogsTypes[]>([]);

  useEffect(() => {
    fetchBlogs({
      onSuccess: (data) => {
        // Sort the blogs by date (newest first)
        const sortedBlogs = data.sort(
          (a: BlogsTypes, b: BlogsTypes) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setBlogs(sortedBlogs);
      },
      onError: (error) => {
        console.error("Error fetching posts:", error);
      },
    });
  }, [fetchBlogs]);

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

  return (
    <main className="flex flex-col gap-8 lg:w-4/5">
      {blogs.map((item: BlogsTypes, index: number) => (
        <BlogCard key={index} data={item} />
      ))}
    </main>
  );
}

export default BlogsListing;
