import React from "react";
import { Code, Puzzle, Users } from "lucide-react";

const KeyFeatures: React.FC = () => {
  return (
    <div className="flex flex-col gap-14 px-8 py-16 ">
      <div className="flex flex-col gap-4 max-w-3xl mx-auto text-center">
        <h1 className="text-[#101518] text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Key Features
        </h1>
        <p className="text-[#5c778a] text-lg font-normal">
          KodeBloxUI offers a range of features to streamline your UI
          development workflow.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Component Library */}
        <div className="flex flex-col gap-6 rounded-3xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="text-[#00d4ff]">
            <Puzzle size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#101518] text-xl font-semibold">
              Component Library
            </h2>
            <p className="text-[#5c778a] text-sm font-normal">
              Access a vast library of pre-built and customizable UI components.
            </p>
          </div>
        </div>
        {/* Collaboration */}
        <div className="flex flex-col gap-6 rounded-3xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="text-[#ff7b00]">
            <Users size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#101518] text-xl font-semibold">
              Collaboration
            </h2>
            <p className="text-[#5c778a] text-sm font-normal">
              Work with your team on component design and development.
            </p>
          </div>
        </div>
        {/* Code Generation */}
        <div className="flex flex-col gap-6 rounded-3xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="text-[#6a00ff]">
            <Code size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#101518] text-xl font-semibold">
              Code Generation
            </h2>
            <p className="text-[#5c778a] text-sm font-normal">
              Generate code snippets for easy use in your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
