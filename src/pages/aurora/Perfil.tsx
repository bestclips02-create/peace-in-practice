import { Bell, Crown, Heart, LogOut, Settings, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { computeLevel, loadState, saveState } from "@/lib/userState";

export default function Perfil() {
  const s = loadState();
  const level = computeLevel(s);
  const reset = () => {
    if (!confirm("Recomeçar do zero?")) return;
    localStorage.removeItem("aurora_state_v1");
    location.reload();
  };
  const goalLabel = ({ paz: "Mais paz", clareza: "Clareza", ansiedade: "Lidar com ansiedade", fe: "Fortalecer a fé" } as const)[s.goal ?? "paz"];

  return (
    <div className="px-5 pt-10 animate-fade-up">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-dawn font-display text-2xl text-primary-foreground shadow-soft">A</div>
        <div>
          <h1 className="font-display text-2xl">Olá</h1>
          <p className="text-sm text-muted-foreground">Nível {level.name} • {s.daysCompleted} {s.daysCompleted === 1 ? "dia" : "dias"}</p>
        </div>
      </div>

      <article className="mt-6 rounded-3xl bg-gradient-dawn p-6 text-primary-foreground shadow-glow">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-90">
          <Crown className="h-4 w-4" /> Aurora Premium
        </div>
        <h2 className="mt-3 font-display text-2xl leading-tight">Acesso completo a tudo</h2>
        <ul className="mt-4 space-y-1.5 text-sm opacity-95">
          <li>• Aconselhamento ilimitado com IA</li>
          <li>• Todas as jornadas e áudios</li>
          <li>• Conteúdo diário sem limites</li>
          <li>• 7 dias grátis</li>
        </ul>
        <p className="mt-5 font-display text-3xl">R$ 29,90<span className="text-base opacity-80">/mês</span></p>
        <Button variant="secondary" size="lg" className="mt-4 w-full rounded-full font-medium">Começar 7 dias grátis</Button>
      </article>

      <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
        {[
          { icon: Target, label: "Meu objetivo", value: goalLabel },
          { icon: Bell, label: "Notificações", value: ({ morning: "Manhã", afternoon: "Tarde", evening: "Noite", any: "Qualquer hora" } as const)[s.frequency] },
          { icon: Heart, label: "Favoritos", value: String(s.favorites.length) },
          { icon: Sparkles, label: "Nível", value: level.name },
          { icon: Settings, label: "Recomeçar", value: "" },
        ].map(({ icon: Icon, label, value }) => (
          <button key={label} onClick={label === "Recomeçar" ? reset : undefined}
            className="flex w-full items-center justify-between px-5 py-4 text-left transition-soft hover:bg-secondary/50">
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
