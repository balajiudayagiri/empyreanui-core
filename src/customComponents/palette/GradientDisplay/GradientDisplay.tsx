import React, { useEffect, useState } from "react";
import "./gradiantColors.css";
import { Palette } from "lucide-react";
import { ScrollToTopButton } from "@customcomponent";

interface GradientInfo {
  name: string;
  gradient: string;
}

const GradientDisplay: React.FC = () => {
  const [gradientInfos, setGradientInfos] = useState<GradientInfo[]>([]);
  const [copiedGradient, setCopiedGradient] = useState<string>("");

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const loadedGradients: GradientInfo[] = [];

    for (let i = 0; i < 360; i++) {
      const gradient = rootStyles
        .getPropertyValue(`--gradient-background-${i}`)
        .trim();
      if (gradient) {
        loadedGradients.push({
          name: `--gradient-background-${i}`,
          gradient,
        });
      }
    }

    setGradientInfos(loadedGradients);
  }, []);

  const copyToClipboard = (gradient: string, name: string) => {
    navigator.clipboard
      .writeText(`background-image: ${gradient};`)
      .then(() => {
        setCopiedGradient(name);
        setTimeout(() => setCopiedGradient(""), 2000); // reset after 2 seconds
      })
      .catch((err) => {
        console.error("Error copying to clipboard: ", err);
      });
  };

  const handleMouseOut = () => {
    setCopiedGradient("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-10 flex justify-center gap-2">
        <Palette size={48} />
        <span>Gradient Gallery</span>
      </h1>
      <p className="text-center mb-10 text-lg text-gray-300">
        Explore our extensive collection of beautiful gradient backgrounds.
        Choose any gradient to see how it enhances your design. Click on a
        gradient to copy the CSS code and elevate your projects with stunning
        color transitions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {gradientInfos.map((info, index) => (
          <div
            key={index}
            className="relative cursor-pointer border border-gray-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            onClick={() => copyToClipboard(info.gradient, info.name)}
            onMouseOut={handleMouseOut}
            aria-label={`Copy ${info.name}`}>
            <div
              className="gradient w-full h-40 sm:h-32 md:h-40 lg:h-48 xl:h-56 flex items-end justify-center"
              style={{ backgroundImage: info.gradient }}>
              <span className="bg-white bg-opacity-75 text-black p-1 rounded-lg m-1 text-xs font-bold shadow-md">
                {copiedGradient === info.name ? "Copied" : "Copy"}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default GradientDisplay;
