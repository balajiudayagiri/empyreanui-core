"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFetchPosts } from "@apiservices";
import { List, Loader, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { Button } from "empyreanui/components/ui/button";
import { CreateNewComponent } from "@customcomponent";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "empyreanui/components/ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";

const DynamicPostCard = dynamic(() =>
  import("@customcomponent").then((mod) => mod.PostCard)
);

const PostList: React.FC = () => {
  const { fetchPosts, isLoading, error, data } = useFetchPosts();
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  useEffect(() => {
    fetchPosts({
      onSuccess: (data) => {
        console.log("Posts fetched successfully:", data);
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
    if (category === "") {
      setFilteredPosts(data);
    } else {
      const filtered = data.filter(
        (post: any) => post.componentCategory.toLowerCase() === category
      );
      setFilteredPosts(filtered);
    }
  };

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
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="lg:hidden fixed top-16 left-2 z-30 p-2">
            <List />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="backdrop-blur-xl">
          <SheetHeader>
            <SheetTitle>Categories</SheetTitle>
          </SheetHeader>
          <ul className="max-h-[calc(100dvh-60px)] overflow-scroll">
            <SheetClose asChild>
              <li
                className={`cursor-pointer py-2 px-4 hover:bg-gray-500/50 rounded-lg mb-2 ${
                  selectedCategory === ""
                    ? "font-bold hover:bg-primary bg-primary text-black"
                    : ""
                }`}
                onClick={() => filterByCategory("")}>
                All
              </li>
            </SheetClose>
            {categories.map((category) => (
              <SheetClose asChild key={category}>
                <li
                  key={category}
                  className={`cursor-pointer py-2 px-4 hover:bg-gray-500/50 rounded-lg mb-2 ${
                    selectedCategory === category
                      ? "font-bold hover:bg-primary bg-primary text-black"
                      : ""
                  }`}
                  onClick={() => filterByCategory(category)}>
                  {category}
                </li>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
      <main className="md:p-4 w-vw mx-auto mb-20">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-center mb-4">
          <span className="text-yellow-500">UI</span> Gallery
        </h1>
        <section className="flex flex-wrap justify-center gap-10">
          <Suspense fallback={<Loader className="animate-spin" />}>
            {Array.isArray(filteredPosts) && filteredPosts.length > 0 ? (
              filteredPosts.map((post: any) => (
                <DynamicPostCard key={post._id} post={post} />
              ))
            ) : (
              <div>No posts available</div>
            )}
          </Suspense>
        </section>
      </main>
      {/* popover for larger screen */}
      <Popover>
        <aside className="fixed bottom-3 left-1/2 transform -translate-x-1/2 p-3 border-2 border-solid border-primary bg-primary/20 backdrop-blur-xl  rounded-full flex max-lg:hidden">
          <PopoverTrigger asChild>
            <Button className="mr-2 rounded-full px-2 py-1">
              <List />
            </Button>
          </PopoverTrigger>
          <PopoverContent sideOffset={15} className="w-96 max-w-vw rounded-3xl">
            <div className=" flex flex-wrap gap-2">
              <Button
                variant={"outline"}
                className={`cursor-pointer  py-2 px-4 hover:border-primary hover:text-primary rounded-full mb-2 border border-solid bg-transparent ${
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
                  className={`cursor-pointer capitalize  py-2 px-4 hover:border-primary hover:text-primary rounded-full mb-2 border border-solid bg-transparent ${
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
          <CreateNewComponent className="px-3 rounded-full" />
        </aside>
      </Popover>
    </div>
  );
};

export default PostList;
