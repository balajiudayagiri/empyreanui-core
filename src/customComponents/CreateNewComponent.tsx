"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { Button } from "empyreanui/components/ui/button";
import { cn } from "empyreanui/lib/utils";

const CreateNewComponent: React.FC<{ className?: string }> = ({
  className,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isEmpyreanUIComponentsRoute = pathname === "/browse";
  const isviewcomponent = pathname.split("/")[1] === "viewcomponent";

  const handlePostComponentClick = () => {
    router.push("/postcomponent");
  };

  return (
    <span>
      {(isEmpyreanUIComponentsRoute || isviewcomponent) && (
        <Button
          onClick={handlePostComponentClick}
          className={cn(
            "bg-primary text-black px-4 py-2 rounded ml-auto flex gap-2",
            className
          )}>
          <Plus size={"16px"} /> <span>Create a Component</span>
        </Button>
      )}
    </span>
  );
};

export default CreateNewComponent;
