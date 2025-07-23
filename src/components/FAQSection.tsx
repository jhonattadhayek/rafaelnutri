import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já na primeira semana, principalmente na redução do inchaço e melhora na disposição. Resultados significativos de emagrecimento começam a aparecer entre 2-4 semanas, dependendo do seu objetivo e adesão ao plano. O importante é que focamos em resultados sustentáveis, sem efeito sanfona."
    },
    {
      question: "Funciona mesmo online?",
      answer: "Sim, absolutamente! Atendo pacientes online em todo o Brasil há mais de 3 anos com excelentes resultados. O acompanhamento é feito através de consultas por videochamada, WhatsApp para suporte e envio do plano alimentar personalizado. A eficiência é a mesma do atendimento presencial."
    },
    {
      question: "E se eu não conseguir seguir?",
      answer: "Isso é mais comum do que imagina! Por isso meu método prioriza a flexibilidade e adaptação à sua rotina real. Fazemos ajustes sempre que necessário e você tem suporte direto comigo via WhatsApp. O objetivo é criar hábitos sustentáveis, não dietas restritivas impossíveis de manter."
    },
    {
      question: "Qual o investimento?",
      answer: "O investimento varia conforme o tipo de acompanhamento escolhido (consulta avulsa, pacotes mensais ou trimestrais). Durante nossa conversa inicial no WhatsApp, explico todas as opções e valores. Também oferecemos condições especiais para pagamento à vista e primeira consulta com desconto."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Dúvidas 
              <span className="text-secondary">Frequentes</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed">
              Esclarecemos as principais dúvidas sobre nosso acompanhamento nutricional
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6">
                  <AccordionTrigger className="text-left font-semibold text-base sm:text-lg text-primary hover:text-secondary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 sm:pt-4 text-sm sm:text-base pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Ainda tem dúvidas? Fale comigo diretamente!
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5588999999999?text=Olá! Tenho algumas dúvidas sobre o acompanhamento nutricional.', '_blank')}
              className="btn-outline-gold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Tirar Dúvidas no WhatsApp</span>
              <span className="sm:hidden">Dúvidas no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;