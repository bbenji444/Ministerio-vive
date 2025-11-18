import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background" id="conocenos">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763449994/WhatsApp_Image_2025-11-18_at_1.00.49_AM_kyoryk.jpg"
            alt="Ministerio Vive - Conócenos"
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-primary">
            Conócenos
          </h2>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <Card className="p-8 bg-muted border-none">
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Tarea Principal</h3>
              <p>
                Brindar <strong>Salud Integral</strong> para prevenir y erradicar todas las formas posibles de 
                violencia, adicciones, vandalismo, maltrato físico, psicológico, económico, riesgo de vivir 
                en la calle e injusticia social, pobreza extrema en los niños, niñas; incluyendo a sus 
                hermanos y padres ya sean adolescentes, jóvenes o adultos.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-primary mb-3">Dónde Trabajamos</h4>
                <p className="text-sm">
                  Atendemos comunidades marginadas del Estado de México:
                </p>
                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                  <li>Poblado de Los Jarros (Isidro Fabela)</li>
                  <li>Colonia Clara Córdova (Nicolás Romero)</li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-primary mb-3">A Quiénes Servimos</h4>
                <p className="text-sm">
                  Niños, niñas, adolescentes, jóvenes y familias en vulnerabilidad que sufren maltrato 
                  físico, psicológico e injusticias sociales. Les brindamos las herramientas teórico-prácticas 
                  y profesionales que coadyuven a su autodesarrollo.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Nuestros Servicios</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Educación abierta y escolarizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Talleres de música y computación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Cultura y recreación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Desarrollo comunitario</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Salud física y brigadas médicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Terapias psicológicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Proyectos productivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm">Eventos especiales</span>
                  </li>
                </ul>
              </div>
            </Card>

            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary">
              <h4 className="text-xl font-bold text-primary mb-3">Proyectos Productivos</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">• Manos que Transforman</p>
                  <p className="text-sm text-foreground/70 ml-4">
                    Creación de artículos de madera con material reciclado para jóvenes y adultos.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">• Las Delicias de Jarros</p>
                  <p className="text-sm text-foreground/70 ml-4">
                    Productos del campo: chiles, peras para realizar salsas, mermeladas y postres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
