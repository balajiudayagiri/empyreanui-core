"use client";
import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Upload } from "lucide-react";
import { Button } from "empyreanui/components/ui/button";

const CreateNewComponent: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isEmpyreanUIComponentsRoute = pathname === "/empyreanuicomponents";
  const isviewcomponent = pathname.split("/")[1] === "viewcomponent";

  const handlePostComponentClick = () => {
    router.push("/postcomponent");
  };

  return (
    <span>
      {(isEmpyreanUIComponentsRoute || isviewcomponent) && (
        <Button
          onClick={handlePostComponentClick}
          className="bg-primary text-black px-4 py-2 rounded ml-auto flex gap-2">
          <Upload size={"16px"} /> <span>Create a Component</span>
        </Button>
      )}
    </span>
  );
};

export default CreateNewComponent;
