"use client";
import React, { useContext } from "react";
import { Button } from "empyreanui/components/ui/button";
import { FlipWords } from "empyreanui/components/ui/flip-words";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { UserContext } from "empyreanui/Providers/user-provider";
import UserItemsHeroSection from "./UserItemsHeroSection";
import HeroCarosel from "./HeroCarosel";

const HeroHighlight = dynamic(
  () =>
    import("empyreanui/components/ui/hero-highlight").then(
      (mod) => mod.HeroHighlight
    ),
  {
    ssr: false,
  }
);

function HeroSection() {
  const { userToken, user } = useContext(UserContext);
  const words = [
    "Better",
    "Elegant",
    "Beautiful",
    "Modern",
    "Innovative",
    "Intuitive",
    "Responsive",
    "Modern",
    "Elegant",
    "Robust",
    "Versatile",
    "Fast",
    "Customizable",
    "Seamless",
  ];

  return (
    <main className="relative h-fit flex items-center justify-center overflow-hidden bg-background">
      <HeroHighlight className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="w-full h-full p-8 md:p-24 text-center">
          <div className="relative z-10 space-y-6 max-md:pt-10 md:pt-40 md:pb-28 pt-24">
            <div className="text-4xl md:text-6xl font-extrabold text-foreground">
              Build{" "}
              <FlipWords words={words} className="font-bold text-primary" />{" "}
              <br />
              Components with{" "}
              <span className="text-primary font-extrabold">
                Empyrean<span className="text-foreground">UI</span>
              </span>
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground">
              Create, customize, and share UI components effortlessly using
              HTML, CSS/Tailwind, and JavaScript.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/postcomponent">
                <Button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200">
                  Create a New Component
                </Button>
              </Link>
              <Link href="/browse">
                <Button className="bg-transparent border-primary text-primary px-6 py-3 rounded-full font-semibold hover:border-primary hover:text-black transition-all duration-200">
                  Explore UI Gallery
                </Button>
              </Link>
              <Link href="/blogs">
                <Button className="bg-transparent border-2 text-foreground px-6 py-3 rounded-full font-semibold hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-200">
                  Explore Blogs
                </Button>
              </Link>
            </div>
          </div>
          <HeroCarosel />

          {/* Interactive Showcase Panel */}
          {userToken && Object.keys(user).length !== 0 ? (
            <UserItemsHeroSection />
          ) : (
            <section className="mt-28 ">
              <h3 className="text-2xl font-bold">
                Create Your First Component
              </h3>
              <p className="text-md mt-2">
                Use our intuitive editor to quickly build your first UI
                component.
              </p>
              <Button className="bg-primary text-black mt-4 hover:scale-105 transition-transform">
                Get Started
              </Button>
            </section>
          )}
        </motion.div>
      </HeroHighlight>
    </main>
  );
}

export default HeroSection;
