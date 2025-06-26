import React from "react";
import { Rocket, ShoppingCart, Cloud, BarChart } from "lucide-react"; // Import icons from lucide-react

const caseStudiesData = [
  {
    icon: <Rocket className="size-full text-primary" strokeWidth={0.6} />,
    title: "Streamlining UI Development for Applications",
    description:
      "Learn how KodeBloxUI helped a tech startup accelerate their development process and improve product quality.",
  },
  {
    icon: <ShoppingCart className="size-full text-primary" strokeWidth={0.6} />,
    title: "Enhancing User Experience in E-commerce Platform",
    description:
      "Discover how an e-commerce platform leveraged KodeBloxUI to create a more engaging and intuitive user experience.",
  },
  {
    icon: <Cloud className="size-full text-primary" strokeWidth={0.6} />,
    title: "Optimizing Performance for a SaaS Platform",
    description:
      "See how KodeBloxUI helped a SaaS company enhance their application's performance and scalability by leveraging modular UI components.",
  },
  {
    icon: <BarChart className="size-full text-primary" strokeWidth={0.6} />,
    title: "Enhancing Data Analytics Integration",
    description:
      "Learn how KodeBloxUI facilitated seamless integration of complex data analytics tools, providing actionable insights for businesses.",
  },
];

const CaseStudyItem = ({
  icon,
  title,
  description,
  reverse = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
}) => (
  <div
    className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}>
    <div className="flex-shrink-0 flex items-center justify-center w-48 h-48 rounded-lg">
      {icon}
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-[#101518] text-xl font-bold leading-normal mb-2">
        {title}
      </h3>
      <p className="text-[#5c778a] text-base font-normal leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <div className="flex flex-col gap-16 p-4 mt-8">
        {caseStudiesData.map((study, index) => (
          <CaseStudyItem
            key={study.title}
            icon={study.icon}
            title={study.title}
            description={study.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
