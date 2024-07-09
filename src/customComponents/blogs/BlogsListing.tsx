"use client";
import { useFetchBlogs } from "empyreanui/apiServices/fetchBlogs";
import { Frown, Loader, SquarePen } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { BlogsTypes } from "./blogsTypes";
import BlogCard from "./BlogCard";
import { Input } from "empyreanui/components/ui/input";
import Link from "next/link";
import { Button } from "empyreanui/components/ui/button";
import dynamic from "next/dynamic";
const Vortex = dynamic(() => import("empyreanui/components/ui/vortex"));

function BlogsListing() {
  const { fetchBlogs, isLoading, error } = useFetchBlogs();
  const [blogs, setBlogs] = useState<BlogsTypes[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const previousScrollY = useRef<number>(0);

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

  const handleFocus = () => {
    previousScrollY.current = window.scrollY;
    window.scrollTo({ top: 300, behavior: "smooth" });
    // Set font size to prevent zoom on mobile
    document.documentElement.style.setProperty("--input-font-size", "16px");
  };

  const handleBlur = () => {
    window.scrollTo({ top: previousScrollY.current, behavior: "smooth" });
    // Reset font size
    document.documentElement.style.setProperty("--input-font-size", "inherit");
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <main className="flex flex-col items-center gap-8 lg:w-4/5 mx-auto">
      <Vortex
        baseHue={240}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full">
        <section className="w-full text-white p-10 rounded-3xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Welcome to EmpyreanUI Blogs
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Discover the latest news, tips, and insights from our experts. Stay
            updated with the newest trends and stories that matter to you.
          </p>
        </section>
      </Vortex>
      <section className="w-full py-3 z-10 max-md:p-2">
        <Input
          placeholder="Search blogs..."
          className="w-full bg-white/20 focus-visible:outline-none focus-within:outline-none focus-visible:border-none p-4 border border-white placeholder:text-white rounded-xl shadow-sm focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ fontSize: "var(--input-font-size, inherit)" }}
        />
      </section>

      {filteredBlogs.length > 0 ? (
        <section className="w-dvw max-md:p-2 bg-black/10 backdrop-blur-md backdrop-blur-safari md:p-6">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-4/5 mx-auto">
            {filteredBlogs.map((item: BlogsTypes, index: number) => (
              <BlogCard key={index} data={item} />
            ))}
          </section>
        </section>
      ) : (
        <div className="w-full text-center flex flex-col items-center justify-center gap-4 text-gray-500 p-6 border border-dashed border-gray-300 rounded-lg">
          <p className="text-lg lg:text-xl flex gap-2">
            <Frown /> No blogs found matching &quot;{searchTerm}&quot;.
          </p>
          <Link href="/postblogs">
            <Button className="flex gap-3 bg-blue-500 text-white border-2 border-transparent hover:bg-blue-600 transition ease-in-out duration-300 ml-auto">
              <SquarePen className="w-5 h-5" aria-hidden="true" />
              <span className="font-bold">Let&apos;s Create this Blog</span>
            </Button>
          </Link>
        </div>
      )}
    </main>
  );
}

export default BlogsListing;
