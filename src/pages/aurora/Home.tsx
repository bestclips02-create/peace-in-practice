import { useEffect, useMemo, useState } from "react";
import { checkInOptions } from "@/data/content";
import dawn from "@/assets/dawn.jpg";
import { Sparkles, Heart, Footprints, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Onboarding } from "@/components/aurora/Onboarding";
import { computeLevel, loadState, registerAction, registerCheckIn, todayKey } from "@/lib/userState";
import { getDailyBundle, categoryLabel } from "@/lib/contentEngine";
import { toast } from "sonner";

export default function Home() {
  const [state, setState] = useState(loadState);
  const [needOnboard, setNeedOnboard] = useState(!state.onboarded);
  const [mood, setMood] = useState<string | null>(state.lastActiveDate === todayKey() ? state.lastMood : null);
  const [actionDone, setActionDone] = useState(false);

  const bundle = useMemo(() => mood ? getDailyBundle(mood) : null, [mood]);
  const level = computeLevel(state);

  useEffect(() => { setState(loadState()); }, [needOnboard]);

  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return "Bom dia"; if (h < 18) return "Boa tarde"; return "Boa noite";
  })();

  const onCheckIn = (m: string) => { const s = registerCheckIn(m); setState(s); setMood(m); };
  const completeAction = () => { setState(registerAction()); setActionDone(true); toast.success("Mais um passo. Você está construindo algo."); };

  if (needOnboard) return <Onboarding onDone={() => setNeedOnboard(false)} />;

  return (
    <div className="animate-fade-up">
      <header className="relative overflow-hidden rounded-b-[2.5rem]">
        <img src={dawn} alt="" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
        <div className="relative px-6 pt-12 pb-32">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-foreground/70">{greeting}</p>
            {state.streak > 0 && (
              <span className="flex items-center gap-1 rounded-full bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur"><Flame className="h-3.5 w-3.5 text-primary" />{state.streak} dias</span>
            )}
          </div>
          <h1 className="mt-2 font-display text-4xl leading-tight text-foreground">Seu momento<br/>com Deus</h1>
          <p className="mt-2 text-sm text-foreground/70">Nível <span className="font-medium text-primary">{level.name}</span></p>
        </div>
      </header>

      {!mood && (
        <section className="-mt-20 mx-5 rounded-3xl bg-card p-5 shadow-glow animate-fade-up">
          <p className="font-display text-lg">Como você está hoje?</p>
          <p className="text-sm text-muted-foreground mt-1">Vamos adaptar seu momento.</p>
          <div className="mt-4 flex justify-between gap-1">
            {checkInOptions.map(o => (
              <button key={o.id} onClick={() => onCheckIn(o.id)}
                className="flex flex-1 flex-col items-center gap-1 rounded-2xl py-3 transition-soft hover:bg-secondary">
                <span className="text-2xl">{o.emoji}</span>
                <span className="text-[10px] text-muted-foreground">{o.label}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {bundle && (
        <section className="-mt-20 mx-5 space-y-4 animate-fade-up">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Foco de hoje</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{categoryLabel[bundle.category]}</span>
          </div>

          <article className="rounded-3xl bg-card p-6 shadow-glow">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="h-4 w-4" /><span className="text-xs font-medium uppercase tracking-wider">Versículo</span>
            </div>
            <blockquote className="mt-3 font-display text-2xl leading-snug">"{bundle.verse.text}"</blockquote>
            <cite className="mt-2 block text-sm text-muted-foreground not-italic">{bundle.verse.ref}</cite>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-xl">Reflexão</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">{bundle.reflection}</p>
          </article>

          <article className="rounded-3xl bg-gradient-sage p-6 shadow-card">
            <div className="flex items-center gap-2 text-accent-foreground">
              <Heart className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-wider">Aplicação</span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-accent-foreground/90">
              Hoje, deixe esse versículo guiar uma escolha pequena. Onde você pode aplicar isso nas próximas horas?
            </p>
          </article>

          <article className="rounded-3xl border-2 border-primary/30 bg-card p-6 shadow-card">
            <div className="flex items-center gap-2 text-primary">
              <Footprints className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-wider">Ação de hoje</span>
            </div>
            <p className="mt-3 font-display text-lg leading-snug">{bundle.action}</p>
            <Button onClick={completeAction} disabled={actionDone} className="mt-4 w-full rounded-full" size="lg">
              {actionDone ? <><Check className="mr-2 h-4 w-4" /> Feito hoje</> : "Vou fazer hoje"}
            </Button>
          </article>

          <article className="rounded-3xl bg-gradient-dawn p-6 text-primary-foreground shadow-soft">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-90">Oração</span>
            <p className="mt-3 font-display text-lg leading-relaxed italic">{bundle.prayer}</p>
          </article>

          <p className="pt-2 text-center text-xs text-muted-foreground">
            Dia {state.daysCompleted} • Você está construindo um hábito
          </p>
        </section>
      )}
    </div>
  );
}
