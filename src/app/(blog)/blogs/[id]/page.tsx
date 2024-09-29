import React from "react";
import BlogRenderedView from "empyreanui/customComponents/blogs/BlogRenderedView";
import Breadcrumbs from "empyreanui/customComponents/Breadcrumb";
import { extractId } from "empyreanui/utils";

function page({ params }: { params: { id: string } }) {
  const subSegments = params.id.split("-");
  subSegments.pop(); // Remove the last element which is the ID
  const combinedSubSegments = subSegments.join(" ").toString();
  return (
    <div className="pt-14 bg-white text-black">
      <Breadcrumbs />
      <BlogRenderedView id={extractId(params.id)} />
    </div>
  );
}

export default page;
