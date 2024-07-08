import React from "react";
import { BlogsTypes } from "./blogsTypes";
import {
  getAvatarBgColor,
  getAvatarInitials,
  makeUrlFriendly,
  months,
} from "empyreanui/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "empyreanui/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "empyreanui/components/ui/avatar";

function BlogCard({ key, data }: { key: any; data: BlogsTypes }) {
  const date = new Date(data.date).toLocaleDateString();
  const formattedDate =
    months[parseInt(date.split("/")[1], 10)] + " / " + date.split("/")[2];

  return (
    <div
      key={key}
      className="group h-full max-md:h-fit shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out w-full max-w-md mx-auto bg-white cursor-pointer flex flex-col">
      {data.thumbnail ? (
        <Image
          src={data.thumbnail}
          alt={data.title}
          width={1000}
          height={1000}
          className="transition-transform duration-300 group-hover:scale-105 h-48 w-full"
        />
      ) : null}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h1 className="text-lg font-bold capitalize mb-2 text-gray-800">
            {data.title}
          </h1>

          <p className="line-clamp-3 text-gray-700 leading-relaxed text-sm mb-4">
            {data.content}
          </p>
        </div>

        <div className="flex justify-between font-medium items-center">
          <div className="flex gap-3">
            <Avatar className="size-8">
              <AvatarImage src="" alt="@shadcn" />
              <AvatarFallback
                className="text-white text-sm"
                style={{
                  backgroundColor: getAvatarBgColor(),
                }}>
                {getAvatarInitials(data.author)}
              </AvatarFallback>
            </Avatar>
            <span>
              <h2 className="text-[10px]  text-gray-600">{data.author}</h2>
              <h5 className="text-[10px]  text-gray-600">{formattedDate}</h5>
            </span>
          </div>
          <Link href={`/viewblog/${makeUrlFriendly(data.title)}-${data._id}`}>
            <Button className="border-2 border-solid border-black bg-transparent font-semibold rounded-full hover:bg-black/20">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
