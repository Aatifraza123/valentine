import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveSection from "@/components/LoveSection";
import PromiseSection from "@/components/PromiseSection";
import ValentineQuestion from "@/components/ValentineQuestion";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveSection />
      <PromiseSection />
      <ValentineQuestion />
      <FinalSection />
    </main>
  );
};

export default Index;
