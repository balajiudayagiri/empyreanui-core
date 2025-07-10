import React from "react";
import { Tabs, TabsList, TabsTrigger } from "kodebloxui/components/ui/tabs";
import { Button } from "kodebloxui/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { CreateNewComponent, CSSICON } from "@customcomponent";
import { Tailwind } from "kodebloxui/utils/getIconFramwork";

interface BrowseHeaderProps {
  styleType: string;
  handleStyleTypeChange: (type: string) => void;
  resetFilters: () => void;
}

export const BrowseHeader = React.memo(
  ({ styleType, handleStyleTypeChange, resetFilters }: BrowseHeaderProps) => {
    return (
      <>
        <div className="flex flex-wrap justify-between gap-3 p-4 max-md:m-auto">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[32px] font-bold leading-tight tracking-light text-[#0e151b]">
              {" "}
              Components{" "}
            </p>
            <p className="text-sm font-normal leading-normal text-[#4e7997]">
              {" "}
              Explore our extensive library of UI components to accelerate your
              development process.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 p-3 pr-4 max-md:m-auto">
          <Tabs
            defaultValue="all"
            className="w-fit"
            onValueChange={handleStyleTypeChange}
            value={styleType}>
            <TabsList className="flex">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="css">
                <span className="flex items-center gap-2">
                  {" "}
                  <CSSICON size={16} /> CSS{" "}
                </span>
              </TabsTrigger>
              <TabsTrigger value="tailwind">
                <span className="flex items-center gap-2">
                  {" "}
                  <Tailwind size={16} /> Tailwind{" "}
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button
            onClick={resetFilters}
            variant={"ghost"}
            className="rounded-lg hover:bg-primary/10 hover:text-primary">
            <RefreshCcw size={20} />
            <span className="ml-2 text-sm font-medium leading-normal">
              {" "}
              Reset{" "}
            </span>
          </Button>
          <CreateNewComponent />
        </div>
      </>
    );
  }
);

BrowseHeader.displayName = "BrowseHeader";
