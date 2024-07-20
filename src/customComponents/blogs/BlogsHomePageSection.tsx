import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "empyreanui/components/ui/button";

const BlogsSvg = dynamic(() => import("./BlogsSvg"), { ssr: false });

function BlogHomePageSection() {
  return (
    <div className="flex max-lg:flex-col-reverse md:mx-5 gap-6  max-md:px-4">
      <div className="lg:w-1/2 lg:h-[inherit] flex justify-center items-center">
        <div className="text-primary">
          <h1 className="text-3xl md:text-6xl font-bold  leading-tight mb-4 text-purple-500 flex items-center text-center justify-center gap-2">
            <span>EmpyreanUI Blogs</span>
          </h1>
          <p className="text-center mb-10 text-lg text-gray-300">
            Discover the latest news, tips, and insights from our experts. Stay
            updated with the newest trends and stories that matter to you.
          </p>
          <div className="w-full text-center">
            <Link href={"/readmegenerator"}>
              <Button className="font-semibold bg-purple-500 hover:bg-purple-700 text-white">
                Go to EmpyreanUI Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <BlogsSvg className="lg:w-1/2 max-w-full  max-lg:h-fit" />
    </div>
  );
}

export default BlogHomePageSection;
