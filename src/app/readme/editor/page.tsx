import ReadmeEditor from "empyreanui/customComponents/_readme/ReadmeEditor";
import React from "react";

export async function generateMetadata() {
  return {
    title: "README Editor | Empyrean UI",
    description:
      "Manually edit and add snippets and templates to your README files effortlessly with our advanced editor.",
    keywords: [
      "README Editor",
      "README documentation",
      "Empyrean UI",
      "Next.js",
      "manual README editing",
      "snippets",
      "templates",
      "developer tools",
      "GitHub README editor",
      "markdown editor",
      "software documentation",
      "project documentation",
      "README creator",
      "open source README",
      "documentation tool",
      "README templates",
      "developer productivity",
      "coding tools",
      "software project setup",
      "README examples",
      "Empyrean UI tools",
      "code documentation editor",
      "project setup editor",
      "README best practices",
      "intelligent README editor",
      "README editing tool",
      "README generator",
      "customizable README editor",
      "efficient documentation tool",
      "professional README editing",
      "seamless README editing",
      "quick README setup",
      "comprehensive README editor",
      "project documentation editor",
      "tech documentation tool",
      "README tool for developers",
    ],
    author: "Balaji Udayagiri",
    openGraph: {
      title: "README Editor | Empyrean UI",
      description:
        "Manually edit and add snippets and templates to your README files effortlessly with our advanced editor.",
      type: "website",
    },
  };
}

function Page() {
  return (
    <div>
      <ReadmeEditor />
    </div>
  );
}

export default Page;
