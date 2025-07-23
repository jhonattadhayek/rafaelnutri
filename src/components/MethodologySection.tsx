import { Target, ClipboardList, MessageSquare, Trophy } from "lucide-react";

const MethodologySection = () => {
  const pillars = [
    {
      icon: Target,
      title: "DIAGNÓSTICO REAL",
      description: "Análise completa do seu histórico",
      details: [
        "Análise completa do seu histórico",
        "Exames laboratoriais interpretados",
        "Identificação de deficiências nutricionais"
      ]
    },
    {
      icon: ClipboardList,
      title: "PLANO PERSONALIZADO",
      description: "Cardápio adaptado à sua rotina",
      details: [
        "Cardápio adaptado à sua rotina",
        "Receitas práticas e saborosas",
        "Flexibilidade para situações sociais"
      ]
    },
    {
      icon: MessageSquare,
      title: "ACOMPANHAMENTO PRÓXIMO",
      description: "Consultas regulares (presencial/online)",
      details: [
        "Consultas regulares (presencial/online)",
        "Ajustes conforme evolução",
        "Suporte via WhatsApp"
      ]
    },
    {
      icon: Trophy,
      title: "RESULTADOS SUSTENTÁVEIS",
      description: "Foco na mudança de hábitos",
      details: [
        "Foco na mudança de hábitos",
        "Sem efeito sanfona",
        "Melhora na qualidade de vida"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            O que torna meu método 
            <span className="text-secondary block">diferente?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um método cientificamente comprovado que respeita sua individualidade e rotina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="bg-secondary/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl group-hover:bg-secondary/20 transition-colors flex-shrink-0">
                  <pillar.icon className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {pillar.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
            <span className="font-semibold text-sm sm:text-base lg:text-lg">Método aprovado por +2.500 mulheres</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;