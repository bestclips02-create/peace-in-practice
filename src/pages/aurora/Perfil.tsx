import { Bell, Crown, Heart, LogOut, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Perfil() {
  return (
    <div className="px-5 pt-10 animate-fade-up">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-dawn font-display text-2xl text-primary-foreground shadow-soft">A</div>
        <div>
          <h1 className="font-display text-2xl">Olá</h1>
          <p className="text-sm text-muted-foreground">Caminhando há 12 dias</p>
        </div>
      </div>

      {/* Premium card */}
      <article className="mt-6 rounded-3xl bg-gradient-dawn p-6 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-90">
          <Crown className="h-4 w-4" /> Aurora Premium
        </div>
        <h2 className="mt-3 font-display text-2xl leading-tight">Acesso completo a tudo</h2>
        <ul className="mt-4 space-y-1.5 text-sm opacity-95">
          <li>• Todos os planos e jornadas</li>
          <li>• Biblioteca completa de áudios</li>
          <li>• Conteúdo diário sem limites</li>
          <li>• 7 dias grátis</li>
        </ul>
        <p className="mt-5 font-display text-3xl">R$ 29,90<span className="text-base opacity-80">/mês</span></p>
        <Button variant="secondary" size="lg" className="mt-4 w-full rounded-full font-medium">Começar 7 dias grátis</Button>
      </article>

      <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
        {[
          { icon: Sparkles, label: "Meu objetivo", value: "Mais paz" },
          { icon: Bell, label: "Notificações", value: "Manhã" },
          { icon: Heart, label: "Favoritos", value: "8" },
          { icon: Settings, label: "Preferências", value: "" },
        ].map(({ icon: Icon, label, value }) => (
          <button key={label} className="flex w-full items-center justify-between px-5 py-4 text-left transition-soft hover:bg-secondary/50">
            <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-muted-foreground" />{label}</span>
            <span className="text-sm text-muted-foreground">{value}</span>
          </button>
        ))}
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm text-muted-foreground">
        <LogOut className="h-4 w-4" /> Sair
      </button>
    </div>
  );
}
