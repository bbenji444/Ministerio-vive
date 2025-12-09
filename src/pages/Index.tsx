import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { MissionSection } from "@/components/MissionSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ImpactSection } from "@/components/ImpactSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroCarousel />
        <MissionSection />
        <ProgramsSection />
        <ImpactSection />
        <TestimonialsCarousel />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
