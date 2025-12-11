import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff, Save, X, Lock } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ADMIN_PASSWORD = "Utrilla1956";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  images: string[] | null;
  published_at: string | null;
  created_at: string;
  is_published: boolean;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Auth form state
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // News form states
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formImages, setFormImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [formIsPublished, setFormIsPublished] = useState(true);

  useEffect(() => {
    // Check if already authenticated via sessionStorage
    const auth = sessionStorage.getItem("ministerio_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      fetchNews();
    }
    setLoading(false);
  }, []);

  const fetchNews = async () => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setNews(data as NewsItem[]);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("ministerio_admin_auth", "true");
      setIsAuthenticated(true);
      fetchNews();
      toast.success("¡Bienvenido al panel de administración!");
    } else {
      toast.error("Contraseña incorrecta");
    }
    setAuthLoading(false);
    setPassword("");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("ministerio_admin_auth");
    setIsAuthenticated(false);
    setNews([]);
    toast.success("Sesión cerrada");
  };

  const resetForm = () => {
    setFormTitle("");
    setFormContent("");
    setFormExcerpt("");
    setFormImages([]);
    setNewImageUrl("");
    setFormIsPublished(true);
    setEditingNews(null);
    setIsCreating(false);
  };

  const openCreateForm = () => {
    resetForm();
    setIsCreating(true);
  };

  const openEditForm = (item: NewsItem) => {
    setFormTitle(item.title);
    setFormContent(item.content);
    setFormExcerpt(item.excerpt || "");
    setFormImages(item.images || (item.image_url ? [item.image_url] : []));
    setFormIsPublished(item.is_published);
    setEditingNews(item);
    setIsCreating(false);
  };

  const addImage = () => {
    if (newImageUrl.trim()) {
      setFormImages([...formImages, newImageUrl.trim()]);
      setNewImageUrl("");
    }
  };

  const removeImage = (index: number) => {
    setFormImages(formImages.filter((_, i) => i !== index));
  };

  const handleSaveNews = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formTitle.trim() || !formContent.trim()) {
      toast.error("El título y contenido son obligatorios");
      return;
    }

    const newsData = {
      title: formTitle.trim(),
      content: formContent.trim(),
      excerpt: formExcerpt.trim() || null,
      image_url: formImages[0] || null,
      images: formImages.length > 0 ? formImages : null,
      is_published: formIsPublished,
      published_at: formIsPublished ? new Date().toISOString() : null,
    };

    if (editingNews) {
      const { error } = await supabase
        .from("news")
        .update(newsData)
        .eq("id", editingNews.id);

      if (error) {
        toast.error("Error al actualizar: " + error.message);
      } else {
        toast.success("Noticia actualizada");
        resetForm();
        fetchNews();
      }
    } else {
      const { error } = await supabase.from("news").insert(newsData);

      if (error) {
        toast.error("Error al crear: " + error.message);
      } else {
        toast.success("Noticia creada");
        resetForm();
        fetchNews();
      }
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar esta noticia?")) return;

    const { error } = await supabase.from("news").delete().eq("id", id);

    if (error) {
      toast.error("Error al eliminar: " + error.message);
    } else {
      toast.success("Noticia eliminada");
      fetchNews();
    }
  };

  const togglePublished = async (item: NewsItem) => {
    const { error } = await supabase
      .from("news")
      .update({ 
        is_published: !item.is_published,
        published_at: !item.is_published ? new Date().toISOString() : null
      })
      .eq("id", item.id);

    if (error) {
      toast.error("Error al actualizar");
    } else {
      toast.success(item.is_published ? "Noticia ocultada" : "Noticia publicada");
      fetchNews();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Not authenticated - show password form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="pt-44 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Panel de Administración</CardTitle>
                  <CardDescription>
                    Ingresa la contraseña para acceder
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="password">Contraseña</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        autoFocus
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary"
                      disabled={authLoading}
                    >
                      {authLoading ? "Verificando..." : "Ingresar"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Authenticated - show admin panel
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main id="main-content" className="pt-44 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestiona las noticias del sitio</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={openCreateForm} className="bg-gradient-primary">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Noticia
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            {(isCreating || editingNews) && (
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{editingNews ? "Editar Noticia" : "Nueva Noticia"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSaveNews} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Título *</Label>
                        <Input
                          id="title"
                          value={formTitle}
                          onChange={(e) => setFormTitle(e.target.value)}
                          placeholder="Título de la noticia"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="excerpt">Resumen (opcional)</Label>
                        <Input
                          id="excerpt"
                          value={formExcerpt}
                          onChange={(e) => setFormExcerpt(e.target.value)}
                          placeholder="Breve descripción"
                        />
                      </div>
                      
                      {/* Multiple Images */}
                      <div>
                        <Label>Imágenes</Label>
                        <div className="space-y-2">
                          {formImages.map((img, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <img src={img} alt={`Imagen ${index + 1}`} className="w-16 h-16 object-cover rounded" />
                              <span className="flex-1 text-sm truncate">{img}</span>
                              <Button 
                                type="button" 
                                size="icon" 
                                variant="ghost"
                                onClick={() => removeImage(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                          <div className="flex gap-2">
                            <Input
                              value={newImageUrl}
                              onChange={(e) => setNewImageUrl(e.target.value)}
                              placeholder="URL de imagen"
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  addImage();
                                }
                              }}
                            />
                            <Button type="button" onClick={addImage} variant="outline">
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="content">Contenido *</Label>
                        <Textarea
                          id="content"
                          value={formContent}
                          onChange={(e) => setFormContent(e.target.value)}
                          placeholder="Escribe el contenido de la noticia..."
                          rows={8}
                          required
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="published"
                          checked={formIsPublished}
                          onChange={(e) => setFormIsPublished(e.target.checked)}
                          className="rounded"
                        />
                        <Label htmlFor="published">Publicar inmediatamente</Label>
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" className="flex-1 bg-gradient-primary">
                          <Save className="w-4 h-4 mr-2" />
                          Guardar
                        </Button>
                        <Button type="button" variant="outline" onClick={resetForm}>
                          Cancelar
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* News List */}
            <div className={isCreating || editingNews ? "lg:col-span-2" : "lg:col-span-3"}>
              <Card>
                <CardHeader>
                  <CardTitle>Noticias ({news.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {news.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <p>No hay noticias todavía.</p>
                      <Button onClick={openCreateForm} className="mt-4" variant="outline">
                        Crear primera noticia
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {news.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-4 p-4 bg-background rounded-lg border"
                        >
                          {(item.images?.[0] || item.image_url) && (
                            <img
                              src={item.images?.[0] || item.image_url || ""}
                              alt={item.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-semibold truncate">{item.title}</h3>
                              <span
                                className={`px-2 py-1 text-xs rounded-full flex-shrink-0 ${
                                  item.is_published
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                              >
                                {item.is_published ? "Publicado" : "Borrador"}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                              {item.excerpt || item.content.substring(0, 100)}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <p className="text-xs text-muted-foreground">
                                {format(new Date(item.created_at), "dd MMM yyyy", { locale: es })}
                              </p>
                              {item.images && item.images.length > 1 && (
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                  {item.images.length} imágenes
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2 flex-shrink-0">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => togglePublished(item)}
                              title={item.is_published ? "Ocultar" : "Publicar"}
                            >
                              {item.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => openEditForm(item)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-destructive hover:text-destructive"
                              onClick={() => handleDeleteNews(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;