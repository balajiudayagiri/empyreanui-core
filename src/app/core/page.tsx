import React, { Suspense } from "react";
import RenderComponent from "./RenderComponent";

function Page() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <Suspense fallback={"Loading..."}>
        <RenderComponent />
      </Suspense>
    </div>
  );
}

export default Page;
