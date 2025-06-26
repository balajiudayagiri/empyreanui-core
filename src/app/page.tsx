import PartnersIntegrations from "kodebloxui/customComponents/browse/PartnersIntegrations";
import ResourcesTutorials from "kodebloxui/customComponents/ResourcesTutorials";
import CaseStudies from "kodebloxui/customComponents/CaseStudies";
import HeroSection from "kodebloxui/customComponents/HeroSection";
import KeyFeatures from "kodebloxui/customComponents/KeyFeatures";
import CommunitySpotlight from "kodebloxui/customComponents/CommunitySpotlight";
import FAQ from "kodebloxui/customComponents/FAQ";
import Testimonials from "kodebloxui/customComponents/Testimonials";
import ContributionGuidelines from "kodebloxui/customComponents/ContributionGuidelines";
import TechnologyStack from "kodebloxui/customComponents/TechnologyStack";

export default function Home() {
  return (
    <div className=" pt-24 scroll-bar-allowed max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <HeroSection />
      <KeyFeatures />
      <CaseStudies />
      {/* <PartnersIntegrations /> */}
      {/* <ResourcesTutorials /> */}
      {/* <CommunitySpotlight /> */}
      <FAQ />
      {/* <Testimonials /> */}
      {/* <ContributionGuidelines /> */}
      <TechnologyStack />
    </div>
  );
}
