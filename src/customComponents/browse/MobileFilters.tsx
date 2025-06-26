import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "kodebloxui/components/ui/drawer";
import { Button } from "kodebloxui/components/ui/button";
import { List, Search } from "lucide-react";
import { cn } from "kodebloxui/lib/utils";
import { CreateNewComponent } from "@customcomponent";

interface MobileFiltersProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  resetFilters: () => void;
}

export const MobileFilters = React.memo(
  ({
    categories,
    selectedCategory,
    handleCategoryChange,
    searchTerm,
    setSearchTerm,
    resetFilters,
  }: MobileFiltersProps) => {
    return (
      <aside
        className={cn(
          "fixed bottom-3 left-1/2 z-30 flex -translate-x-1/2 transform rounded-full border-2 border-solid border-primary bg-primary/20 p-3 shadow shadow-primary backdrop-blur-xl backdrop-blur-safari md:hidden"
        )}>
        {/* <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant={"ghost"}
              className="hover:bg-primary/10 hover:text-primary bg-primary rounded-full mr-2">
              <List />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="px-4 py-6" asChild>
            <div>
              <h3 className="mb-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e151b]">
                Filters{" "}
              </h3>
              <div className="flex flex-col gap-4">
                <h4 className="pt-2 text-base font-bold leading-tight tracking-[-0.015em] text-[#0e151b]">
                  Categories{" "}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={"outline"}
                      className={`cursor-pointer capitalize rounded-full border border-solid bg-transparent px-4 py-2 ${
                        selectedCategory.toLowerCase() ===
                        category.toLowerCase()
                          ? "border-[#1990e5] bg-[#1990e5] font-bold text-white"
                          : "text-[#0e151b] hover:border-[#1990e5] hover:text-[#1990e5]"
                      }`}
                      onClick={() =>
                        handleCategoryChange(category === "all" ? "" : category)
                      }>
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="mt-4 flex justify-between">
                  <Button variant="outline" onClick={resetFilters}>
                    Reset All{" "}
                  </Button>
                  <DrawerClose asChild>
                    <Button>Apply Filters</Button>{" "}
                  </DrawerClose>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer> */}
        <CreateNewComponent className="px-3 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-yellow-500" />
      </aside>
    );
  }
);

MobileFilters.displayName = "MobileFilters";
