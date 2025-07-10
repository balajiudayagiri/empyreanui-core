import React from "react";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const Sidebar = React.memo(
  ({
    categories,
    selectedCategory,
    handleCategoryChange,
    searchTerm,
    setSearchTerm,
  }: SidebarProps) => {
    return (
      <div className="sticky top-16 flex w-80 flex-col max-md:hidden">
        {/* <div className="px-4 py-3">
          <label className="flex h-12 w-full min-w-40 flex-col">
            <div className="flex h-full flex-1 items-stretch rounded-lg">
              <div className="flex items-center justify-center rounded-l-lg border-r-0 border-none bg-[#e7eef3] pl-4 text-[#4e7997]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256" > <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path> </svg>
              </div>
              <input placeholder="Search components" className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#e7eef3] px-4 pl-2 text-base font-normal leading-normal text-[#0e151b] placeholder:text-[#4e7997] focus:border-none focus:outline-0 focus:ring-0" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </label>
        </div> */}
        <h3 className="px-4 pb-2 pt-4 text-lg font-bold leading-tight tracking-[-0.015em] text-[#0e151b]">
          Categories
        </h3>
        <div className="px-4">
          {categories.map((category) => (
            <label key={category} className="flex flex-row gap-x-3 py-3">
              <input
                type="checkbox"
                className="h-5 accent-primary w-5 rounded border-2 border-[#d0dde7] bg-transparent text-[#1990e5] checked:border-[#1990e5] checked:bg-[#1990e5] checked:bg-[image:var(--checkbox-tick-svg)] focus:border-[#d0dde7] focus:outline-none focus:ring-0 focus:ring-offset-0"
                checked={
                  selectedCategory.toLowerCase() === category.toLowerCase()
                }
                onChange={() =>
                  handleCategoryChange(category === "all" ? "" : category)
                }
              />
              <p className="capitalize text-base font-normal leading-normal text-[#0e151b]">
                {" "}
                {category}{" "}
              </p>
            </label>
          ))}
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";
