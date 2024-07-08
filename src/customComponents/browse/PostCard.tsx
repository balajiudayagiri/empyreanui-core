import React from "react";
import Link from "next/link";
import { IframeRenderer } from "@customcomponent";
import { CodeXml } from "lucide-react";
import { GetIconFramework } from "empyreanui/utils/getIconFramwork";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "empyreanui/components/ui/avatar";
import { getAvatarBgColor, getAvatarInitials } from "empyreanui/utils";

export interface PostCardProps {
  post: {
    _id: string;
    user: {
      firstName: string;
      lastName: string;
    };
    componentName: string;
    componentCategory: string;
    code: {
      styleType: string;
      htmlCode: string;
      cssCode: string;
      tailwindCode: string;
      javascriptCode: string;
    };
    date: string;
    slug: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group h-full max-w-full backdrop-blur-2xl backdrop-blur-safari bg-primary/10 rounded-xl cursor-pointer border border-solid border-primary/35">
      <div className="relative rounded-t-xl overflow-hidden">
        <IframeRenderer
          htmlContent={post.code.htmlCode}
          cssContent={post.code.cssCode}
          cssFramework={post.code.styleType}
          style={{
            height: 460,
            width: 360,
            border: "none",
            borderRadius: "12px 12px 0 0",
          }}
          jsContent={post.code.javascriptCode}
        />
        <span className="absolute text-black top-2 left-2 font-bold text-xs  p-1 rounded">
          <GetIconFramework
            size={24}
            framework={post.code.styleType as "css" | "tailwind"}
          />
        </span>
        <Link href={`/viewcomponent/${post._id}`}>
          <div className="absolute bg-primary text-black font-bold opacity-0 group-hover:opacity-100 flex items-center p-2 gap-2 rounded-xl bottom-2 right-2 transition-opacity">
            <CodeXml size={20} />
            <span>Code</span>
          </div>
        </Link>
      </div>
      <div className="px-5 py-4 flex flex-col">
        <span className="text-lg font-bold text-primary capitalize mb-2">
          {post.componentName}
        </span>
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage
              src=""
              alt={`${post.user.firstName} ${post.user.lastName}`}
            />
            <AvatarFallback
              className="text-sm"
              style={{ backgroundColor: getAvatarBgColor() }}>
              {getAvatarInitials(post.user.firstName + post.user.lastName)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {post.user.firstName} {post.user.lastName}
            </span>
            <span className="text-[10px] text-gray-300">
              {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
