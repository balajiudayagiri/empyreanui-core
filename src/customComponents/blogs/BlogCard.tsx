import React from "react";
import { BlogsTypes } from "./blogsTypes";
import { months } from "empyreanui/utils";
import Link from "next/link";
import Image from "next/image";

function BlogCard({ key, data }: { key: any; data: BlogsTypes }) {
  const date = new Date(data.date).toLocaleDateString();
  const formattedDate =
    months[parseInt(date.split("/")[1], 10)] + " / " + date.split("/")[2];

  return (
    <Link href={`/viewblog/${data._id}`}>
      <div
        key={key}
        className="shadow-cardShadow rounded-3xl p-6 h-full hover:scale-105 transition-transform duration-200 ease-out w-full max-w-md mx-auto bg-white cursor-pointer">
        <h1 className="text-2xl lg:text-3xl font-bold capitalize mb-4 text-gray-800">
          {data.title}
        </h1>
        {data.thumbnail ? (
          <Image
            src={data.thumbnail}
            alt={data.thumbnail}
            height={1000}
            width={1000}
            className="w-full h-40 mb-3"
          />
        ) : null}
        <h2 className="mb-4 text-gray-600">
          <span className="font-semibold capitalize">{data.author}</span>{" "}
          <span className="text-sm text-gray-500">on {formattedDate}</span>
        </h2>
        <p className="line-clamp-4 text-gray-700 leading-relaxed">
          {data.content}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
