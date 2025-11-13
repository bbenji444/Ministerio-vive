import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = {
  main: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Programas", href: "/programas" },
    { name: "Involúcrate", href: "/involucrate" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso de Privacidad", href: "/privacidad" },
    { name: "Política de Cookies", href: "/cookies" },
    { name: "Transparencia", href: "/transparencia" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic
  };

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026692/WhatsApp_Image_2025-11-13_at_2.57.21_AM_krwcte.jpg"
              alt="Ministerio Vive A.C."
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Salud integral, educación y esperanza para comunidades vulnerables del Estado de México desde 2004.
            </p>
            <p className="text-background/60 text-xs italic">
              "Que tu ayuda cambie vidas"
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <a href="tel:5534135014" className="hover:text-primary transition-colors">55 3413 5014</a>
                  <br />
                  <a href="tel:5527041083" className="hover:text-primary transition-colors">55 2704 1083</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:ministeriovive@hotmail.com" className="hover:text-primary transition-colors">
                  ministeriovive@hotmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" aria-hidden="true" />
                <address className="not-italic text-background/80">
                  Tepozán #47, Col. Valle de Los Pinos<br />
                  Sta. Mónica Tlalnepantla, Edo. de México<br />
                  C.P. 54040
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Mantente Informado</h3>
            <p className="text-sm text-background/80 mb-4">
              Recibe noticias sobre nuestro trabajo y cómo puedes ayudar.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                aria-label="Correo electrónico para newsletter"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                Suscribirme
              </Button>
              <p className="text-xs text-background/60">
                Al suscribirte, aceptas nuestra{" "}
                <a href="/privacidad" className="underline hover:text-primary">
                  política de privacidad
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-2 bg-background/10 hover:bg-primary rounded-full transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-background/60">
              {navigation.legal.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-background/60">
            © {new Date().getFullYear()} Ministerio Vive A.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
