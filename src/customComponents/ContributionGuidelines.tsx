import React from "react";

const ContributionGuidelines: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contribution Guidelines
      </h2>
      <div className="flex flex-col gap-6">
        <p className="text-[#5c778a] text-sm font-normal leading-normal">
          We are excited to have you contribute to KodeBloxUI! Please follow
          these guidelines to make sure your contributions are accepted
          smoothly:
        </p>
        <ul className="list-disc pl-6">
          <li>Fork the repository and create a new branch for your changes.</li>
          <li>Write clear and concise commit messages.</li>
          <li>
            Submit a pull request and describe the changes you&apos;ve made.
          </li>
          <li>Ensure your code passes all tests before submitting.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContributionGuidelines;
