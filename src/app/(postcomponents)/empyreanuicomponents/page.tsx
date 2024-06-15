import React, { Suspense } from "react";
import { PostList } from "@customcomponent";
import { Loader } from "lucide-react";

function page() {
  return (
    <div className="w-full">
      <Suspense fallback={<Loader className="animate-spin" />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default page;
