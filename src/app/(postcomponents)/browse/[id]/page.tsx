import React from "react";
import { PostDetails } from "@customcomponent";
import { extractId } from "empyreanui/utils";

function page({ params }: { params: { id: string } }) {
  return (
    <div className="lg:mx-9 mt-14">
      <PostDetails postId={extractId(params.id)} />
    </div>
  );
}

export default page;
