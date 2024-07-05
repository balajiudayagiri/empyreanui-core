import { BackButton } from "empyreanui/customComponents";
import { BlogPage } from "empyreanui/customComponents/blogs";
import React from "react";

function page() {
  return (
    <main className="bg-white text-black pt-14 min-h-dvh">
      <BackButton className="bg-white/50 backdrop-blur-lg" />
      <BlogPage />
    </main>
  );
}

export default page;
