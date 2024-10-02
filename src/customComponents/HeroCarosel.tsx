import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

const carouselVariants = {
  animate: {
    x: [0, -1000], // Initial translation, will be adjusted dynamically
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20, // Adjust the duration to control the speed
        ease: "linear",
      },
    },
  },
};

// Carousel Data
const features: Feature[] = [
  {
    title: "Build with HTML",
    description:
      "Use the power of HTML to create dynamic, reusable components that work across browsers.",
  },
  {
    title: "Style with CSS/Tailwind",
    description:
      "Customize your components with CSS or Tailwind's utility-first framework for a seamless design.",
  },
  {
    title: "Integrate with JavaScript",
    description:
      "Add functionality to your components using JavaScript, making them interactive and engaging.",
  },
  {
    title: "README Generator",
    description:
      "Easily generate professional README files based on prompts or documents. Simply input the details, and download the generated README with ease.",
  },
  {
    title: "JSDoc Generator",
    description:
      "Automatically generate detailed JSDoc comments for your JavaScript code, enhancing your code's documentation and readability.",
  },
  {
    title: "README Editor",
    description:
      "Edit your existing README files with a simple editor, allowing for quick modifications and updates to your project documentation.",
  },
  {
    title: "Color Palette",
    description:
      "Discover vibrant color palettes to enhance your designs, offering a wide selection of colors for creative projects.",
  },
  {
    title: "Image Color Extractor",
    description:
      "Extract prominent colors from images for your design inspiration and use the color palette in your projects.",
  },
  {
    title: "Gradient Generator",
    description:
      "Create beautiful gradient backgrounds easily by adjusting color stops and direction.",
  },
];

function FeatureCarousel() {
  return (
    <motion.div
      className="carousel-container overflow-hidden w-fit relative mt-12"
      variants={carouselVariants}
      animate="animate">
      {/* Wrap the carousel in a container to control the looping */}
      <div className="flex space-x-6 w-fit">
        {/* Duplicate the features array to allow seamless looping */}
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="p-6 min-w-[400px] border rounded-lg shadow-lg bg-primary/10 text-primary backdrop-blur-safari">
            <h3 className="text-xl font-bold text-foreground">
              {feature.title}
            </h3>
            <p className="text-md text-foreground mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default FeatureCarousel;
