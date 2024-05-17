"use client";
import React, { Suspense } from "react";
import ComponentRenderer, { ComponentDoc } from "./ComponentRenderer";
import { components } from "./componentData";
import { useSearchParams } from "next/navigation";

function Page() {
  const searchParams = useSearchParams();
  const component = searchParams.get("component");

  return (
    <div className="h-[calc(100vh-80px)]">
      <Suspense>
        <ComponentRenderer
          components={components}
          initialComponentPath={component as string}
        />
      </Suspense>
    </div>
  );
}

export default Page;
