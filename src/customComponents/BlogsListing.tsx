"use client";
import React, { useEffect } from "react";
import { usefetchBlogsByIds } from "kodebloxui/apiServices/getblogslist";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

function BlogsListing({ list }: { list: string[] }) {
  const { blogs, isLoading, error, fetchBlogsByIds } = usefetchBlogsByIds();

  useEffect(() => {
    fetchBlogsByIds(list);
  }, [list, fetchBlogsByIds]);

  if (isLoading) {
    return (
      <div className="h-32 flex items-center justify-center">
        <Loader className="text-primary animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found</div>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="border p-4 rounded-lg bg-white/20 backdrop-blur-safari">
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <p className="text-sm">By {blog.author}</p>
          <p className="text-sm">{blog.content.slice(0, 100)}...</p>
        </div>
      ))}
    </motion.div>
  );
}

export default BlogsListing;
