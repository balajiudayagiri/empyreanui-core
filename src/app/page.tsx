import LazyMountWrapper from "empyreanui/components/ui/LazyMountWrapper";
import ColorPaletteHero from "empyreanui/customComponents/_colorpalette";
import GradientPaletteHero from "empyreanui/customComponents/_gradientpalette";
import ImageColorExtractorHero from "empyreanui/customComponents/_imagecolorextractor";
import ReadmeHeroSection from "empyreanui/customComponents/_readme/ReadmeHeroSection";
import BlogHomePageSection from "empyreanui/customComponents/blogs/BlogsHomePageSection";
import HeroSection from "empyreanui/customComponents/HeroSection";

export default function Home() {
  return (
    <div className="scroll-bar-allowed">
      <HeroSection />
      <main className="xl:mx-24 lg:mx-20 flex flex-col gap-12 mt-12">
        <LazyMountWrapper>
          <ReadmeHeroSection />
        </LazyMountWrapper>
        <LazyMountWrapper>
          <BlogHomePageSection />
        </LazyMountWrapper>
        <LazyMountWrapper>
          <ColorPaletteHero />
        </LazyMountWrapper>
        <LazyMountWrapper>
          <GradientPaletteHero />
        </LazyMountWrapper>
        <LazyMountWrapper>
          <ImageColorExtractorHero />
        </LazyMountWrapper>
      </main>
    </div>
  );
}
