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
    <main className="flex flex-col items-center gap-8 lg:w-4/5 mx-auto p-4">
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-3xl text-center mb-8 shadow-lg">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Welcome to EmpyreanUI Blogs
        </h1>
        <p className="text-lg lg:text-xl mb-6">
          Discover the latest news, tips, and insights from our experts. Stay
          updated with the newest trends and stories that matter to you.
        </p>
        <a
          href="#blogs"
          className="bg-white text-indigo-600 font-bold py-2 px-4 rounded-full hover:bg-indigo-100 transition-colors duration-300">
          Explore Now
        </a>
      </section>
      <section
        id="blogs"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {blogs.map((item: BlogsTypes, index: number) => (
          <BlogCard key={index} data={item} />
        ))}
      </section>
    </main>
  );
}

export default BlogsListing;
