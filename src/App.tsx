import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Conocenos from "./pages/Conocenos";
import Nosotros from "./pages/Nosotros";
import HistoriasExito from "./pages/HistoriasExito";
import ProyectosDestacados from "./pages/ProyectosDestacados";
import Programa from "./pages/Programa";
import Donar from "./pages/Donar";
import Noticias from "./pages/Noticias";
import NoticiaDetalle from "./pages/NoticiaDetalle";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/conocenos" element={<Conocenos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/historias-exito" element={<HistoriasExito />} />
          <Route path="/proyectos-destacados" element={<ProyectosDestacados />} />
          <Route path="/programa/:id" element={<Programa />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticia/:id" element={<NoticiaDetalle />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
