import Link from "next/link";
// import { Metadata } from "next";

export async function generateMetadata() {
  return {
    title: "README Editor | Empyrean UI",
    description:
      "Manually edit and add snippets and templates to your README files effortlessly with our advanced editor.",
    keywords:
      "README Editor, README documentation, Empyrean UI, Next.js, manual README editing, snippets, templates, developer tools, GitHub README editor, markdown editor, software documentation, project documentation, README creator, open source README, documentation tool, README templates, developer productivity, coding tools, software project setup, README examples, Empyrean UI tools, code documentation editor, project setup editor, README best practices, intelligent README editor, README editing tool, README generator, customizable README editor, efficient documentation tool, professional README editing, seamless README editing, quick README setup, comprehensive README editor, project documentation editor, tech documentation tool, README tool for developers",
    author: "Balaji Udayagiri",
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-5">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Create Stunning{" "}
          <span className="text-primary font-extrabold">README</span> Files
          Effortlessly
        </h1>
        <p className="text-lg md:text-xl  mb-8">
          Use our powerful README generator to craft professional and
          eye-catching README files for your projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="/readme/editor"
            className="bg-primary text-white font-semibold hover:bg-blue-800 px-8 py-4 rounded-full shadow-md transition duration-300">
            Create Readme
          </Link>
          <Link
            href="/readme/learn-more"
            className="text-blue-500 font-semibold hover:bg-gray-100 px-8 py-4 rounded-full shadow-md transition duration-300">
            Learn More
          </Link>
          {/* <Link
            href="/readme-ai"
            className="bg-primary text-white font-semibold hover:bg-blue-800 px-8 py-4 rounded-full shadow-md transition duration-300">
            Use Readme.ai
          </Link> */}
        </div>
      </div>
    </div>
  );
}
