"use client";
import React, { Suspense, useEffect } from "react";
import { useFetchPosts } from "@apiservices";
import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const DynamicPostCard = dynamic(() =>
  import("@customcomponent").then((mod) => mod.PostCard)
);

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
    <div className="p-4">
      <h1 className="text-3xl font-black mb-4 text-center text-primary">
        Browse
      </h1>
      <section className="flex flex-wrap justify-center gap-3">
        <Suspense fallback={<Loader className="animate-spin" />}>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((post: any) => (
              <DynamicPostCard key={post._id} post={post} />
            ))
          ) : (
            <div>No posts available</div>
          )}
        </Suspense>
      </section>
    </div>
  );
};

export default PostList;
