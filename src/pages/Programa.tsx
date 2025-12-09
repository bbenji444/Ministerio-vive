import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { programs } from "@/data/programsData";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Programa = () => {
  const { id } = useParams<{ id: string }>();
  const program = programs.find((p) => p.id === id);

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <NavLink
                to="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
                onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('programs-heading');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <ArrowLeft size={20} />
                Volver a programas
              </NavLink>
              <span className="inline-block px-4 py-1.5 bg-gradient-primary text-white text-sm font-medium rounded-full mb-4">
                {program.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                {program.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
                {program.fullDescription}
              </p>

              {/* Special Image (for Proyecto Productivo) */}
              {program.specialImage && (
                <div className="mb-12 text-center">
                  <div className="inline-block">
                    <img
                      src={program.specialImage.url}
                      alt={program.specialImage.caption}
                      className="w-64 h-64 object-cover rounded-full mx-auto shadow-xl mb-4"
                    />
                    <p className="text-lg font-semibold text-primary">
                      {program.specialImage.caption}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                <span className="gradient-text">Galería</span> de Imágenes
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Momentos que capturan el impacto de nuestro programa
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {program.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square overflow-hidden rounded-xl shadow-card hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms`, opacity: 0, animationFillMode: "forwards" }}
                  >
                    <img
                      src={image}
                      alt={`${program.title} - Imagen ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Programa;
