import { audios } from "@/data/content";
import { Play } from "lucide-react";

const cats = ["Todos", "Ansiedade", "Calma", "Confiança", "Entrega", "Descanso"];

export default function Audios() {
  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Áudios guiados</p>
      <h1 className="mt-1 font-display text-3xl">Pause. Respire.</h1>

      <div className="mt-5 -mx-5 flex gap-2 overflow-x-auto px-5 pb-2">
        {cats.map((c, i) => (
          <button key={c} className={`whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-soft ${i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-3xl bg-gradient-evening p-6 text-primary-foreground shadow-glow">
        <div className="flex items-center justify-center">
          <div className="relative flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 animate-breathe rounded-full bg-primary-foreground/20" />
            <div className="absolute inset-4 animate-breathe rounded-full bg-primary-foreground/30" style={{ animationDelay: "0.5s" }} />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground text-primary">
              <Play className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs uppercase tracking-widest opacity-80">Recomendado agora</p>
        <p className="mt-1 text-center font-display text-xl">Respiração para ansiedade</p>
        <p className="mt-1 text-center text-sm opacity-80">3 minutos</p>
      </div>

      <div className="mt-6 space-y-3">
        {audios.map((a) => (
          <article key={a.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-soft hover:-translate-y-0.5">
            <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-dawn text-primary-foreground shadow-soft">
              <Play className="h-5 w-5 fill-current" />
            </button>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{a.title}</p>
              <p className="truncate text-xs text-muted-foreground">{a.category} • {a.duration}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
