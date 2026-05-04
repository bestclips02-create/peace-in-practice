import { Flame, Award, Calendar } from "lucide-react";

const levels = [
  { name: "Iniciante", reached: true },
  { name: "Equilíbrio", reached: true },
  { name: "Clareza", reached: false, current: true },
  { name: "Confiança", reached: false },
];

export default function Evolucao() {
  const streak = 12;
  const completed = 24;
  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Sua jornada</p>
      <h1 className="mt-1 font-display text-3xl">Você está evoluindo</h1>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-3xl bg-gradient-dawn p-5 text-primary-foreground shadow-soft">
          <Flame className="h-6 w-6" />
          <p className="mt-3 text-4xl font-display">{streak}</p>
          <p className="text-sm opacity-90">dias consecutivos</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5">
          <Calendar className="h-6 w-6 text-primary" />
          <p className="mt-3 text-4xl font-display">{completed}</p>
          <p className="text-sm text-muted-foreground">momentos cumpridos</p>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-xl">Sua fase atual</h2>
        <div className="mt-4 space-y-2">
          {levels.map((l, i) => (
            <div
              key={l.name}
              className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-soft ${
                l.current ? "border-primary bg-primary/5" : l.reached ? "border-border bg-card" : "border-dashed border-border bg-transparent opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium ${
                  l.reached ? "bg-primary text-primary-foreground" : l.current ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                }`}>{i + 1}</div>
                <div>
                  <p className="font-medium">{l.name}</p>
                  {l.current && <p className="text-xs text-primary">Você está aqui</p>}
                </div>
              </div>
              {l.reached && <Award className="h-5 w-5 text-primary" />}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl bg-gradient-sage p-6 shadow-card">
        <h3 className="font-display text-lg text-accent-foreground">Última semana</h3>
        <div className="mt-4 flex justify-between">
          {["S","T","Q","Q","S","S","D"].map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className={`h-8 w-8 rounded-full ${i < 6 ? "bg-accent-foreground/80" : "bg-accent-foreground/20"}`} />
              <span className="text-xs text-accent-foreground/80">{d}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
