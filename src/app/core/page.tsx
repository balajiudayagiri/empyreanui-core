import React, { Suspense } from "react";
import RenderComponent from "../../customComponents/core/RenderComponent";
import { Loader } from "lucide-react";

function Page() {
  return (
    <div className="h-[calc(100vh-80px)]">
      <Suspense fallback={<Loader className="animate-spin" />}>
        <RenderComponent />
      </Suspense>
    </div>
  );
}

export default Page;
