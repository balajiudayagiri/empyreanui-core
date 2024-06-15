import React from "react";
import { BackButton } from "@customcomponent"; // Adjust the import path as needed

export default function EmpyreanUIComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-vw">
      <BackButton />
      {children}
    </section>
  );
}
