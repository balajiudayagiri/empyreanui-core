"use client";

import React, { useEffect } from "react";
import { useFetchPostsByIds } from "kodebloxui/apiServices/getpostslist";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

function ComponentsListing({ list }: { list: string[] }) {
  const { posts, isLoading, error, fetchPostsByIds } = useFetchPostsByIds();

  useEffect(() => {
    fetchPostsByIds(list);
  }, [list, fetchPostsByIds]);

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

  if (!posts || posts.length === 0) {
    return <div>No components found</div>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {posts.map((post) => (
        <div
          key={post._id}
          className="border p-4 rounded-lg bg-white/20 backdrop-blur-safari">
          <h3 className="text-lg font-bold">{post.componentName}</h3>
          <p className="text-sm">{post.componentCategory}</p>
          <p className="text-sm">{post.description}</p>
        </div>
      ))}
    </motion.div>
  );
}

export default ComponentsListing;
