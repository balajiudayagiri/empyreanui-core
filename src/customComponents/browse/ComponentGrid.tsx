import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Loader } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "kodebloxui/components/ui/pagination";

const DynamicPostCard = dynamic(() =>
  import("@customcomponent").then((mod) => mod.PostCard)
);

interface ComponentGridProps {
  isLoading: boolean;
  filteredPosts: any[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  pageNumbers: (string | number)[];
}

export const ComponentGrid = React.memo(
  ({
    isLoading,
    filteredPosts,
    totalPages,
    currentPage,
    setCurrentPage,
    pageNumbers,
  }: ComponentGridProps) => {
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 p-4 max-md:mx-auto">
          {!isLoading &&
          Array.isArray(filteredPosts) &&
          filteredPosts.length > 0 ? (
            filteredPosts.map((post: any) => (
              <DynamicPostCard key={post._id} post={post} />
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-base font-normal leading-normal text-[#4e7997]">
              {" "}
              No components found matching your criteria.{" "}
            </div>
          )}
        </section>

        {totalPages > 1 && (
          <Pagination className="mt-10 cursor-pointer min-w-dvw">
            <PaginationContent>
              <PaginationItem>
                {" "}
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 0))
                  }
                />{" "}
              </PaginationItem>
              {pageNumbers.map((page, index) =>
                page === "ellipsis-prev" || page === "ellipsis-next" ? (
                  <PaginationItem key={index}>
                    {" "}
                    <PaginationEllipsis />{" "}
                  </PaginationItem>
                ) : (
                  <PaginationItem key={index}>
                    {" "}
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => setCurrentPage(page as number)}>
                      {" "}
                      {(page as number) + 1}{" "}
                    </PaginationLink>{" "}
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                {" "}
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
                  }
                />{" "}
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </Suspense>
    );
  }
);

ComponentGrid.displayName = "ComponentGrid";
