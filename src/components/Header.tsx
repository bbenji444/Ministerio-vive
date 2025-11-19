import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Conócenos", href: "/conocenos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Historias de Éxito", href: "/historias-exito" },
  { name: "Contacto", href: "#contact-section", isScroll: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Saltar al contenido principal
      </a>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
            aria-label="Ministerio Vive A.C. - Inicio"
            onClick={(e) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="https://res.cloudinary.com/dbfc6h3fr/image/upload/v1763026692/WhatsApp_Image_2025-11-13_at_2.57.21_AM_krwcte.jpg"
              alt="Ministerio Vive A.C. Logo"
              className="h-28 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" role="navigation" aria-label="Navegación principal">
            {navigation.map((item) => 
              item.isScroll ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted cursor-pointer"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="px-3 xl:px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                  activeClassName="text-primary bg-muted"
                >
                  {item.name}
                </NavLink>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="lg:hidden pb-6 border-t border-border mt-2"
            role="navigation"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navigation.map((item) => 
                item.isScroll ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted cursor-pointer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted"
                    activeClassName="text-primary bg-muted"
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </nav>
        )}
      </div>

      {/* Donation Banner - Below Header */}
      <div className="fixed top-32 left-0 right-0 z-40 bg-gradient-to-r from-primary/90 to-secondary/90 border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-4">
            <span className="text-base md:text-lg font-bold text-white">
              Que tu ayuda cambie vidas
            </span>
            <Button
              asChild
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
            >
              <NavLink to="/donar">Dona ahora</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
