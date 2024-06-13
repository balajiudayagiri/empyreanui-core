import IframeRenderer from "empyreanui/customComponents/IframeRenderer";
import React from "react";

interface PostCardProps {
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
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  console.log("PostCard received post:", post); // Debugging log

  return (
    <div className="border p-4 rounded-lg overflow-hidden shadow-md mb-4 h-96 w-72">
      <h2 className="text-lg font-bold">{post.componentName}</h2>
      <p className="text-sm text-gray-600">
        By {post.user.firstName} {post.user.lastName}
      </p>
      <p className="text-sm text-gray-600">
        {new Date(post.date).toLocaleDateString()}
      </p>
      {/* <div className="mt-2">
        <h3 className="text-md font-semibold">HTML:</h3>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          {post.code.htmlCode}
        </pre>
      </div>
      {post.code.styleType === "css" && (
        <div className="mt-2">
          <h3 className="text-md font-semibold">CSS:</h3>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
            {post.code.cssCode}
          </pre>
        </div>
      )}
      {post.code.styleType === "tailwind" && (
        <div className="mt-2">
          <h3 className="text-md font-semibold">Tailwind CSS:</h3>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
            {post.code.tailwindCode}
          </pre>
        </div>
      )} */}
      <IframeRenderer
        htmlContent={post.code.htmlCode}
        cssContent={post.code.cssCode}
        cssFramework={post.code.styleType}
      />
    </div>
  );
};

export default PostCard;
