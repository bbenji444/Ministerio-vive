import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const navigation = {
  main: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Conocenos", href: "/conocenos" },
    { name: "Historias de Éxito", href: "/historias-exito" },
    { name: "Donar", href: "/donar" },
  ],
  social: [
    { name: "Facebook", href: "https://www.facebook.com/ACMINISTERIOVIVE", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/ministerioviveac?igsh=MTFtYXBtNXpsbXZ5eA==", icon: Instagram },
    { name: "YouTube", href: "https://www.youtube.com/@ministeriovive8828", icon: Youtube },
    { name: "TikTok", href: "https://www.tiktok.com/@ministerio_vive_proyect0?_r=1&_t=ZS-9249WAXgnkg", icon: null },
  ],
};

export const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic
  };

  return (
    <footer className="bg-foreground text-background" role="contentinfo" id="contact-section">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.location.href = '/';
              }}
              className="block w-fit cursor-pointer hover:opacity-90 transition-opacity"
            >
              <img
                src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026692/WhatsApp_Image_2025-11-13_at_2.57.21_AM_krwcte.jpg"
                alt="Ministerio Vive A.C."
                className="h-24 w-auto mb-4 brightness-0 invert"
              />
            </a>
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

          {/* Location Map */}
          <div>
            <h3 className="font-bold text-lg mb-4">Encuéntranos</h3>
            <p className="text-sm text-background/80 mb-4">
              Donaciones en especie e informes en nuestra oficina
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4763!2d-99.221501!3d19.5381743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d3bda593431%3A0xec200e2cff12dc95!2zVGVwb3rDoW4gNDcsIEhhYiBWYWxsZSBWZXJkZSwgNTQwNDAgVGxhbG5lcGFudGxhLCBNw6l4Lg!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Ministerio Vive"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon || Music2;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/10 hover:bg-primary rounded-full transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-background/80 italic text-center">
              "Juntos transformamos vidas, juntos construimos esperanza"
            </p>
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
