import React from "react";
import Link from "next/link";
import { IframeRenderer } from "@customcomponent";
import { CodeXml } from "lucide-react";
import { GetIconFramework } from "empyreanui/utils/getIconFramwork";

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
    };
    date: string;
    slug: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group h-full max-w-full backdrop-blur-2xl bg-primary/10 rounded-xl cursor-pointer border border-solid border-primary/35">
      <div className="relative rounded-lg overflow-hidden bg-white">
        <IframeRenderer
          htmlContent={post.code.htmlCode}
          cssContent={post.code.cssCode}
          cssFramework={post.code.styleType}
          style={{
            height: 460,
            width: 360,
          }}
        />
        <span className="absolute text-black top-2 left-2 font-bold text-xs">
          <GetIconFramework
            size={24}
            framework={post.code.styleType as "css" | "tailwind"}
          />
        </span>
        <Link href={`/viewcomponent/${post._id}`}>
          <div className="absolute  bg-primary text-black font-bold  opacity-0 group-hover:opacity-100 flex p-2 gap-2 rounded-xl bottom-1 right-1">
            <CodeXml /> <span>Code</span>
          </div>
        </Link>
      </div>
      <div className="px-5 py-1 pb-3 flex flex-col">
        <span className="text-lg font-bold text-primary capitalize">
          {post.componentName}
        </span>{" "}
        <span className="text-sm mb-2">
          By {post.user.firstName} {post.user.lastName}
        </span>
        <div>
          <p className="text-[.5rem]">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
