import React from "react";
import { BlogsTypes } from "./blogsTypes";
import { months } from "empyreanui/utils";
import Link from "next/link";

function BlogCard({ key, data }: { key: any; data: BlogsTypes }) {
  const date = new Date(data.date).toLocaleDateString();
  const formatedDate =
    months[date.split("/")[1] as unknown as number] +
    " / " +
    date.split("/")[2];
  return (
    <Link href={`/viewblog/${data._id}`}>
      <div
        key={key}
        className="shadow-cardShadow rounded-3xl p-5 hover:scale-105 transition-all duration-100 w-full">
        <h1 className="text-4xl capitalize font-bold">{data.title}</h1>
        <h1 className="mb-9">
          <span className="font-bold capitalize">{data.author}</span> -{" "}
          <span className="text-sm"> on {formatedDate}</span>
        </h1>
        <p className="line-clamp-4">{data.content}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
