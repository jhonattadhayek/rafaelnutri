import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";
import testimonial5 from "@/assets/testimonial-5.png";
import testimonial6 from "@/assets/testimonial-6.png";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: testimonial1,
      text: "Perdi gordura no cutting e agora estou ganhando músculos no bulking. Me sinto definido e satisfeito!",
      result: "- gordura | + massa muscular"
    },
    {
      image: testimonial2,
      text: "Já se foram quase 3kg! Estou dormindo melhor, sem estresse e mais produtivo no trabalho.",
      result: "-3kg | sono e humor melhorados"
    },
    {
      image: testimonial3,
      text: "Menos 5kg! Só de seguir tudo certinho, já vi uma mudança absurda. Muito feliz!",
      result: "-5kg | alta adesão"
    },
    {
      image: testimonial4,
      text: "Em 1 semana perdi 2kg! De 89kg fui pra 87kg só com a dieta.",
      result: "-2kg | 1ª semana"
    },
    {
      image: testimonial5,
      text: "Cada dia mais motivada em seguir a dieta e focada no objetivo.",
      result: "+ motivação | foco"
    },
    {
      image: testimonial6,
      text: "Eliminei 10kg no total! Me sinto leve, desinchada e na minha melhor fase.",
      result: "-10kg | + autoestima"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6">
            Veja quem já 
            <span className="text-secondary block">transformou a vida:</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Histórias reais de mulheres que conquistaram seus objetivos com acompanhamento personalizado
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={`Depoimento ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="trust-badge">
                  <span className="font-bold">✨ {testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold">+2.500 histórias de sucesso como essas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;