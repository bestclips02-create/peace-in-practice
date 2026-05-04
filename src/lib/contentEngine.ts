// Motor inteligente: combina versículo + reflexão + ação + oração SEM repetir.
import { actions, prayers, reflections, verses, moodToCategory, type Category } from "@/data/library";
import { loadState, pushRecent, todayKey, userCategories } from "./userState";

function dayHash() {
  // estável por dia para o mesmo usuário (não por hora)
  let h = 0;
  const k = todayKey();
  for (let i = 0; i < k.length; i++) h = (h * 31 + k.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pick<T extends { cats: Category[] }>(pool: T[], wanted: Category[], recent: string[], idOf: (t: T) => string, salt = 0): T {
  // 1) preferred = matches at least one wanted category and not in recent
  const score = (item: T) => {
    const overlap = item.cats.filter(c => wanted.includes(c)).length;
    const fresh = recent.includes(idOf(item)) ? 0 : 1;
    return overlap * 10 + fresh * 3;
  };
  const sorted = [...pool].sort((a, b) => score(b) - score(a));
  // pick from top 5, varied per day
  const top = sorted.slice(0, Math.min(5, sorted.length));
  return top[(dayHash() + salt) % top.length];
}

const vid = (v: { ref: string }) => v.ref;
const rid = (r: { text: string }) => r.text.slice(0, 40);

export type DailyBundle = {
  verse: { text: string; ref: string };
  reflection: string;
  action: string;
  prayer: string;
  category: Category;
};

export function getDailyBundle(moodOverride?: string): DailyBundle {
  const s = loadState();
  const mood = moodOverride ?? s.lastMood ?? "ok";
  const moodCats = moodToCategory[mood] ?? ["paz"];
  const wanted: Category[] = Array.from(new Set([...moodCats, ...userCategories(s)]));

  const v = pick(verses, wanted, s.recent.verses, vid, 0);
  const r = pick(reflections, wanted, s.recent.reflections, rid, 1);
  const a = pick(actions, wanted, s.recent.actions, rid, 2);
  const p = pick(prayers, wanted, s.recent.prayers, rid, 3);

  pushRecent("verses", vid(v));
  pushRecent("reflections", rid(r));
  pushRecent("actions", rid(a));
  pushRecent("prayers", rid(p));

  return { verse: { text: v.text, ref: v.ref }, reflection: r.text, action: a.text, prayer: p.text, category: wanted[0] };
}

export const categoryLabel: Record<Category, string> = {
  paz: "Paz", ansiedade: "Ansiedade", medo: "Coragem",
  decisoes: "Decisão", confianca: "Confiança", direcao: "Direção",
  raiva: "Calma", tristeza: "Acolhimento", gratidao: "Gratidão",
};
