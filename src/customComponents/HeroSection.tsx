"use client";
import React from "react";
import {
  Code2,
  Component,
  FileText,
  MousePointerClick,
  Puzzle,
  CircleDot,
  Type,
} from "lucide-react";
import { useRouter } from "next/navigation";

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`absolute bg-muted/30 backdrop-blur-sm border border-border/20 rounded-lg flex items-center justify-center shadow-lg ${className}`}>
    {children}
  </div>
);

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center px-4 py-20 md:py-28">
      <div className="relative h-80 w-full hidden md:flex items-center justify-center">
        {/* A more dynamic and random-looking layout of icons */}
        <IconWrapper className="w-28 h-28 top-0 left-10 transform -rotate-12">
          <Component className="w-14 h-14 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-20 h-20 top-12 right-8 transform rotate-6">
          <Code2 className="w-10 h-10 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-24 h-24 bottom-0 left-16 transform rotate-3">
          <CircleDot className="w-12 h-12 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-16 h-16 bottom-8 right-20 rounded-full transform -rotate-12">
          <Type className="w-8 h-8 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-32 h-32 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-12">
          <Puzzle className="w-16 h-16 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-16 h-16 top-5 right-1/3 transform rotate-15">
          <FileText className="w-8 h-8 text-primary" />
        </IconWrapper>
        <IconWrapper className="w-20 h-20 bottom-5 left-2/5 rounded-full transform -rotate-12">
          <MousePointerClick className="w-10 h-10 text-primary" />
        </IconWrapper>
      </div>
      <div className="flex flex-col gap-6 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
            Build faster with reusable components
          </h1>
          <h2 className="text-muted-foreground text-base md:text-lg font-normal leading-relaxed">
            KodeBloxUI is a collaborative platform for UI component sharing and
            management. Build your next project faster with our library of
            reusable components.
          </h2>
        </div>
        <button
          onClick={() => router.push("/browse")}
          className="flex self-center md:self-start min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-primary-foreground text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Explore UI Gallery</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
