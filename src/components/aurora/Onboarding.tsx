import { useState } from "react";
import { Button } from "@/components/ui/button";
import { loadState, saveState, type Goal, type Frequency } from "@/lib/userState";
import { Sparkles } from "lucide-react";

const goals: { id: Goal; label: string; desc: string; emoji: string }[] = [
  { id: "paz", label: "Mais paz", desc: "Acalmar a mente, reduzir o ruído", emoji: "🌿" },
  { id: "clareza", label: "Clareza", desc: "Saber o próximo passo certo", emoji: "🧭" },
  { id: "ansiedade", label: "Lidar com ansiedade", desc: "Ferramentas para o dia a dia", emoji: "🌬️" },
  { id: "fe", label: "Fortalecer a fé", desc: "Confiar mais, controlar menos", emoji: "✨" },
];
const freqs: { id: Frequency; label: string }[] = [
  { id: "morning", label: "Manhã" }, { id: "afternoon", label: "Tarde" },
  { id: "evening", label: "Noite" }, { id: "any", label: "Quando der" },
];

export function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [freq, setFreq] = useState<Frequency>("morning");

  const finish = () => {
    const s = loadState();
    s.onboarded = true; s.goal = goal; s.frequency = freq;
    saveState(s);
    onDone();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-sunrise px-6 py-10 animate-fade-up">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <div className="mb-8 flex items-center gap-2 text-primary">
          <Sparkles className="h-5 w-5" /><span className="text-sm font-medium uppercase tracking-widest">Aurora</span>
        </div>

        {step === 0 && (
          <>
            <h1 className="font-display text-4xl leading-tight">Bem-vindo.<br/>Vamos começar leve.</h1>
            <p className="mt-4 text-foreground/70">Algumas perguntas rápidas para adaptar sua experiência.</p>
            <div className="mt-auto"><Button size="lg" className="w-full rounded-full" onClick={() => setStep(1)}>Começar</Button></div>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="font-display text-3xl leading-tight">O que você mais busca agora?</h2>
            <div className="mt-6 space-y-3">
              {goals.map(g => (
                <button key={g.id} onClick={() => setGoal(g.id)}
                  className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-soft ${goal === g.id ? "border-primary bg-card shadow-soft" : "border-border bg-card/60"}`}>
                  <span className="text-3xl">{g.emoji}</span>
                  <div><p className="font-display text-lg">{g.label}</p><p className="text-sm text-muted-foreground">{g.desc}</p></div>
                </button>
              ))}
            </div>
            <div className="mt-auto pt-6"><Button size="lg" disabled={!goal} className="w-full rounded-full" onClick={() => setStep(2)}>Continuar</Button></div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="font-display text-3xl leading-tight">Quando você prefere seu momento?</h2>
            <p className="mt-2 text-foreground/70">Vamos te lembrar com gentileza nesse horário.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {freqs.map(f => (
                <button key={f.id} onClick={() => setFreq(f.id)}
                  className={`rounded-2xl border-2 p-5 font-display text-lg transition-soft ${freq === f.id ? "border-primary bg-card shadow-soft" : "border-border bg-card/60"}`}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-6"><Button size="lg" className="w-full rounded-full" onClick={finish}>Entrar no Aurora</Button></div>
          </>
        )}
      </div>
    </div>
  );
}
