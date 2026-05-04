import { useState } from "react";
import { situations, type Situation } from "@/data/content";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Situacoes() {
  const [selected, setSelected] = useState<Situation | null>(null);

  if (selected) {
    return (
      <div className="px-5 pt-8 animate-fade-up">
        <button onClick={() => setSelected(null)} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> voltar
        </button>
        <span className="text-5xl">{selected.emoji}</span>
        <h1 className="mt-3 font-display text-3xl">Quando você está {selected.emotion.toLowerCase()}</h1>

        <div className="mt-6 space-y-4">
          <Card label="Direção" body={selected.direction} tone="primary" />
          <Card label="Reflexão" body={selected.reflection} />
          <Card label="O que fazer agora" body={selected.action} tone="sage" />
          <article className="rounded-3xl bg-gradient-evening p-6 text-primary-foreground">
            <Sparkles className="h-4 w-4 opacity-80" />
            <p className="mt-2 font-display text-xl italic leading-snug">"{selected.verse}"</p>
            <p className="mt-2 text-xs opacity-80">{selected.reference}</p>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Ajuda imediata</p>
      <h1 className="mt-1 font-display text-3xl">Como você se sente?</h1>
      <p className="mt-2 text-muted-foreground">Escolha. Vamos te dar uma direção agora.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {situations.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s)}
            className="flex flex-col items-start gap-2 rounded-3xl border border-border bg-card p-5 text-left shadow-card transition-soft hover:-translate-y-0.5 hover:shadow-soft"
          >
            <span className="text-3xl">{s.emoji}</span>
            <span className="font-display text-lg">{s.emotion}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Card({ label, body, tone }: { label: string; body: string; tone?: "primary" | "sage" }) {
  const cls =
    tone === "primary" ? "border-2 border-primary/30 bg-card" :
    tone === "sage" ? "bg-gradient-sage text-accent-foreground" :
    "border border-border bg-card";
  return (
    <article className={`rounded-3xl p-6 shadow-card ${cls}`}>
      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{label}</span>
      <p className="mt-2 text-[15px] leading-relaxed">{body}</p>
    </article>
  );
}
