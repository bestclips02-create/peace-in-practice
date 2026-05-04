import { plans } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Planos() {
  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Jornadas guiadas</p>
      <h1 className="mt-1 font-display text-3xl">Escolha um caminho</h1>
      <p className="mt-2 text-muted-foreground">Cada jornada é uma sequência pensada para uma transformação real.</p>

      <div className="mt-6 space-y-4">
        {plans.map((p) => {
          const pct = Math.round((p.progress / p.days) * 100);
          return (
            <article key={p.id} className={`overflow-hidden rounded-3xl ${p.color} p-6 text-primary-foreground shadow-card transition-soft hover:-translate-y-0.5`}>
              <div className="flex items-center justify-between text-xs opacity-90">
                <span className="rounded-full bg-white/25 px-3 py-1 font-medium backdrop-blur">{p.days} dias</span>
                {p.progress > 0 && <span>{p.progress}/{p.days}</span>}
              </div>
              <h2 className="mt-4 font-display text-2xl leading-tight">{p.title}</h2>
              <p className="mt-2 text-sm opacity-90">{p.description}</p>
              {p.progress > 0 && (
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/25">
                  <div className="h-full bg-primary-foreground" style={{ width: `${pct}%` }} />
                </div>
              )}
              <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-2 text-sm font-medium text-primary">
                {p.progress > 0 ? "Continuar" : "Começar"} <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
