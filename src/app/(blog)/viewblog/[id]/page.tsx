import { BackButton } from "empyreanui/customComponents";
import BlogRenderedView from "empyreanui/customComponents/blogs/BlogRenderedView";
import Breadcrumbs from "empyreanui/customComponents/Breadcrumb";
import { extractId } from "empyreanui/utils";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="pt-14 bg-white text-black">
      <Breadcrumbs />
      <BlogRenderedView id={extractId(params.id)} />
    </div>
  );
}

export default page;
