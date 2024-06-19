"use client";
import React from "react";
import ComponentRenderer from "./ComponentRenderer";
import { components } from "./componentData";
import { useSearchParams } from "next/navigation";

function RenderComponent() {
  const searchParams = useSearchParams();
  const component = searchParams.get("component");

  return (
    <ComponentRenderer
      components={components}
      initialComponentPath={component as string}
    />
  );
}

export default RenderComponent;
