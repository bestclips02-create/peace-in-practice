import { useState } from "react";
import { situations, type Situation } from "@/data/content";
import { ArrowLeft, Sparkles, Send, Loader2, MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { loadState } from "@/lib/userState";
import { toast } from "sonner";

type AIResp = { direcao: string; reflexao: string; acao: string; versiculo: string; referencia: string };

export default function Situacoes() {
  const [selected, setSelected] = useState<Situation | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResp, setAiResp] = useState<AIResp | null>(null);

  const askAI = async () => {
    if (text.trim().length < 3) return;
    setLoading(true); setAiResp(null);
    const s = loadState();
    try {
      const { data, error } = await supabase.functions.invoke("ai-help", {
        body: { situation: text, mood: s.lastMood, context: s.goal ? `objetivo do usuário: ${s.goal}` : null },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setAiResp(data);
    } catch (e: any) {
      toast.error(e.message ?? "Não foi possível responder agora.");
    } finally { setLoading(false); }
  };

  if (aiOpen) {
    return (
      <div className="px-5 pt-8 animate-fade-up pb-10">
        <button onClick={() => { setAiOpen(false); setAiResp(null); setText(""); }} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> voltar
        </button>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Aconselhamento agora</p>
        <h1 className="mt-1 font-display text-3xl">Conte o que está sentindo</h1>
        <p className="mt-2 text-muted-foreground text-sm">Escreva livremente. Quanto mais real, melhor a resposta.</p>

        <Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Estou sentindo..." rows={5}
          className="mt-4 rounded-2xl border-border bg-card text-base" />
        <Button onClick={askAI} disabled={loading || text.trim().length < 3} className="mt-3 w-full rounded-full" size="lg">
          {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Pensando contigo...</> : <><Send className="mr-2 h-4 w-4" />Pedir orientação</>}
        </Button>

        {aiResp && (
          <div className="mt-6 space-y-4 animate-fade-up">
            <Card label="Direção" body={aiResp.direcao} tone="primary" />
            <Card label="Reflexão" body={aiResp.reflexao} />
            <Card label="O que fazer agora" body={aiResp.acao} tone="sage" />
            <article className="rounded-3xl bg-gradient-evening p-6 text-primary-foreground">
              <Sparkles className="h-4 w-4 opacity-80" />
              <p className="mt-2 font-display text-xl italic leading-snug">"{aiResp.versiculo}"</p>
              <p className="mt-2 text-xs opacity-80">{aiResp.referencia}</p>
            </article>
          </div>
        )}
      </div>
    );
  }

  if (selected) {
    return (
      <div className="px-5 pt-8 animate-fade-up pb-10">
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
          <Button variant="outline" className="w-full rounded-full" onClick={() => { setSelected(null); setAiOpen(true); }}>
            Quero falar mais sobre isso
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pt-10 animate-fade-up">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Ajuda imediata</p>
      <h1 className="mt-1 font-display text-3xl">Como você se sente?</h1>

      <button onClick={() => setAiOpen(true)}
        className="mt-5 flex w-full items-center gap-3 rounded-3xl bg-gradient-dawn p-5 text-left text-primary-foreground shadow-glow transition-soft hover:-translate-y-0.5">
        <MessageCircleHeart className="h-7 w-7 shrink-0" />
        <div>
          <p className="font-display text-lg leading-tight">Preciso de ajuda agora</p>
          <p className="text-xs opacity-90">Conselho personalizado para o que você sente</p>
        </div>
      </button>

      <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Ou escolha uma emoção</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {situations.map(s => (
          <button key={s.id} onClick={() => setSelected(s)}
            className="flex flex-col items-start gap-2 rounded-3xl border border-border bg-card p-5 text-left shadow-card transition-soft hover:-translate-y-0.5 hover:shadow-soft">
            <span className="text-3xl">{s.emoji}</span>
            <span className="font-display text-lg">{s.emotion}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Card({ label, body, tone }: { label: string; body: string; tone?: "primary" | "sage" }) {
  const cls = tone === "primary" ? "border-2 border-primary/30 bg-card"
    : tone === "sage" ? "bg-gradient-sage text-accent-foreground"
    : "border border-border bg-card";
  return (
    <article className={`rounded-3xl p-6 shadow-card ${cls}`}>
      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{label}</span>
      <p className="mt-2 text-[15px] leading-relaxed">{body}</p>
    </article>
  );
}
