import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Salud Mental y Física",
    category: "Salud",
    description: "Terapias psicológicas, brigadas médicas y nutrición para fortalecer el bienestar integral de niños y familias.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_qn8ree.jpg",
  },
  {
    title: "Educación y Cultura",
    category: "Educación",
    description: "Talleres educativos, apoyo escolar y actividades culturales que fomentan el desarrollo académico y creativo.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.29.25_PM_hwcn1f.jpg",
  },
  {
    title: "Recreación y Deporte",
    category: "Recreación",
    description: "Actividades deportivas y recreativas que promueven hábitos saludables, trabajo en equipo y sana convivencia.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763426047/WhatsApp_Image_2025-11-17_at_6.27.06_PM_1_rvqq4n.jpg",
  },
  {
    title: "Atención a Familias",
    category: "Familia",
    description: "Acompañamiento integral a familias con talleres, orientación y recursos para fortalecer vínculos familiares.",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763427013/Captura_de_pantalla_2025-11-17_184915_u4qvf4.png",
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-20 bg-background" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="programs-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nuestros <span className="gradient-text">Programas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabajamos en múltiples frentes para ofrecer salud integral y oportunidades de desarrollo a las comunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-primary text-white text-sm font-medium rounded-full">
                    {program.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                  Ver programa
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary" asChild>
            <a href="/programas">Ver todos los programas</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
