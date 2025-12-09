import { NavLink } from "@/components/NavLink";
import { programs } from "@/data/programsData";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <NavLink
              key={program.id}
              to={`/programa/${program.id}`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group block"
            >
              <article
                className="bg-card rounded-xl overflow-hidden shadow-card hover-lift animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-primary text-white text-sm font-medium rounded-full">
                      {program.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                </div>
              </article>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};
