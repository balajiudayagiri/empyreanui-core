import LazyMountWrapper from "empyreanui/components/ui/LazyMountWrapper";
import ColorPaletteHero from "empyreanui/customComponents/_colorpalette";
import GradientPaletteHero from "empyreanui/customComponents/_gradientpalette";
import ImageColorExtractorHero from "empyreanui/customComponents/_imagecolorextractor";
import ReadmeHeroSection from "empyreanui/customComponents/_readme/ReadmeHeroSection";
import BlogHomePageSection from "empyreanui/customComponents/blogs/BlogsHomePageSection";
import HeroSection from "empyreanui/customComponents/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* bottom animated component */}
      <div className="xl:mx-24 lg:mx-20 flex flex-col md:gap-12 mt-12 gap-8">
        {/* <UiGalleryHero /> */}
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
        {/* <GradientGeneratorHero /> */}
        {/* <GradientPaletteHero /> */}
      </div>
    </>
  );
}
