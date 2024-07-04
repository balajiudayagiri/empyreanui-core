import BlogRenderedView from "empyreanui/customComponents/blogs/BlogRenderedView";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-14 h-dvh bg-white">
      <BlogRenderedView id={params.id} />
    </div>
  );
}

export default page;
