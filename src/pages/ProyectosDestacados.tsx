import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const proyectos = [
  {
    id: 1,
    year: "2016",
    title: "Viviendas Dignas con TECHO",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1764060598/fundaci%C3%B3n_techo_e5panc.png",
    content: `En 2016, TECHO apoyó a 20 familias de la comunidad de Los Jarros para construir sus propias viviendas colectivas con materiales sólidos y madera. Antes, muchas familias vivían hacinadas en un solo cuarto donde 7 o más personas dormían, cocinaban y carecían de piso firme.

Gracias a este proyecto, cada familia ahora cuenta con un espacio digno que mejora su calidad de vida, les brinda seguridad y les permite continuar construyendo su hogar, sentando las bases para un patrimonio que transformará su futuro. Más allá de las paredes, este proyecto fortalece la comunidad y abre la puerta a nuevas oportunidades de desarrollo social.`
  },
  {
    id: 2,
    year: "2019",
    title: "Centro Terapéutico con Banorte",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1765564015/078f5333-a4ec-4b22-bdc3-42e221630e27_dx0obq.jpg",
    content: `En 2019 fuimos ganadores de la convocatoria del programa social "Ayudamos" de Banorte. Ese apoyo llegó en el momento en que más lo necesitábamos y nos permitió transformar lo que era solo una casa en obra negra, sin electricidad, sin baños suficientes y sin condiciones adecuadas, en un espacio digno y lleno de vida.

Gracias a este impulso, ese lugar se convirtió en el Centro Terapéutico de Salud Integral, una edificación de tres pisos con espacios dignos, funcionales y completamente remodelados. Hoy, donde antes había paredes sin terminar, hay salas de terapia; donde había oscuridad, ahora hay luz, acompañamiento y esperanza.

Este logro no solo cambió un edificio, cambió la vida de las familias que ahora encuentran en él un lugar de cuidado, refugio y crecimiento.`
  },
  {
    id: 3,
    year: "2016-2019",
    title: "Ludoteca con Fundación CIE",
    image: "https://res.cloudinary.com/dbfc6h3fr/image/upload/v1764060584/fundacion_ocesa_tbc4ws.png",
    content: `Gracias al apoyo de Fundación CIE, la comunidad de Clara Córdova Morán hoy cuenta con una Ludoteca que ha transformado la forma en que convivimos, aprendemos y crecemos. Fuimos seleccionados entre varias asociaciones por nuestra labor sobresaliente, y gracias a ello recibimos una ludoteca completamente equipada, decorada y pensada para el desarrollo integral.

En este espacio, niños y adultos descubren nuevas habilidades, fortalecen su creatividad y aprenden jugando. Lo que inició como un sueño compartido, hoy es un lugar lleno de color, risas y posibilidades, que impulsa el bienestar y la unión de toda la comunidad.`
  }
];

const ProyectosDestacados = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Proyectos <span className="gradient-text">Destacados</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Proyectos que han transformado nuestra comunidad
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-20">
              {proyectos.map((proyecto, index) => (
                <article
                  key={proyecto.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 lg:gap-12 items-center animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: "forwards" }}
                >
                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 z-10">
                        <span className="inline-block px-4 py-2 bg-gradient-primary text-white font-bold rounded-lg shadow-lg text-lg">
                          {proyecto.year}
                        </span>
                      </div>
                      <div className="overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={proyecto.image}
                          alt={proyecto.title}
                          className="w-full h-auto object-contain bg-white p-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                      {proyecto.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {proyecto.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProyectosDestacados;
