"use client";
import React, { useEffect } from "react";
import { useFetchPosts } from "@apiservices";
import PostCard from "./PostCard"; // Adjust the import path as needed

const PostList: React.FC = () => {
  const { fetchPosts, isLoading, error, data } = useFetchPosts();

  useEffect(() => {
    fetchPosts({
      onSuccess: (data) => {
        console.log("Posts fetched successfully:", data);
      },
      onError: (error) => {
        console.error("Error fetching posts:", error);
      },
    });
  }, [fetchPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Rendering PostList with data:", data); // Debugging log

  return (
    <div>
      <h1>Post List</h1>
      <div className="flex flex-wrap justify-around">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((post: any) => {
            return <PostCard key={post._id} post={post} />;
          })
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
};

export default PostList;
