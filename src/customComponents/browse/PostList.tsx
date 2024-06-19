"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useFetchPosts } from "@apiservices";
import { Loader, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { Button } from "empyreanui/components/ui/button";

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
        const uniqueCategories = Array.from(
          new Set(data.map((post: any) => post.componentCategory))
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
        (post: any) => post.componentCategory === category
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
    <div className="flex relative">
      <aside className="w-1/5 p-4 border-r border h-dvh backdrop-blur-lg sticky top-14 max-lg:hidden">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="max-h-[calc(100dvh-124px)] overflow-scroll">
          <li
            className={`cursor-pointer py-2 px-4 hover:bg-gray-500/50 rounded-lg mb-2 ${
              selectedCategory === ""
                ? "font-bold hover:bg-primary bg-primary text-black"
                : ""
            }`}
            onClick={() => filterByCategory("")}>
            All
          </li>
          {categories.map((category) => (
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
          ))}
        </ul>
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden sticky top-14">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
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
      <main className="w-3/4 p-4">
        <h1 className="text-3xl font-black mb-4 text-center text-primary">
          Browse
        </h1>
        <section className="flex flex-wrap justify-center gap-3">
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
    </div>
  );
};

export default PostList;
