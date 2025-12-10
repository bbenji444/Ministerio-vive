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
  published_at: string | null;
  created_at: string;
}

const NoticiaDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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
        setNews(data);
      }
      setLoading(false);
    };

    fetchNews();
  }, [id]);

  if (notFound) {
    return <Navigate to="/noticias" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-44">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : news && (
          <>
            {/* Hero */}
            {news.image_url && (
              <section className="relative h-[50vh] min-h-[400px]">
                <img
                  src={news.image_url}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </section>
            )}

            {/* Content */}
            <section className={`py-16 ${!news.image_url ? 'pt-8' : '-mt-32 relative z-10'}`}>
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                  <NavLink
                    to="/noticias"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Volver a noticias
                  </NavLink>

                  <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
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
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default NoticiaDetalle;
