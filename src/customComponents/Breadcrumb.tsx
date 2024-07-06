"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "empyreanui/components/ui/breadcrumb";
import { Book, BookOpenIcon } from "lucide-react";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").splice(1);

  if (segments.length < 2) {
    return null; // Or some fallback UI
  }

  const mainSegment = "blogs"; // Change to "blogs"
  const subSegments = segments[1].split("-");
  subSegments.pop(); // Remove the last element which is the ID
  const combinedSubSegments = subSegments.join(" ");

  return (
    <Breadcrumb className="text-black px-4 py-2 bg-white/50 sticky top-14 backdrop-blur-lg backdrop-blur-safari">
      <BreadcrumbList>
        <BreadcrumbItem className="text-black transition-all duration-200 hover:font-bold hover:scale-105">
          <BreadcrumbLink
            className=" hover:text-black capitalize flex items-center gap-2"
            href={`/${mainSegment}`}>
            <BookOpenIcon className="size-3" />
            {mainSegment}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-black" />
        <BreadcrumbItem className="text-black">
          <BreadcrumbPage className="text-black capitalize">
            {combinedSubSegments}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
