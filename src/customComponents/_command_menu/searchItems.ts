import React from "react";

type Item = {
  link: string;
  title: string | React.ReactNode;
  description: string;
};

export const searchItems: Item[] = [
  {
    link: "/browse",
    title: "UI Gallery",
    description:
      "Explore our extensive Gallery, crafted by users like you. Add your own components or use and download others for free. Support for Tailwind CSS and plain CSS.",
  },
  {
    link: "/blogs",
    title: "EmpyreanUI Blogs",
    description:
      "Discover the latest news, tips, and insights from our experts. Stay updated with the newest trends and stories that matter to you.",
  },
  {
    link: "/readme",
    title: "Readme Generator",
    description:
      "Use our powerful README generator to craft professional and eye-catching README files for your projects.",
  },
  {
    link: "/colorpalette",
    title: "Color Palette",
    description:
      "Discover a vibrant array of colors to enhance your designs. Click on any color to copy its value to your clipboard and easily integrate it into your projects.",
  },
  {
    link: "/gradientpalette",
    title: "Gradient Palette",
    description:
      "Explore our extensive collection of beautiful gradient backgrounds. Choose any gradient to see how it enhances your design. Click on a gradient to copy the CSS code and elevate your projects with stunning color transitions.",
  },
  {
    link: "/imagecolorextractor",
    title: "Image Color Extractor",
    description:
      "Use this tool to extract the most prominent colors from your image. Simply upload an image and adjust the scale slider to control the precision of color extraction.",
  },
  {
    link: "/gradiantgenerator",
    title: "Gradient Generator",
    description:
      "Create beautiful gradients easily by adding and adjusting color stops. Choose from different gradient types and customize the angle or position to suit your design needs.",
  },
  // { link: "/profile", title: "Profile", description: "View your profile" },
  // { link: "/profile", title: "Profile", description: "View your profile" },
  // { link: "/profile", title: "Profile", description: "View your profile" },
];
