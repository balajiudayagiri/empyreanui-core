"use client";
import { Button } from "kodebloxui/components/ui/button";
import { cn } from "kodebloxui/lib/utils";
import React, { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <style>{`
      @keyframes slideIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slideIn {
  animation: slideIn 0.5s ease-out forwards;
}
      `}</style>
      {isVisible && (
        <Button
          className={cn(
            "p-0",
            "w-9 h-9 rounded-full border-none font-bold flex items-center justify-center cursor-pointer",
            "transition-all duration-300 overflow-hidden relative",
            "lg:hover:w-28 lg:hover:rounded-[50px] lg:hover:duration-300 lg:hover:bg-primary",
            "before:absolute before:bottom-[-20px] lg:before:content-['Back_to_Top'] before:text-current before:text-[0px]",
            "hover:before:text-[13px] hover:before:opacity-100 hover:before:bottom-[unset] hover:before:duration-300",
            "group",
            // Add the slide-in animation
            isVisible ? "animate-slideIn" : ""
          )}
          onClick={scrollToTop}>
          <svg
            className="hidden w-3 fill-current duration-300 group-hover:-translate-y-28 group-hover:duration-300 lg:inline-block"
            viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
          <svg
            className="block w-3 fill-current lg:hidden"
            viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </Button>
      )}
    </div>
  );
}

export { ScrollToTopButton };
