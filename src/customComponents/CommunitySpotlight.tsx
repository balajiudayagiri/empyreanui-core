import React from "react";

const CommunitySpotlight: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Community Spotlight
      </h2>
      <div className="flex flex-col gap-6 px-4 py-6">
        {/* Spotlighted Member */}
        <div className="flex flex-col gap-4 items-center">
          <div
            className="w-24 h-24 rounded-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://randomuser.me/api/portraits/men/32.jpg")',
            }}></div>
          <h3 className="text-[#101518] text-lg font-bold">John Doe</h3>
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            John has been contributing to our project for over a year and has
            helped improve the user interface significantly!
          </p>
        </div>
        {/* More Spotlighted Members */}
        <div className="flex flex-col gap-4 items-center">
          <div
            className="w-24 h-24 rounded-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://randomuser.me/api/portraits/men/33.jpg")',
            }}></div>
          <h3 className="text-[#101518] text-lg font-bold">Jane Smith</h3>
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            Jane has developed some of the most popular components in our
            library. Her work continues to inspire others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunitySpotlight;
