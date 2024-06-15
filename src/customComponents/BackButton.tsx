"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "empyreanui/components/ui/button";
import { cn } from "empyreanui/lib/utils";

const BackButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isEmpyreanUIComponentsRoute = pathname === "/empyreanuicomponents";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav
      className={cn(
        "flex justify-between items-center sticky top-14 z-40 max-md:pl-1",
        !isEmpyreanUIComponentsRoute && "px-4 py-2"
      )}>
      {!isEmpyreanUIComponentsRoute && (
        <Button
          onClick={handleBackClick}
          className="px-4 py-2 rounded flex gap-2 bg-transparent hover:bg-foreground/20 text-current">
          <ArrowLeft size={"16px"} />
          <span>Back</span>
        </Button>
      )}
    </nav>
  );
};

export default BackButton;
