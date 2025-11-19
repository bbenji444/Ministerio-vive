import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Building2 } from "lucide-react";

const Donar = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Section */}
        <section className="relative w-full bg-muted">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-xl shadow-lg">
                <Heart className="w-12 h-12 text-white mb-4" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Dona Ahora
                </h1>
                <p className="text-white/90 text-base md:text-lg leading-relaxed">
                  Que tu ayuda cambie vidas
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763450424/educacion_y_cultura_olvl5y.png"
                  alt="Educación y Cultura - Ministerio Vive"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Tu Donación Transforma Vidas
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Gracias a tu generosidad, podemos continuar brindando salud integral, educación y esperanza 
                  a niñas, niños y familias en comunidades vulnerables del Estado de México.
                </p>
              </div>

              {/* Donation Options */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <CreditCard className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Donación en Línea</h3>
                  <p className="text-foreground/80 mb-6">
                    Realiza tu donación de forma segura mediante transferencia bancaria o depósito.
                  </p>
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p className="font-semibold text-foreground mb-3">Datos Bancarios:</p>
                    <div className="space-y-1">
                      <p className="text-sm text-foreground/90">
                        <span className="font-medium">Banco:</span> Santander
                      </p>
                      <p className="text-sm text-foreground/90">
                        <span className="font-medium">Beneficiario:</span> Ministerio Vive
                      </p>
                      <p className="text-sm text-foreground/90">
                        <span className="font-medium">Cuenta:</span> 65-5016 5717-4
                      </p>
                      <p className="text-sm text-foreground/90">
                        <span className="font-medium">Clave:</span> 014180655016571745
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <Building2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Donación en Especie</h3>
                  <p className="text-foreground/80 mb-6">
                    También aceptamos donaciones de material, herramientas, ropa, calzado, útiles escolares y despensa.
                  </p>
                  <Button 
                    className="w-full bg-gradient-primary"
                    onClick={() => {
                      const contactSection = document.getElementById('contact-section');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Contáctanos
                  </Button>
                </Card>
              </div>

              {/* Tax Deduction Info */}
              <div className="bg-muted p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4">Somos Donataria Autorizada</h3>
                <p className="text-foreground/80 mb-4">
                  Ministerio Vive A.C. es una <strong>Donataria Autorizada</strong> por el SAT. 
                  Tus donaciones son <strong>deducibles de impuestos</strong>.
                </p>
                <p className="text-sm text-foreground/70">
                  <strong>RFC:</strong> MVI031027EZ3
                </p>
              </div>

              {/* What Your Donation Supports */}
              <div className="bg-background">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  ¿Qué Apoya Tu Donación?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Salud Mental y Física</h4>
                      <p className="text-sm text-foreground/80">
                        Terapias psicológicas, brigadas médicas y atención integral.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Educación y Cultura</h4>
                      <p className="text-sm text-foreground/80">
                        Becas educativas, educación abierta y talleres de música y computación.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recreación y Deporte</h4>
                      <p className="text-sm text-foreground/80">
                        Actividades recreativas, deportivas y eventos especiales.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Atención a Familias</h4>
                      <p className="text-sm text-foreground/80">
                        Proyectos productivos, despensa y apoyo integral familiar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para hacer la diferencia?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cada donación, sin importar el monto, tiene un impacto real en la vida de las familias que atendemos.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              onClick={() => {
                window.open('https://wa.me/525534135014?text=Hola,%20quiero%20realizar%20una%20donación', '_blank');
              }}
            >
              Contactar para Donar
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donar;
