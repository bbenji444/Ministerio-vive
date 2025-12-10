import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Edit, Trash2, LogOut, Eye, EyeOff, Save } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Session, User } from "@supabase/supabase-js";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  published_at: string | null;
  created_at: string;
  is_published: boolean;
}

const Admin = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Auth form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // News form states
  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formImageUrl, setFormImageUrl] = useState("");
  const [formIsPublished, setFormIsPublished] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchNews();
    }
  }, [user]);

  const fetchNews = async () => {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setNews(data);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Error al iniciar sesión: " + error.message);
    } else {
      toast.success("¡Bienvenido!");
    }
    setAuthLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });

    if (error) {
      toast.error("Error al registrarse: " + error.message);
    } else {
      toast.success("¡Registro exitoso! Ya puedes iniciar sesión.");
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Sesión cerrada");
  };

  const resetForm = () => {
    setFormTitle("");
    setFormContent("");
    setFormExcerpt("");
    setFormImageUrl("");
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
    setFormImageUrl(item.image_url || "");
    setFormIsPublished(item.is_published);
    setEditingNews(item);
    setIsCreating(false);
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
      image_url: formImageUrl.trim() || null,
      is_published: formIsPublished,
      published_at: formIsPublished ? new Date().toISOString() : null,
      author_id: user?.id,
    };

    if (editingNews) {
      // Update
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
      // Create
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

  // Not authenticated - show login form
  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <main id="main-content" className="pt-44 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Panel de Administración</CardTitle>
                  <CardDescription>
                    Inicia sesión para gestionar las noticias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                      <TabsTrigger value="register">Registrarse</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <form onSubmit={handleLogin} className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="login-email">Correo electrónico</Label>
                          <Input
                            id="login-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@ministeriovive.org"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="login-password">Contraseña</Label>
                          <Input
                            id="login-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-primary"
                          disabled={authLoading}
                        >
                          {authLoading ? "Ingresando..." : "Iniciar Sesión"}
                        </Button>
                      </form>
                    </TabsContent>
                    <TabsContent value="register">
                      <form onSubmit={handleSignUp} className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="register-email">Correo electrónico</Label>
                          <Input
                            id="register-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="correo@ejemplo.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="register-password">Contraseña</Label>
                          <Input
                            id="register-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mínimo 6 caracteres"
                            minLength={6}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-primary"
                          disabled={authLoading}
                        >
                          {authLoading ? "Registrando..." : "Crear cuenta"}
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
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
                      <div>
                        <Label htmlFor="imageUrl">URL de imagen (opcional)</Label>
                        <Input
                          id="imageUrl"
                          value={formImageUrl}
                          onChange={(e) => setFormImageUrl(e.target.value)}
                          placeholder="https://..."
                        />
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
                          {item.image_url && (
                            <img
                              src={item.image_url}
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
                            <p className="text-xs text-muted-foreground mt-2">
                              {format(new Date(item.created_at), "dd MMM yyyy", { locale: es })}
                            </p>
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
