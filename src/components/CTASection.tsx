import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, MapPin, Globe, FileText } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5588999999999?text=Olá! Gostaria de agendar uma consulta nutricional.', '_blank');
  };

  const benefits = [
    { icon: CheckCircle, text: "Atendimento personalizado e sigiloso" },
    { icon: MapPin, text: "Presencial: Salgueiro e Juazeiro do Norte" },
    { icon: Globe, text: "Online: Atendimento para todo o Brasil" },
    { icon: FileText, text: "Plano nutricional exclusivo para seu perfil" }
  ];

  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Está pronta para ser a próxima
              <span className="text-secondary block">história de sucesso?</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-white/90 leading-relaxed">
              Transforme sua saúde com acompanhamento nutricional especializado e personalizado para você.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4 text-white">
                  <div className="bg-secondary p-2 rounded-full flex-shrink-0">
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="font-medium text-left text-sm sm:text-base leading-tight">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="btn-gold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">AGENDAR CONSULTA PELO WHATSAPP</span>
              <span className="sm:hidden">AGENDAR CONSULTA</span>
            </Button>

            <p className="text-white/80 mt-4 sm:mt-6 text-xs sm:text-sm">
              Resposta rápida garantida • Primeira consulta com desconto especial
            </p>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
              Rafael Alencar - CRN6: 44631
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Nutricionista especialista em saúde da mulher com mais de 5 anos de experiência 
              e +2.500 vidas transformadas através de acompanhamento personalizado e científico.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 sm:w-40 sm:h-40 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 sm:w-32 sm:h-32 border border-white rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 sm:w-24 sm:h-24 border border-white rounded-full"></div>
      </div>
    </section>
  );
};

export default CTASection;