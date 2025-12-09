import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HistoriasExito = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Section */}
        <section className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Historias de Éxito
              </h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto px-4">
                Te invitamos a conocer las miles de historias que forman parte del éxito del trabajo de 
                Ministerio Vive A.C. en las comunidades de Los Jarros y Clara Córdova.
              </p>
            </div>
          </div>
        </section>

        {/* Bryan's Story - Image Left, Text Right */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Images */}
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763449996/bryan_antes_rhbbby.png"
                      alt="Bryan a los 8 años"
                      className="w-full h-auto"
                    />
                    <div className="bg-primary/10 p-3">
                      <p className="text-center font-medium text-primary">Bryan a los 8 años</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763449995/bryan_despues_sopm77.png"
                      alt="Bryan - Lic. en Enfermería UNAM"
                      className="w-full h-auto"
                    />
                    <div className="bg-secondary/10 p-3">
                      <p className="text-center font-medium text-secondary">Lic. en Enfermería - UNAM</p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    La Historia de Bryan de Jesús Terán
                  </h2>
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      Bryan de Jesús Terán es beneficiario de los servicios de Ministerio Vive desde los 8 años. 
                      Se le otorgó una <strong className="text-primary">beca educativa mensual durante toda la preparatoria</strong> y ahora 
                      ya es <strong className="text-primary">Licenciado en Enfermería de la UNAM</strong>. Trabaja medio tiempo y estudia.
                    </p>
                    <p>
                      A pesar de las carencias que aún existen en su familia, nada lo detiene. Bryan es un ejemplo 
                      claro de cómo el apoyo constante y las oportunidades educativas pueden transformar completamente 
                      el futuro de un joven.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Francisca's Story - Text Left, Image Right */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6 order-2 md:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    La Historia de Francisca
                  </h2>
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      Francisca recibió su certificado de preparatoria, gracias a la <strong className="text-primary">educación abierta</strong> 
                      que le brindó Ministerio Vive. 
                    </p>
                    <p>
                      Su historia representa la transformación de muchas madres de familia 
                      que, a pesar de las responsabilidades del hogar, encontraron la oportunidad de continuar sus estudios 
                      y mejorar su calidad de vida.
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763449996/francisca_bua1sl.png"
                      alt="Francisca"
                      className="w-full h-auto"
                    />
                    <div className="bg-primary/10 p-3">
                      <p className="text-center font-medium text-primary">Francisca</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anayeli's Story - Full Width with Accent */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl border-l-4 border-primary shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
                  La Historia de Anayeli de Jesús
                </h2>
                
                <div className="space-y-6 text-foreground/80 leading-relaxed">
                  <p>
                    Anayeli es una joven esforzada que día a día, a pesar de que las carencias sean inmensas, 
                    nada la detiene. Su padre trabaja como albañil y muchas veces se queda sin empleo. Su madre 
                    con el poco dinero que entra a casa ahorra, la familia ha pasado por diversas crisis de 
                    violencia intrafamiliar.
                  </p>
                  <p>
                    Anayeli con sus tres hermanos, al llegar de la escuela, antes de comer, vendían cacahuates 
                    y gomitas y a veces hasta los tamales o donas que hacía su madre para solventar todos sus gastos. 
                    También tenían que ayudar a su mamá a llevar agua a su casa con cubetas porque viven en el cerro, 
                    muy lejos de esos servicios.
                  </p>
                  <p>
                    Toda esta familia ha recibido los servicios de Ministerio Vive, es por eso que su pensar cambió 
                    a insistir constantemente a sus hijos que <strong className="text-primary">estudiar siempre es lo mejor</strong>. Gracias al 
                    joven profesionista Ricardo Madrigal, quien ahora es padrino de estudios de Anayeli, y al 
                    seguimiento constante de Ministerio Vive, poco a poco están saliendo de estas situaciones de 
                    marginación y pobreza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Message */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¡Tu Ayuda Cambia Vidas!
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-white/90">
                Este trabajo comunitario nos ha otorgado la dicha de conocer casos de personas en 
                situaciones deplorables con posibilidades nulas de trascender, mismas que hoy por hoy 
                se encuentran con una mejor situación de vida, trabajando de manera comunitaria y 
                motivadas a buscar mejores oportunidades para salir adelante.
              </p>
              <p className="text-xl font-semibold">
                Es por historias transformadas que Ministerio Vive A.C. seguirá convencido de que uno 
                de los medios eficaces para combatir la violencia, perversión e injusticia es enseñar 
                siempre con el ejemplo. El testimonio arrastra.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HistoriasExito;