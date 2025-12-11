import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  images: string[] | null;
  published_at: string | null;
  created_at: string;
}

const Noticias = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

      if (!error && data) {
        setNews(data as NewsItem[]);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Noticias</span> y Novedades
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Mantente informado sobre nuestras actividades, eventos y logros recientes
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : news.length === 0 ? (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Próximamente</h2>
                  <p className="text-muted-foreground mb-8">
                    Estamos preparando contenido increíble para compartir contigo. 
                    ¡Vuelve pronto para conocer nuestras últimas noticias y novedades!
                  </p>
                  <Button asChild className="bg-gradient-primary">
                    <NavLink to="/">Volver al inicio</NavLink>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {news.map((item, index) => {
                  const images = item.images || (item.image_url ? [item.image_url] : []);
                  
                  return (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl shadow-card overflow-hidden hover-lift animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Content on the left */}
                        <div className="flex-1 p-6 md:p-8">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(item.published_at || item.created_at), "dd MMM yyyy", { locale: es })}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground mb-4 line-clamp-4">
                            {item.excerpt || item.content.substring(0, 250) + "..."}
                          </p>
                          <NavLink 
                            to={`/noticia/${item.id}`}
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                          >
                            Leer más <ArrowRight size={16} />
                          </NavLink>
                        </div>

                        {/* Images on the right */}
                        {images.length > 0 && (
                          <div className="md:w-80 lg:w-96 flex-shrink-0 p-4 md:p-6">
                            {images.length === 1 ? (
                              <img
                                src={images[0]}
                                alt={item.title}
                                className="w-full h-48 md:h-full object-cover rounded-xl"
                              />
                            ) : images.length === 2 ? (
                              <div className="grid grid-cols-2 gap-2 h-48 md:h-full">
                                {images.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={`${item.title} - imagen ${idx + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                  />
                                ))}
                              </div>
                            ) : (
                              <div className="grid grid-cols-2 gap-2 h-48 md:h-full">
                                <img
                                  src={images[0]}
                                  alt={`${item.title} - imagen 1`}
                                  className="w-full h-full object-cover rounded-xl row-span-2"
                                />
                                <div className="flex flex-col gap-2">
                                  {images.slice(1, 3).map((img, idx) => (
                                    <img
                                      key={idx}
                                      src={img}
                                      alt={`${item.title} - imagen ${idx + 2}`}
                                      className="w-full h-full object-cover rounded-xl flex-1"
                                    />
                                  ))}
                                  {images.length > 3 && (
                                    <div className="relative">
                                      <img
                                        src={images[3]}
                                        alt={`${item.title} - imagen 4`}
                                        className="w-full h-full object-cover rounded-xl"
                                      />
                                      {images.length > 4 && (
                                        <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center">
                                          <span className="text-white font-bold">+{images.length - 3}</span>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Admin Access */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <NavLink 
              to="/admin" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Acceso Administrador
            </NavLink>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Noticias;