import React from "react";

const ResourcesTutorials: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Resources & Tutorials
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* Getting Started Guide */}
        <div className="flex flex-col gap-3 p-4 rounded-xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-[#101518] text-lg font-bold">Getting Started Guide</h3>
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            Learn how to quickly set up and start using KodeBloxUI in your
            projects with our comprehensive guide.
          </p>
        </div>
        {/* Video Tutorials */}
        <div className="flex flex-col gap-3 p-4 rounded-xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-[#101518] text-lg font-bold">Video Tutorials</h3>
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            Watch our step-by-step video tutorials to master advanced features
            and build stunning UIs effortlessly.
          </p>
        </div>
        {/* API Documentation */}
        {/* <div className="flex flex-col gap-3 p-4 rounded-xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-[#101518] text-lg font-bold">API Documentation</h3>
          <p className="text-[#5c778a] text-sm font-normal leading-normal">
            Dive deep into the technical details of our components with our
            extensive API documentation.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ResourcesTutorials;
