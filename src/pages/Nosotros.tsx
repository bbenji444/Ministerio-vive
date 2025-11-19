import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Nosotros = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Image Section */}
        <section className="relative w-full">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="bg-gradient-to-r from-primary to-secondary p-12 md:p-16 min-h-[400px] flex items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Nuestra Historia
                </h1>
                <p className="text-white/90 text-lg leading-relaxed">
                  Transformando vidas desde 1999 en las comunidades de Clara Córdova y Los Jarros.
                </p>
              </div>
            </div>
            <div className="h-[400px] md:h-full">
              <img
                src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763449994/WhatsApp_Image_2025-11-18_at_1.07.07_AM_w4uqvk.jpg"
                alt="Ministerio Vive - Nosotros"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Antecedentes Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Antecedentes
              </h2>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed">
                <p>
                  Nuestro trabajo en la <strong>Colonia Clara Córdova</strong> comenzó en el año <strong>1999</strong>, 
                  esta colonia fue fundada en el año de 1987 por paracaidistas, es decir "Familias que viven en 
                  miseria extrema y que se establecen en terrenos desocupados", en este caso liderados por el grupo político.
                </p>

                <p>
                  Los habitantes de este lugar por haberse asentado en un terreno irregular, hasta la fecha tienen 
                  grandes carencias materiales, aunadas a las psicológicas, espirituales y sociales que aunque ya las 
                  padecían, se acrecentaron y todo esto ha desembocado en violencia de toda índole. Su realidad era 
                  terrible, tenían severas necesidades educativas, económicas, alimenticias, de salud, psicológica, 
                  como es de suponerse sus actividades recreativas y culturales eran nulas.
                </p>

                <p>
                  Nuestra bella y ardua labor empezó en el año de 1999 en la Colonia Clara Córdova Morán, mejor 
                  conocida por "Cartolandia", a ella ni la policía se atrevía a entrar por el alto índice de 
                  delincuencia y drogadicción; a la fecha esto ha cambiado, las tres bandas desaparecieron. Los 
                  resultados en la comunidad de Clara Córdova de más de 16 años de trabajo han redundado en la 
                  construcción del Centro Terapéutico Educativo de Salud Integral Clara Córdova.
                </p>

                <div className="bg-muted p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Las 3 pandillas que tenía la Colonia Clara Córdova Morán se desintegraron
                  </h3>
                  <p>
                    Únicamente reincidieron el 8% de los jóvenes que pertenecían a ellas sin embargo sigue habiendo 
                    violencia y drogadicción, ya que el centro de acopio y venta es en la colonia Clara Córdova. 
                    Aún con estos datos, ningún niño que acude con nosotros se droga por el trabajo de prevención 
                    y detección temprana que realizamos.
                  </p>
                </div>

                <p>
                  <strong>En 2004, nuestra labor se extendió al poblado de "Los Jarros"</strong>. Al poblado de Los 
                  Jarros ubicado en el Municipio de Isidro Fabela, llegamos hace 10 años, este poblado quedó en el 
                  olvido de las autoridades locales, las personas no tienen acceso fácil a los servicios básicos, 
                  deben viajar lejos a sus empleos. Los Jarros por años ha sufrido infinidad de carencias y nuestro 
                  trabajo con ellos es en el campo al aire libre.
                </p>

                <p>
                  Al inicio el principal anhelo de niños y adolescentes, era casarse pero al llegar Ministerio Vive 
                  y ampliarles su horizonte en lugar de pensar en casarse, están anhelando lograr llegar a ser universitarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Misión */}
              <div className="bg-background p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">Misión</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Somos una Asociación Civil que busca fundar y administrar Centros de salud Integral, 
                  para prevenir y combatir pobreza, violencia, marginación social, maltrato físico, 
                  psicológico, desintegración familiar y toda injusticia social, por medio de salud 
                  integral que implica salud mental, salud física, educación, cultura y recreación.
                </p>
              </div>

              {/* Visión */}
              <div className="bg-background p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">Visión</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Ser una Asociación Civil reconocida por su labor social y humanitaria, que logre 
                  impactar positivamente en la vida de las personas que atendemos. Queremos ser un 
                  referente de solidaridad, transparencia, compromiso y transformación social.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
