import React, { Suspense } from "react";
import RenderComponent from "./RenderComponent";
import Maintenance from "empyreanui/lib/maintenance/maintenance";

function Page() {
  return (
    // <div className="h-[calc(100vh-80px)]">
    //   <Suspense fallback={"Loading..."}>
    //     <RenderComponent />
    //   </Suspense>
    // </div>
    <Maintenance />
  );
}

export default Page;
