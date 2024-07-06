import { BackButton } from "empyreanui/customComponents";
import BlogRenderedView from "empyreanui/customComponents/blogs/BlogRenderedView";
import { extractId } from "empyreanui/utils";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-14 bg-white text-black">
      <BackButton className="max-md:sticky bg-white/50 backdrop-blur-lg backdrop-blur-safari" />
      <BlogRenderedView id={extractId(params.id)} />
    </div>
  );
}

export default page;
