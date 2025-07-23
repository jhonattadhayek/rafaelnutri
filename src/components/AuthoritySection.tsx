import { Award, Heart, MapPin, Users, Stethoscope, Baby, Dumbbell } from "lucide-react";

const AuthoritySection = () => {
  const credentials = [
    { icon: Users, text: "+2.500 mulheres atendidas" },
    { icon: Award, text: "Especialista certificado em SOP e Endometriose" },
    { icon: Heart, text: "5 anos transformando vidas" },
    { icon: MapPin, text: "Atendimento presencial e online" }
  ];

  const specialties = [
    { icon: Stethoscope, text: "SOP (Síndrome dos Ovários Policísticos)" },
    { icon: Heart, text: "Endometriose" },
    { icon: Award, text: "Emagrecimento saudável" },
    { icon: Baby, text: "Nutrição na gestação" },
    { icon: Dumbbell, text: "Ganho de massa muscular" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Por que centenas de mulheres 
              <span className="text-secondary block">confiam em mim?</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 space-y-4 sm:space-y-6">
              <p>
                <strong className="text-primary">Oi, eu sou o Rafael Alencar (CRN6: 44631)</strong>, e sei exatamente como você se sente. 
                Já passei por consultório vendo mulheres frustradas com dietas mirabolantes, remédios 'milagrosos' 
                e promessas vazias.
              </p>
              <p>
                Foi aí que decidi mudar minha abordagem. Hoje, depois de <strong className="text-secondary">+2.500 atendimentos</strong>, 
                meu método se baseia em ciência, respeito ao seu corpo e, principalmente, à sua rotina real.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                <div className="bg-secondary/10 p-2 sm:p-3 rounded-full flex-shrink-0">
                  <credential.icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base leading-tight">{credential.text}</span>
              </div>
            ))}
          </div>

          {/* Specialties */}
          <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Especialidades
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="bg-secondary p-2 rounded-full flex-shrink-0">
                    <specialty.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm sm:text-base leading-tight">{specialty.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;