"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFetchPosts } from "@apiservices";
import { ArrowLeft, ArrowRight, List, Loader } from "lucide-react";
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
  const itemsPerPage = 10; // Define the number of items per page

  useEffect(() => {
    fetchPosts({
      onSuccess: (data) => {
        setFilteredPosts(data);

        // Normalize category names to lower case
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
    setCurrentPage(0); // Reset to the first page when category changes
    applyFilters(category, styleType);
  };

  const filterByStyleType = (type: string) => {
    setStyleType(type);
    setCurrentPage(0); // Reset to the first page when style type changes
    applyFilters(selectedCategory, type);

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

  const applyFilters = (category: string, type: string) => {
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

    setFilteredPosts(filtered);
  };

  const paginatedPosts = paginate(filteredPosts, itemsPerPage);

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
    <div className="flex relative w-vw">
      <main className="mx-auto mb-20">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-center mb-4">
          <span className="text-yellow-500">UI</span> Gallery
        </h1>
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
          <div className="w-full mb-4 sticky top-16 z-10">
            <Tabs
              defaultValue="all"
              className="w-fit mx-auto"
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
          </div>
          <section className="flex flex-wrap justify-center gap-10">
            {Array.isArray(paginatedPosts) && paginatedPosts.length > 0 ? (
              paginatedPosts[currentPage].map((post: any) => (
                <DynamicPostCard key={post._id} post={post} />
              ))
            ) : (
              <div>No posts available</div>
            )}
          </section>
          {paginatedPosts.length > 1 && (
            <div className="flex justify-between w-screen px-6 mt-16 mb-7">
              <Button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage <= 0}>
                <ArrowLeft />
                <span className="max-md:hidden">Prev</span>
              </Button>
              <span className="max-md:hidden">
                {paginatedPosts.map((_, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    onClick={() => setCurrentPage(index)}
                    className={cn(
                      "mx-1",
                      currentPage === index
                        ? "font-bold bg-primary text-black"
                        : ""
                    )}>
                    {index + 1}
                  </Button>
                ))}
              </span>
              <span className="md:hidden">
                <span className="border rounded-lg size-10 flex items-center justify-center">
                  {currentPage + 1}/{paginatedPosts.length}
                </span>
              </span>
              <Button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= paginatedPosts.length - 1}>
                <ArrowRight />
                <span className="max-md:hidden">Next</span>
              </Button>
            </div>
          )}
        </Suspense>
      </main>
      {/* popover for larger screen */}
      <Popover>
        <aside
          className={cn(
            "fixed bottom-3 left-1/2 transform -translate-x-1/2 p-3 border-2 border-solid border-primary z-10",
            " bg-primary/20 backdrop-blur-xl  rounded-full flex shadow shadow-primary"
          )}>
          <PopoverTrigger asChild>
            <Button className="mr-2 rounded-full px-2 py-1 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
              <List />
            </Button>
          </PopoverTrigger>
          <PopoverContent sideOffset={15} className="w-96 max-w-vw rounded-3xl">
            <div className="flex flex-wrap gap-2">
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
              {categories.map((category) => (
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
              ))}
            </div>
            <PopoverArrow className="PopoverArrow" />
          </PopoverContent>
          <CreateNewComponent className="px-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform duration-300" />
        </aside>
      </Popover>
    </div>
  );
};

export default PostList;
