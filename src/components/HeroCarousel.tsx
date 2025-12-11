import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026694/WhatsApp_Image_2025-11-13_at_2.50.04_AM_2_elr67t.jpg",
    alt: "Jóvenes en talleres de desarrollo",
  },
  {
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1764060602/imagen_para_conocenos_1_cwy7gy.png",
    alt: "Comunidad unida",
  },
  {
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026693/WhatsApp_Image_2025-11-13_at_2.50.05_AM_5_pondhu.jpg",
    alt: "Familias participando en programas educativos",
  },
  {
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026694/WhatsApp_Image_2025-11-13_at_2.50.04_AM_1_r2fbml.jpg",
    alt: "Niños sonriendo en actividades comunitarias",
  },
  {
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026693/WhatsApp_Image_2025-11-13_at_2.50.05_AM_3_jgdgm8.jpg",
    alt: "Niños en actividades recreativas",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Carrusel principal">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: index === 1 ? 'center 85%' : index === 2 ? 'center 35%' : 'center' }}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
              Ministerio Vive A.C.
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 font-sans animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Salud integral, educación y esperanza para niñas, niños y familias en Clara Córdova y Los Jarros, Edo. Méx.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-base sm:text-lg px-8"
                asChild
              >
                <a href="/conocenos">Conócenos</a>
              </Button>
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary text-base sm:text-lg px-8"
                asChild
              >
                <a href="/donar">Dona ahora</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                prevSlide();
              }}
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-colors"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                nextSlide();
              }}
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-colors"
              aria-label="Siguiente slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex gap-2" role="tablist" aria-label="Indicadores de slide">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Ir al slide ${index + 1}`}
                aria-current={index === currentSlide}
                role="tab"
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-sm rounded-full transition-colors"
            aria-label={isAutoPlaying ? "Pausar reproducción automática" : "Reanudar reproducción automática"}
          >
            {isAutoPlaying ? "Pausar" : "Reproducir"}
          </button>
        </div>
      </div>
    </section>
  );
};
