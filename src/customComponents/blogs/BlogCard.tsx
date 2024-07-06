import React from "react";
import { BlogsTypes } from "./blogsTypes";
import { makeUrlFriendly, months } from "empyreanui/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "empyreanui/components/ui/button";

function BlogCard({ key, data }: { key: any; data: BlogsTypes }) {
  const date = new Date(data.date).toLocaleDateString();
  const formattedDate =
    months[parseInt(date.split("/")[1], 10)] + " / " + date.split("/")[2];

  return (
    <div
      key={key}
      className="group h-full shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-md mx-auto bg-white cursor-pointer flex flex-col">
      {data.thumbnail ? (
        <div className="relative w-full h-48">
          <Image
            src={data.thumbnail}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h1 className="text-2xl font-bold capitalize mb-2 text-gray-800">
            {data.title}
          </h1>

          <p className="line-clamp-3 text-gray-700 leading-relaxed text-sm mb-4">
            {data.content}
          </p>
        </div>
        <h2 className="text-xs font-semibold text-gray-600 mt-4">
          {data.author} on {formattedDate}
        </h2>
        <div className="flex justify-between mt-4">
          <div></div>
          <Link href={`/viewblog/${makeUrlFriendly(data.title)}-${data._id}`}>
            <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
