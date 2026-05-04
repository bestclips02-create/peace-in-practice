import type { Category } from "./library";

export type PlanDef = {
  id: string;
  title: string;
  days: number;
  description: string;
  color: string;
  focus: Category[];
  unlockAt: number; // daysCompleted required
};

export const planLibrary: PlanDef[] = [
  { id: "calm-7", title: "Acalmar a mente", days: 7, description: "Sete dias para reduzir o ruído interno e voltar ao centro.", color: "bg-gradient-sage", focus: ["paz", "ansiedade"], unlockAt: 0 },
  { id: "emotion-14", title: "Controle emocional", days: 14, description: "Aprenda a sentir sem reagir. Responda à vida com clareza.", color: "bg-gradient-dawn", focus: ["raiva", "paz", "ansiedade"], unlockAt: 0 },
  { id: "faith-21", title: "Fortalecer a fé", days: 21, description: "Construa uma confiança que não depende das circunstâncias.", color: "bg-gradient-evening", focus: ["confianca", "medo"], unlockAt: 7 },
  { id: "peace-30", title: "Viver com mais paz", days: 30, description: "Trinta dias de pequenas práticas que mudam o ritmo da sua alma.", color: "bg-gradient-sunrise", focus: ["paz", "gratidao"], unlockAt: 14 },
  { id: "direction-10", title: "Encontrar direção", days: 10, description: "Dez dias para clarear decisões importantes.", color: "bg-gradient-dawn", focus: ["direcao", "decisoes"], unlockAt: 7 },
  { id: "gratitude-7", title: "7 dias de gratidão", days: 7, description: "Reprograme o olhar. Note o que já está dando certo.", color: "bg-gradient-sage", focus: ["gratidao"], unlockAt: 0 },
  { id: "courage-14", title: "Coragem para agir", days: 14, description: "Para vencer medos paralisantes e dar o próximo passo.", color: "bg-gradient-evening", focus: ["medo", "confianca"], unlockAt: 21 },
  { id: "peace-deep-60", title: "Constância — 60 dias", days: 60, description: "Para quem já caminha. Aprofunde a paz como estilo de vida.", color: "bg-gradient-dawn", focus: ["paz", "confianca", "gratidao"], unlockAt: 50 },
];

export function recommendNextPlan(currentId: string | null, daysCompleted: number): PlanDef {
  const sequence = ["calm-7", "gratitude-7", "emotion-14", "direction-10", "faith-21", "courage-14", "peace-30", "peace-deep-60"];
  const i = currentId ? sequence.indexOf(currentId) : -1;
  const next = sequence[(i + 1) % sequence.length];
  const found = planLibrary.find(p => p.id === next && daysCompleted >= p.unlockAt);
  return found ?? planLibrary[0];
}
