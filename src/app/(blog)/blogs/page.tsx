import { Button } from "empyreanui/components/ui/button";
import BlogsListing from "empyreanui/customComponents/blogs/BlogsListing";
import { Edit2, SquarePen } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="bg-[#e0e0e0] text-black min-h-dvh pt-14">
      <nav className="sticky top-14 z-10 bg-[#e0e0e0] px-5 py-2">
        <Link href={"./postblogs"}>
          <Button className="flex gap-3 bg-transparent border-2 border-solid ml-auto">
            <SquarePen className="size-5" />
            <span className="font-bold">Write a Blog</span>
          </Button>
        </Link>
      </nav>
      <main className="p-6 flex flex-col items-center">
        <BlogsListing />
      </main>
    </main>
  );
}

export default page;
