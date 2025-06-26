"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "kodebloxui/components/ui/button";
import { cn } from "kodebloxui/lib/utils";

const BackButton: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isEmpyreanUIComponentsRoute = pathname === "/browse";

  const handleBackClick = () => {
    router.back();
  };

  return (
    <nav
      className={cn(
        "flex justify-between items-center md:sticky top-14 z-40 max-md:pl-1 max-md:mt-14",
        !isEmpyreanUIComponentsRoute && "px-4 py-2",
        className
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
