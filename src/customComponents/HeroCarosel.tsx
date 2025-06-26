import { InfiniteMovingCards } from "kodebloxui/components/ui/infinite-moving-cards";
import { motion } from "framer-motion";

interface Feature {
  quote: string;
  name: string;
  title: string;
}
// Carousel Data
const features: Feature[] = [
  {
    quote:
      "Use the power of HTML to create dynamic, reusable components that work across browsers.",
    name: "Build with HTML",
    title: "Feature",
  },
  {
    quote:
      "Customize your components with CSS or Tailwind's utility-first framework for a seamless design.",
    name: "Style with CSS/Tailwind",
    title: "Feature",
  },
  {
    quote:
      "Add functionality to your components using JavaScript, making them interactive and engaging.",
    name: "Integrate with JavaScript",
    title: "Feature",
  },
  {
    quote:
      "Easily generate professional README files based on prompts or documents. Simply input the details, and download the generated README with ease.",
    name: "README Generator",
    title: "Feature",
  },
  {
    quote:
      "Automatically generate detailed JSDoc comments for your JavaScript code, enhancing your code's documentation and readability.",
    name: "JSDoc Generator",
    title: "Feature",
  },
  {
    quote:
      "Edit your existing README files with a simple editor, allowing for quick modifications and updates to your project documentation.",
    name: "README Editor",
    title: "Feature",
  },
  {
    quote:
      "Discover vibrant color palettes to enhance your designs, offering a wide selection of colors for creative projects.",
    name: "Color Palette",
    title: "Feature",
  },
  {
    quote:
      "Extract prominent colors from images for your design inspiration and use the color palette in your projects.",
    name: "Image Color Extractor",
    title: "Feature",
  },
  {
    quote:
      "Create beautiful gradient backgrounds easily by adjusting color stops and direction.",
    name: "Gradient Generator",
    title: "Feature",
  },
];

function FeatureCarousel() {
  return (
    <InfiniteMovingCards items={features} direction="right" speed="slow" />
  );
}

export default FeatureCarousel;
