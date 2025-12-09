import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Johana Soto",
    role: "Voluntaria y Ex-Prestadora de Servicio Social",
    quote: "Buscando maneras de ayudar, llegué a Ministerio Vive. Hice mi servicio social allí y después regresé como voluntaria, junto con mi hijo Patricio. Compartir tiempo con quienes más lo necesitan, especialmente con los niños, me cambió la vida. Incluso ganamos un concurso en Inglaterra por este voluntariado, pero mi mayor logro fue encontrar un segundo hogar."
  },
  {
    name: "Gerardo Mendoza Briseño",
    role: "Miembro del Consejo y Ex-Coordinador",
    quote: "Llegué a la asociación para cumplir mi servicio social, pero su labor me atrapó desde el primer día. Con el tiempo me convertí en miembro del consejo y coordiné proyectos que beneficiaron a la comunidad. He sido testigo de historias que inspiran y transforman. Lo que empezó como un requisito se volvió un estilo de vida, porque ser parte de este movimiento social dejó en mí una huella de amor inmensa."
  },
  {
    name: "Fernando Murguía Izaguirre",
    role: "Voluntario Familiar",
    quote: "Como muchos en la universidad, solo quería terminar mi servicio social, pero nunca imaginé que mi familia y yo nos enamoraríamos de esta labor comunitaria. Compartimos conocimientos, dimos clases y apoyamos de mil maneras para que este trabajo siguiera adelante. Hoy sabemos que ayudar también transforma nuestro propio hogar."
  },
  {
    name: "Izcaret García",
    role: "Psicóloga y Consultora",
    quote: "Poner en práctica mis conocimientos de psicología para ayudar a las personas de Ministerio Vive fue una experiencia que enriqueció cada aspecto de mi vida. Impartir cursos a quienes no tienen acceso a educación o empleo marcó el inicio de mi crecimiento profesional. Hoy cuento con una consultoría de orientación laboral, y Ministerio Vive sigue siendo —y será siempre— mi lugar favorito para apoyar a quien lo necesite."
  },
  {
    name: "María del Carmen Ramírez",
    role: "Voluntaria y Donadora",
    quote: "Es indescriptible ver la mirada de los niños y las sonrisas de la gente en las comunidades. Soy voluntaria y donadora, y siempre que puedo —a veces junto con amigos— llevo ropa, juguetes y todo lo que esté a mi alcance. Nunca me cansaré de dar y de amar. He visto cómo un pequeño gesto puede cambiar la vida de alguien, y eso, como sabemos, no tiene precio."
  },
  {
    name: "Rafael Aguirre",
    role: "Fundador y Colaborador",
    quote: "Fui testigo y parte de los inicios de Ministerio Vive. Hoy solo puedo agradecer a Dios por permitirme ver cómo este trabajo sigue creciendo y llegando a más personas. Desde mi labor pude aportar recursos para construir el centro en una de las comunidades y siempre procuré apoyar con todo lo que estaba a mi alcance. Ver que la misión continúa es, para mí, la mayor recompensa."
  },
  {
    name: "Susana Carreón Vázquez",
    role: "Madrina de Becarias",
    quote: "Ser voluntaria ha sido una experiencia inolvidable. Dar clases en la Ludoteca me renovó como persona; convivir con los más pequeños me llenó de la alegría de dar sin condición y de ser yo misma sin miedo. Hoy soy madrina de dos universitarias, y apoyarlas económicamente no solo les abre un futuro más brillante, también les siembra la certeza de que ayudar a otros es el mejor legado que podemos dejar en el mundo."
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 via-secondary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Voluntarios que <span className="gradient-text">Transforman</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce las historias de quienes dedican su tiempo a cambiar vidas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              prevSlide();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white shadow-xl hover:bg-muted text-primary rounded-full transition-all hover:scale-110"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              nextSlide();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white shadow-xl hover:bg-muted text-primary rounded-full transition-all hover:scale-110"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-8">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}% - ${currentIndex * 24 / itemsPerView}px))`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-white rounded-2xl shadow-card p-8 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-10 h-10 text-primary/30" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-muted-foreground italic leading-relaxed flex-grow mb-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                        <User className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
