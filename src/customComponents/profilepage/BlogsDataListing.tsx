"use client";
import { usefetchBlogsByIds } from "empyreanui/apiServices/getblogslist";
import { UserContext } from "empyreanui/Providers/user-provider";
import { makeUrlFriendly } from "empyreanui/utils";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
// import { UserContext } from "empyreanui/Providers/user-provider";

function BlogsDataListing() {
  const { user } = useContext(UserContext);
  const { blogs, isLoading, error, fetchBlogsByIds } = usefetchBlogsByIds();

  useEffect(() => {
    fetchBlogsByIds(user.blog_ids);
  }, [user, fetchBlogsByIds]);

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

  if (!blogs) {
    return <div>No post found</div>;
  }

  return (
    <div className="">
      {blogs.map((blog) => (
        <Link
          href={`/blogs/${makeUrlFriendly(blog.title)}-${blog._id}`}
          key={blog._id}
          className="block">
          <div className="bg-white rounded-md p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-4">By {blog.author}</p>
            <p className="text-gray-800">
              Blog Type: <span className="font-bold">{blog.blogType}</span>
            </p>
            <p className="text-sm text-gray-600">
              Published on: {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogsDataListing;
