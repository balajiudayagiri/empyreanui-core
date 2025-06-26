import React from "react";
import {
  CSSICON,
  Html5ColoredIcon,
  JSIcon,
  Tailwind,
} from "kodebloxui/utils/getIconFramwork";

const technologies = [
  {
    name: "HTML5",
    icon: <Html5ColoredIcon width={32} height={32} />,
    description:
      "Utilizing the latest HTML5 standards for structuring web content, ensuring accessibility and semantic markup.",
  },
  {
    name: "CSS3",
    icon: <CSSICON size={32} />,
    description:
      "Leveraging modern CSS3 features for styling, including Flexbox, Grid, and custom properties for dynamic theming.",
  },
  {
    name: "JavaScript",
    icon: <JSIcon size={32} />,
    description:
      "Powering interactive and dynamic user experiences with modern JavaScript (ES6+).",
  },
  {
    name: "Tailwind CSS",
    icon: <Tailwind size={32} />,
    description:
      "A utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
  },
];

const TechnologyStack: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-center text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Technology Stack
      </h2>
      <p className="text-center text-[#5c778a] text-base font-normal leading-relaxed mb-8">
        Our components are built with modern, robust, and scalable technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-start gap-4 p-6 rounded-xl border border-[#e5e5e5] bg-gradient-to-tl from-[#ffffff] to-[#f9f9f9] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex-shrink-0">{tech.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-[#101518] text-lg font-bold">{tech.name}</h3>
              <p className="text-[#5c778a] text-sm font-normal leading-normal">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
