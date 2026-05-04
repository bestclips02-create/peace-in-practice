import { Flame, Award, Calendar, TrendingUp } from "lucide-react";
import { computeLevel, levelNames, loadState, todayKey } from "@/lib/userState";

export default function Evolucao() {
  const s = loadState();
  const level = computeLevel(s);
  const names = levelNames();
  const last7 = (() => {
    const days: { key: string; label: string; active: boolean }[] = [];
    const labels = ["D","S","T","Q","Q","S","S"];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
      days.push({ key: k, label: labels[d.getDay()], active: s.moodHistory.some(m => m.date === k) || s.lastActiveDate === k });
    }
    return days;
  })();

  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Sua jornada</p>
      <h1 className="mt-1 font-display text-3xl">Você está evoluindo</h1>
      <p className="mt-2 text-sm text-muted-foreground">Cada pequeno passo conta. Continue.</p>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-gradient-dawn p-5 text-primary-foreground shadow-soft">
          <Flame className="h-6 w-6" />
          <p className="mt-3 text-4xl font-display">{s.streak}</p>
          <p className="text-sm opacity-90">dias seguidos</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5">
          <Calendar className="h-6 w-6 text-primary" />
          <p className="mt-3 text-4xl font-display">{s.daysCompleted}</p>
          <p className="text-sm text-muted-foreground">momentos vividos</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5">
          <TrendingUp className="h-6 w-6 text-primary" />
          <p className="mt-3 text-4xl font-display">{s.actionsTaken}</p>
          <p className="text-sm text-muted-foreground">ações concretas</p>
        </div>
        <div className="rounded-3xl bg-gradient-sage p-5 text-accent-foreground">
          <Award className="h-6 w-6" />
          <p className="mt-3 text-2xl font-display">{level.name}</p>
          <p className="text-sm opacity-90">nível atual</p>
        </div>
      </div>

      {/* Progress to next level */}
      <section className="mt-6 rounded-3xl border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Progresso para o próximo nível</p>
          <p className="text-xs text-muted-foreground">{level.pctToNext}%</p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-gradient-dawn transition-soft" style={{ width: `${level.pctToNext}%` }} />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl">Sua fase</h2>
        <div className="mt-4 space-y-2">
          {names.map((n, i) => {
            const reached = i < level.idx;
            const current = i === level.idx;
            return (
              <div key={n}
                className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-soft ${
                  current ? "border-primary bg-primary/5" : reached ? "border-border bg-card" : "border-dashed border-border bg-transparent opacity-60"
                }`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                    reached ? "bg-primary text-primary-foreground" : current ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                  }`}>{i + 1}</div>
                  <div>
                    <p className="font-medium">{n}</p>
                    {current && <p className="text-xs text-primary">Você está aqui</p>}
                  </div>
                </div>
                {reached && <Award className="h-5 w-5 text-primary" />}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-gradient-sage p-6 shadow-card">
        <h3 className="font-display text-lg text-accent-foreground">Última semana</h3>
        <div className="mt-4 flex justify-between">
          {last7.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`h-8 w-8 rounded-full transition-soft ${d.active ? "bg-accent-foreground/80" : "bg-accent-foreground/20"}`} />
              <span className="text-xs text-accent-foreground/80">{d.label}</span>
            </div>
          ))}
        </div>
      </section>

      {s.daysCompleted > 0 && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {s.streak >= 7 ? "🔥 Você está em ritmo. Continue assim." : "Pequenos passos consistentes mudam tudo."}
        </p>
      )}
    </div>
  );
}
