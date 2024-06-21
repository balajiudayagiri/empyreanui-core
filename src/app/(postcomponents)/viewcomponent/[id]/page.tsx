import React from "react";
import { PostDetails } from "@customcomponent";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="lg:mx-9 mt-14">
      <PostDetails postId={params.id} />
    </div>
  );
}

export default page;
