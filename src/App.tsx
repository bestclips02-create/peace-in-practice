import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/aurora/AppShell";
import Home from "./pages/aurora/Home";
import Situacoes from "./pages/aurora/Situacoes";
import Evolucao from "./pages/aurora/Evolucao";
import Planos from "./pages/aurora/Planos";
import Audios from "./pages/aurora/Audios";
import Perfil from "./pages/aurora/Perfil";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/situacoes" element={<Situacoes />} />
            <Route path="/evolucao" element={<Evolucao />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/audios" element={<Audios />} />
            <Route path="/perfil" element={<Perfil />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
