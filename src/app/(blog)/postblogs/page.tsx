import { BackButton } from "empyreanui/customComponents";
import { BlogPage } from "empyreanui/customComponents/blogs";
import React from "react";

function page() {
  return (
    <main className="bg-white text-black pt-14 h-dvh">
      <BackButton />
      <BlogPage />
    </main>
  );
}

export default page;
