import { ArrowRight, Check, Lock, Sparkles } from "lucide-react";
import { planLibrary, recommendNextPlan } from "@/data/plans";
import { loadState, saveState } from "@/lib/userState";
import { useState } from "react";
import { toast } from "sonner";

export default function Planos() {
  const [s, setS] = useState(loadState);
  const recommended = recommendNextPlan(s.activePlan?.id ?? null, s.daysCompleted);

  const start = (id: string) => {
    const ns = loadState();
    ns.activePlan = { id, startedAt: new Date().toISOString(), currentDay: 1 };
    saveState(ns); setS(ns);
    toast.success("Jornada iniciada. Boa caminhada.");
  };

  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Jornadas guiadas</p>
      <h1 className="mt-1 font-display text-3xl">Caminhos para você</h1>

      <article className="mt-5 rounded-3xl border-2 border-primary/40 bg-card p-5 shadow-glow">
        <div className="flex items-center gap-2 text-primary">
          <Sparkles className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-widest">Recomendado para você</span>
        </div>
        <h2 className="mt-3 font-display text-2xl leading-tight">{recommended.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{recommended.description}</p>
        <button onClick={() => start(recommended.id)} className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
          Começar agora <ArrowRight className="h-4 w-4" />
        </button>
      </article>

      <div className="mt-6 space-y-4">
        {planLibrary.map(p => {
          const completed = s.completedPlans.some(c => c.id === p.id);
          const active = s.activePlan?.id === p.id;
          const locked = s.daysCompleted < p.unlockAt;
          const pct = active ? Math.round((s.activePlan!.currentDay / p.days) * 100) : completed ? 100 : 0;
          return (
            <article key={p.id} className={`relative overflow-hidden rounded-3xl ${p.color} p-6 text-primary-foreground shadow-card transition-soft hover:-translate-y-0.5 ${locked ? "opacity-60" : ""}`}>
              <div className="flex items-center justify-between text-xs opacity-90">
                <span className="rounded-full bg-white/25 px-3 py-1 font-medium backdrop-blur">{p.days} dias</span>
                {completed && <span className="flex items-center gap-1"><Check className="h-3.5 w-3.5" /> Concluído</span>}
                {active && <span>{s.activePlan!.currentDay}/{p.days}</span>}
                {locked && <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> desbloqueia em {p.unlockAt} dias</span>}
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight">{p.title}</h2>
              <p className="mt-2 text-sm opacity-90">{p.description}</p>
              {pct > 0 && (
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/25">
                  <div className="h-full bg-primary-foreground" style={{ width: `${pct}%` }} />
                </div>
              )}
              {!locked && (
                <button onClick={() => start(p.id)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2 text-sm font-medium text-primary">
                  {active ? "Continuar" : completed ? "Refazer" : "Começar"} <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Novas jornadas se abrem conforme você caminha.
      </p>
    </div>
  );
}
