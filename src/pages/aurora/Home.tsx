import { useState } from "react";
import { dailyContent, checkInOptions } from "@/data/content";
import dawn from "@/assets/dawn.jpg";
import { Sparkles, Heart, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const today = dailyContent[new Date().getDate() % dailyContent.length];
  const [mood, setMood] = useState<string | null>(null);
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Bom dia";
    if (h < 18) return "Boa tarde";
    return "Boa noite";
  })();

  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <header className="relative overflow-hidden rounded-b-[2.5rem]">
        <img src={dawn} alt="Amanhecer suave" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
        <div className="relative px-6 pt-12 pb-32">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/70">{greeting}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground">
            Seu momento<br/>com Deus
          </h1>
        </div>
      </header>

      {/* Check-in */}
      {!mood && (
        <section className="-mt-20 mx-5 rounded-3xl bg-card p-5 shadow-glow animate-fade-up">
          <p className="font-display text-lg">Como você está hoje?</p>
          <p className="text-sm text-muted-foreground mt-1">Vamos adaptar seu momento.</p>
          <div className="mt-4 flex justify-between gap-1">
            {checkInOptions.map((o) => (
              <button
                key={o.id}
                onClick={() => setMood(o.id)}
                className="flex flex-1 flex-col items-center gap-1 rounded-2xl py-3 transition-soft hover:bg-secondary"
              >
                <span className="text-2xl">{o.emoji}</span>
                <span className="text-[10px] text-muted-foreground">{o.label}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {mood && (
        <section className="-mt-20 mx-5 space-y-4 animate-fade-up">
          {/* Verse card */}
          <article className="rounded-3xl bg-card p-6 shadow-glow">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Versículo de hoje</span>
            </div>
            <blockquote className="mt-3 font-display text-2xl leading-snug text-foreground">
              "{today.verse}"
            </blockquote>
            <cite className="mt-2 block text-sm text-muted-foreground not-italic">{today.reference}</cite>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl">Reflexão</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{today.explanation}</p>
          </article>

          <article className="rounded-3xl bg-gradient-sage p-6 shadow-card">
            <div className="flex items-center gap-2 text-accent-foreground">
              <Heart className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Aplicação prática</span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-accent-foreground/90">{today.application}</p>
          </article>

          <article className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              <Footprints className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Ação de hoje</span>
            </div>
            <p className="mt-3 font-display text-lg leading-snug">{today.action}</p>
            <Button className="mt-4 w-full rounded-full" size="lg">Vou fazer hoje</Button>
          </article>

          <article className="rounded-3xl bg-gradient-dawn p-6 text-primary-foreground shadow-soft">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-90">Oração</span>
            <p className="mt-3 font-display text-lg leading-relaxed italic">{today.prayer}</p>
          </article>

          <p className="pt-2 text-center text-xs text-muted-foreground">
            Dia {today.day} • Você está construindo um hábito
          </p>
        </section>
      )}
    </div>
  );
}
