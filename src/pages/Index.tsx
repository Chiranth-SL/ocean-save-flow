import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TipsSection from "@/components/TipsSection";
import InitiativesSection from "@/components/InitiativesSection";
import CTASection from "@/components/CTASection";
import SurveyAnalysisSection from "@/components/SurveyAnalysisSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <TipsSection />
      <InitiativesSection />
      <CTASection />
      <SurveyAnalysisSection />
      <Footer />
    </div>
  );
};

export default Index;
