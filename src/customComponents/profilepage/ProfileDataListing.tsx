"use client";
import { useFetchPostsByIds } from "empyreanui/apiServices/getpostslist";
import { UserContext } from "empyreanui/Providers/user-provider";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
// import { UserContext } from "empyreanui/Providers/user-provider";

function ProfileDataListing() {
  const { user } = useContext(UserContext);
  const { posts, isLoading, error, fetchPostsByIds } = useFetchPostsByIds();
  console.log({ user });

  useEffect(() => {
    fetchPostsByIds(user.component_ids);
  }, [user, fetchPostsByIds]);

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

  if (!posts) {
    return <div>No post found</div>;
  }
  console.log({ posts });

  return (
    <div className="max-h-60 overflow-y-auto space-y-4 p-2">
      {posts.map((post) => (
        <Link
          href={`/browse/${post.componentName}-${post._id}`}
          key={post._id}
          className="block">
          <div className="bg-white rounded-md p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <h3 className="text-lg font-semibold mb-1">{post.componentName}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {post.componentCategory}
            </p>
            <p className="text-gray-700">
              By {post.user.firstName} {post.user.lastName}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProfileDataListing;
