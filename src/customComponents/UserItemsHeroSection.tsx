import React, { useContext } from "react";
import { UserContext } from "kodebloxui/Providers/user-provider";
import ComponentsListing from "./ComponentsListing";
import BlogsListing from "./BlogsListing";
import { getRandomItems } from "kodebloxui/utils/getRandom";
import Link from "next/link";

function UserItemsHeroSection() {
  const { user } = useContext(UserContext);
  const blogsList = user.blog_ids;
  const componentList = user.component_ids;

  // Randomly select up to 2 components and blogs
  const randomComponents = getRandomItems(componentList, 2);
  const randomBlogs = getRandomItems(blogsList, 2);

  return (
    <div className="p-8">
      <h4 className="text-3xl font-bold mb-6 text-center text-primary">
        Your Posts
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Components Section */}
        <div className="border p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Components
          </h2>

          {/* Check if there are components, if not show a message */}
          {randomComponents.length > 0 ? (
            <ComponentsListing list={randomComponents} />
          ) : (
            <div className="text-center text-foreground">
              <p className="mb-4">You don&apos;t have any components yet.</p>
              <Link
                href="/postcomponent"
                className="bg-primary text-black font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
                Create Your First Component
              </Link>
            </div>
          )}
        </div>

        {/* Blogs Section */}
        <div className="border p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Blogs</h2>

          {/* Check if there are blogs, if not show a message */}
          {randomBlogs.length > 0 ? (
            <BlogsListing list={randomBlogs} />
          ) : (
            <div className="text-center text-foreground">
              <p className="mb-4">You don&apos;t have any blogs yet.</p>
              <Link
                href="/blogs"
                className="bg-primary text-black font-semibold py-2 px-4 rounded-lg hover:bg-secondary transition-colors">
                Write Your First Blog
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Fallback if there are less than 2 items in either section */}
      {(randomComponents.length < 2 || randomBlogs.length < 2) && (
        <div className="mt-20 text-center">
          <p className="mb-4">
            It looks like you&apos;re just getting started. Why not add more
            content?
          </p>
          <Link
            href="/browse"
            className="bg-primary text-black font-semibold py-2 px-4 rounded-lg transition-colors">
            Explore Ideas and Create More
          </Link>
        </div>
      )}
    </div>
  );
}

export default UserItemsHeroSection;
