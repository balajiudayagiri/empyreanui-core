"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useFetchPosts } from "@apiservices";
import { Loader } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { MobileFilters } from "./MobileFilters";
import { BrowseHeader } from "./BrowseHeader";
import { ComponentGrid } from "./ComponentGrid";
import { useDebounce } from "kodebloxui/utils/hooks/useDebounce";

const PostList: React.FC = () => {
  const { fetchPosts, isLoading, error, totalPostsCount } = useFetchPosts();
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [styleType, setStyleType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const itemsPerPage = 12;

  useEffect(() => {
    // This single effect handles initial load, filtering, and pagination
    const params = {
      page: currentPage + 1, // API is 1-based, UI is 0-based
      limit: itemsPerPage,
      category: selectedCategory === "all" ? undefined : selectedCategory,
      styleType: styleType === "all" ? undefined : styleType,
      searchTerm: debouncedSearchTerm || undefined,
    };

    fetchPosts({
      params,
      onSuccess: (data, totalCount, categoriesData) => {
        setFilteredPosts(data);

        // If the API returns a list of categories (on the first page load), update the state.
        if (categoriesData && Array.isArray(categoriesData)) {
          const lowercasedCategories: string[] = categoriesData.map((c) =>
            c.toLowerCase()
          );
          setCategories(["all", ...Array.from(new Set(lowercasedCategories))]);
        }
      },
      onError: (error) => {
        console.error("Error fetching posts:", error);
        setFilteredPosts([]);
      },
    });
  }, [
    selectedCategory,
    styleType,
    debouncedSearchTerm,
    currentPage,
    fetchPosts,
  ]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category === "" ? "all" : category.toLowerCase());
    setCurrentPage(0);
  }, []);

  const handleStyleTypeChange = useCallback((type: string) => {
    setStyleType(type);
    setCurrentPage(0);
  }, []);

  const handleSetSearchTerm = useCallback((term: string) => {
    setSearchTerm(term);
    setCurrentPage(0);
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedCategory("all");
    setStyleType("all");
    setSearchTerm("");
    setCurrentPage(0);
  }, []);

  const totalPages = Math.ceil(totalPostsCount / itemsPerPage);

  const getPageNumbers = useCallback(
    (totalPages: number, currentPage: number) => {
      const pageNumbers = [];
      const maxPagesToShow = 5;

      if (totalPages <= maxPagesToShow) {
        for (let i = 0; i < totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        const startPage = Math.max(
          0,
          currentPage - Math.floor(maxPagesToShow / 2)
        );
        const endPage = Math.min(
          totalPages - 1,
          startPage + maxPagesToShow - 1
        );

        if (startPage > 0) {
          pageNumbers.push(0);
          if (startPage > 1) pageNumbers.push("ellipsis-prev");
        }

        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) {
          if (endPage < totalPages - 2) pageNumbers.push("ellipsis-next");
          pageNumbers.push(totalPages - 1);
        }
      }
      return pageNumbers;
    },
    []
  );

  const pageNumbers = getPageNumbers(totalPages, currentPage);

  if (isLoading) {
    return (
      <div className="h-dvh flex items-center justify-center">
        <Loader className="text-primary animate-spin" size={32} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center gap-1 px-6 md:py-5">
          <Sidebar
            categories={categories}
            selectedCategory={selectedCategory}
            handleCategoryChange={handleCategoryChange}
            searchTerm={searchTerm}
            setSearchTerm={handleSetSearchTerm}
          />

          <div className="layout-content-container flex max-w-[960px] w-dvw flex-1 flex-col">
            <BrowseHeader
              styleType={styleType}
              handleStyleTypeChange={handleStyleTypeChange}
              resetFilters={resetFilters}
            />
            <ComponentGrid
              isLoading={isLoading}
              filteredPosts={filteredPosts}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageNumbers={pageNumbers}
            />
          </div>
        </div>
      </div>
      <MobileFilters
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        setSearchTerm={handleSetSearchTerm}
        resetFilters={resetFilters}
      />
    </div>
  );
};

export default PostList;
