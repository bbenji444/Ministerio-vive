import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, ArrowLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";
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

const NoticiaDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .eq("is_published", true)
        .single();

      if (error || !data) {
        setNotFound(true);
      } else {
        setNews(data as NewsItem);
      }
      setLoading(false);
    };

    fetchNews();
  }, [id]);

  if (notFound) {
    return <Navigate to="/noticias" replace />;
  }

  const images = news?.images || (news?.image_url ? [news.image_url] : []);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : news && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <NavLink
                  to="/noticias"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Volver a noticias
                </NavLink>

                <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(news.published_at || news.created_at), "dd 'de' MMMM 'de' yyyy", { locale: es })}
                        </span>
                      </div>

                      <h1 className="text-3xl md:text-4xl font-bold mb-8">{news.title}</h1>

                      <div className="prose prose-lg max-w-none">
                        {news.content.split('\n').map((paragraph, index) => (
                          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Images on the right */}
                    {images.length > 0 && (
                      <div className="lg:w-96 flex-shrink-0 p-6 lg:p-8 lg:pl-0">
                        <div className="space-y-4 lg:sticky lg:top-48">
                          {images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${news.title} - imagen ${idx + 1}`}
                              className="w-full rounded-xl cursor-pointer hover:opacity-90 transition-opacity object-cover"
                              style={{ maxHeight: '300px' }}
                              onClick={() => setSelectedImage(img)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:opacity-80"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NoticiaDetalle;