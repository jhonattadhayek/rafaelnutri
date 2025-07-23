import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <MethodologySection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;