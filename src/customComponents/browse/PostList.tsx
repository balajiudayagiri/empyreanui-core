"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFetchPosts } from "@apiservices";
import {
  ArrowLeft,
  ArrowRight,
  List,
  Loader,
  RefreshCcw,
  Search,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "empyreanui/components/ui/button";
import { CSSICON, CreateNewComponent } from "@customcomponent";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "empyreanui/components/ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";
import { cn } from "empyreanui/lib/utils";
import { paginate } from "empyreanui/utils";
import { Tabs, TabsList, TabsTrigger } from "empyreanui/components/ui/tabs";
import { Tailwind } from "empyreanui/utils/getIconFramwork";
import { Input } from "empyreanui/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "empyreanui/components/ui/pagination";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "empyreanui/components/ui/drawer";

const DynamicPostCard = dynamic(() =>
  import("@customcomponent").then((mod) => mod.PostCard)
);

const PostList: React.FC = () => {
  const { fetchPosts, isLoading, error, data } = useFetchPosts();
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(0);
  const [styleType, setStyleType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const itemsPerPage = 10; // Define the number of items per page

  useEffect(() => {
    fetchPosts({
      onSuccess: (data) => {
        const sortedPosts = data.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setFilteredPosts(sortedPosts);
        const uniqueCategories = Array.from(
          new Set(data.map((post: any) => post.componentCategory.toLowerCase()))
        );
        setCategories(uniqueCategories as string[]);
      },
      onError: (error) => {
        console.error("Error fetching posts:", error);
      },
    });
  }, [fetchPosts]);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    applyFilters(category, styleType, searchTerm);
  };

  const filterByStyleType = (type: string) => {
    setStyleType(type);
    setCurrentPage(0);
    applyFilters(selectedCategory, type, searchTerm);

    if (type !== "all") {
      const uniqueCategories = Array.from(
        new Set(
          data
            .filter((post: any) => post.code.styleType.toLowerCase() === type)
            .map((post: any) => post.componentCategory.toLowerCase())
        )
      );
      setCategories(uniqueCategories as string[]);
    } else {
      const uniqueCategories = Array.from(
        new Set(data.map((post: any) => post.componentCategory.toLowerCase()))
      );
      setCategories(uniqueCategories as string[]);
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(0);
    applyFilters(selectedCategory, styleType, term);
  };

  const applyFilters = (category: string, type: string, term: string) => {
    let filtered = data;

    if (category !== "") {
      filtered = filtered.filter(
        (post: any) => post.componentCategory.toLowerCase() === category
      );
    }

    if (type !== "all") {
      filtered = filtered.filter(
        (post: any) => post.code.styleType.toLowerCase() === type
      );
    }

    if (term !== "") {
      filtered = filtered.filter(
        (post: any) =>
          post.componentName.toLowerCase().includes(term.toLowerCase()) ||
          post.componentCategory.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const paginatedPosts = paginate(filteredPosts, itemsPerPage);
  const totalPages = paginatedPosts.length;

  // Helper function for pagination with ellipsis
  const getPageNumbers = (totalPages: number, currentPage: number) => {
    const pageNumbers = [];
    const maxPages = 3; // Only show 3 pages at a time

    // Show the first page
    if (currentPage > 1) {
      pageNumbers.push(0);
    }

    // Show ellipsis before current page range if necessary
    if (currentPage > 2) {
      pageNumbers.push("ellipsis-prev");
    }

    // Show the current page and one page before and after it
    for (
      let i = Math.max(0, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }

    // Show ellipsis after the current page range if necessary
    if (currentPage < totalPages - 3) {
      pageNumbers.push("ellipsis-next");
    }

    // Show the last page
    if (currentPage < totalPages - 2) {
      pageNumbers.push(totalPages - 1);
    }

    return pageNumbers;
  };

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

  const resetFilters = () => {
    setSelectedCategory("");
    setStyleType("all");
    setSearchTerm("");
    setCurrentPage(0);
    setFilteredPosts(data); // Reset the filtered posts to the original full dataset
  };

  return (
    <div className="flex relative w-vw">
      <main className="mx-auto mb-20">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-center mb-4">
          <span className="text-yellow-500">UI</span> Gallery
        </h1>
        <div className="w-full mb-4 sticky top-16 z-10 max-md:gap-2 flex justify-center md:gap-2 items-center">
          <div className="inline-block bg-muted rounded-md">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="hover:bg-primary/10 hover:text-primary">
                  <List />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="flex flex-wrap gap-2 md:p-8 p-3">
                  <DrawerClose asChild>
                    <Button
                      variant={"outline"}
                      className={`cursor-pointer py-2 px-4 hover:border-primary hover:text-primary rounded-full mb-2 border border-solid bg-transparent ${
                        selectedCategory === ""
                          ? "font-bold hover:bg-primary bg-primary text-black hover:text-black"
                          : ""
                      }`}
                      onClick={() => filterByCategory("")}>
                      All
                    </Button>
                  </DrawerClose>
                  {categories.map((category) => (
                    <DrawerClose asChild key={category}>
                      <Button
                        key={category}
                        variant={"outline"}
                        className={`cursor-pointer capitalize py-2 px-4 hover:border-primary hover:text-primary rounded-full mb-2 border border-solid bg-transparent ${
                          selectedCategory === category
                            ? "font-bold hover:bg-primary bg-primary text-black hover:text-black"
                            : ""
                        }`}
                        onClick={() => filterByCategory(category)}>
                        {category}
                      </Button>
                    </DrawerClose>
                  ))}
                </div>
                {/* <PopoverArrow className="PopoverArrow" /> */}
              </DrawerContent>
            </Drawer>
            <Button
              onClick={resetFilters}
              variant={"ghost"}
              className="hover:bg-primary/10 hover:text-primary">
              <RefreshCcw />
            </Button>
          </div>
          <Tabs
            defaultValue="all"
            className="w-fit"
            onValueChange={(value) => filterByStyleType(value)}>
            <TabsList className="flex">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="css">
                <span className="flex items-center gap-2">
                  <CSSICON size={16} />
                  CSS
                </span>
              </TabsTrigger>
              <TabsTrigger value="tailwind">
                <span className="flex items-center gap-2">
                  <Tailwind size={16} />
                  Tailwind
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="max-md:hidden">
            <Input
              placeholder="Search Components..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <Suspense fallback={<Loader className="animate-spin" />}>
          {paginatedPosts.length > 1 && (
            <div className="flex justify-between w-screen mt-4 px-6 my-7">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage <= 0}>
                <ArrowLeft />
                <span className="max-md:hidden">Prev</span>
              </Button>
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= paginatedPosts.length - 1}>
                <ArrowRight />
                <span className="max-md:hidden">Next</span>
              </Button>
            </div>
          )}
          <section className="flex flex-wrap justify-center gap-10">
            {Array.isArray(paginatedPosts) && paginatedPosts.length > 0 ? (
              paginatedPosts[currentPage].map((post: any) => (
                <DynamicPostCard key={post._id} post={post} />
              ))
            ) : (
              <div>No posts available</div>
            )}
          </section>

          {/* ShadCN Pagination integration */}
          {totalPages > 1 && (
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 0))
                    }
                  />
                </PaginationItem>

                {pageNumbers.map((page, index) =>
                  page === "ellipsis-prev" || page === "ellipsis-next" ? (
                    <PaginationItem key={index}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page as number)}>
                        {(page as number) + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages - 1)
                      )
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </Suspense>
      </main>
      <aside
        className={cn(
          "fixed bottom-3 left-1/2 transform -translate-x-1/2 p-3 border-2 border-solid border-primary z-30",
          " bg-primary/20 backdrop-blur-xl backdrop-blur-safari rounded-full flex shadow shadow-primary"
        )}>
        <CreateNewComponent className="px-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform duration-300" />
      </aside>
    </div>
  );
};

export default PostList;
