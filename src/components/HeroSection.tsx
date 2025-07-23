import { MessageCircle, Shield, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
const heroImage = "/lovable-uploads/0bee61c8-4a99-45dc-b318-23782a94945c.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5588999999999?text=Olá! Gostaria de agendar uma consulta nutricional.', '_blank');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center max-w-7xl mx-auto px-4 lg:px-8">
          {/* Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-tight">
                Cansada de dietas que <span className="text-secondary">não funcionam?</span> 
                <span className="block mt-2">Chegou a hora de mudar isso definitivamente</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-lg xl:text-xl 2xl:text-xl text-white/90 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nutricionista especialista em saúde da mulher | +2.500 vidas transformadas | 
                Atendimento online e presencial
              </p>
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-gold text-base sm:text-lg lg:text-lg xl:text-xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 h-auto w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              AGENDE SUA CONSULTA
            </Button>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-white/80 text-sm sm:text-base">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <span>Resposta rápida no WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                <span>Atendimento sigiloso</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="aspect-square lg:aspect-[4/5] xl:aspect-[3/4] 2xl:aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
              <img 
                src={heroImage} 
                alt="Rafael Alencar - Nutricionista especialista em saúde da mulher" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-2 sm:-top-4 lg:-top-6 -right-2 sm:-right-4 lg:-right-6 bg-secondary text-secondary-foreground px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-full font-semibold shadow-lg text-xs sm:text-sm lg:text-base">
              +2.500 atendidas
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -left-2 sm:-left-4 lg:-left-6 bg-white text-primary px-3 sm:px-4 lg:px-6 py-2 sm:py-2 lg:py-3 rounded-full font-semibold shadow-lg text-xs sm:text-sm lg:text-base">
              CRN6: 44631
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;