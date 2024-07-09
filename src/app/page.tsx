import ColorPaletteHero from "empyreanui/customComponents/_colorpalette";
import GradientPaletteHero from "empyreanui/customComponents/_gradientpalette";
import ImageColorExtractorHero from "empyreanui/customComponents/_imagecolorextractor";
import HeroSection from "empyreanui/customComponents/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* bottom animated component */}
      <div className="xl:mx-24 lg:mx-20 flex flex-col md:gap-12 mt-12">
        {/* <UiGalleryHero /> */}
        <ColorPaletteHero />
        <GradientPaletteHero />
        <ImageColorExtractorHero />
        {/* <GradientGeneratorHero /> */}
        {/* <GradientPaletteHero /> */}
      </div>
    </>
  );
}
