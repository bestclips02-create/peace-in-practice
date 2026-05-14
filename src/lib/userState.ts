// Estado local do usuário — base do motor de personalização e anti-repetição
import { Category } from "@/data/library";

const KEY = "aurora_state_v1";

export type Goal = "paz" | "clareza" | "ansiedade" | "fe";
export type Frequency = "morning" | "afternoon" | "evening" | "any";

export type CompletedPlan = { id: string; completedAt: string };
export type ActivePlan = { id: string; startedAt: string; currentDay: number };

export type UserState = {
  onboarded: boolean;
  goal: Goal | null;
  frequency: Frequency;
  name: string | null;
  // Streak
  streak: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  // History
  daysCompleted: number;
  actionsTaken: number;
  // Anti-repetition: track recently shown content ids
  recent: { verses: string[]; reflections: string[]; actions: string[]; prayers: string[] };
  // Mood
  lastMood: string | null;
  moodHistory: { date: string; mood: string }[];
  // Plans
  activePlan: ActivePlan | null;
  completedPlans: CompletedPlan[];
  // Favorites
  favorites: string[];
};

const initial: UserState = {
  onboarded: false, goal: null, frequency: "morning", name: null,
  streak: 0, lastActiveDate: null,
  daysCompleted: 0, actionsTaken: 0,
  recent: { verses: [], reflections: [], actions: [], prayers: [] },
  lastMood: null, moodHistory: [],
  activePlan: null, completedPlans: [],
  favorites: [],
};

export function loadState(): UserState {
  if (typeof window === "undefined") return initial;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initial;
    return { ...initial, ...JSON.parse(raw) };
  } catch { return initial; }
}

export function saveState(s: UserState) {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

export function registerCheckIn(mood: string): UserState {
  const s = loadState();
  const today = todayKey();
  if (s.lastActiveDate !== today) {
    // Update streak
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    const yKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,"0")}-${String(yesterday.getDate()).padStart(2,"0")}`;
    s.streak = s.lastActiveDate === yKey ? s.streak + 1 : 1;
    s.daysCompleted += 1;
    s.lastActiveDate = today;
  }
  s.lastMood = mood;
  s.moodHistory = [{ date: today, mood }, ...s.moodHistory].slice(0, 60);
  saveState(s);
  return s;
}

export function registerAction(): UserState {
  const s = loadState();
  s.actionsTaken += 1;
  saveState(s);
  return s;
}

export function pushRecent(kind: keyof UserState["recent"], id: string, max = 12) {
  const s = loadState();
  const list = [id, ...s.recent[kind].filter(x => x !== id)].slice(0, max);
  s.recent = { ...s.recent, [kind]: list };
  saveState(s);
}

// Level system — based on consistency
export type Level = { idx: number; name: string; min: number; next: number; pctToNext: number };
const LEVELS = [
  { name: "Iniciante", min: 0 },
  { name: "Equilíbrio", min: 7 },
  { name: "Clareza", min: 21 },
  { name: "Confiança", min: 50 },
  { name: "Constância", min: 100 },
];
export function computeLevel(s: UserState): Level {
  const score = s.daysCompleted + s.actionsTaken;
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (score >= LEVELS[i].min) idx = i;
  const cur = LEVELS[idx];
  const nxt = LEVELS[idx + 1];
  const next = nxt ? nxt.min : cur.min;
  const pct = nxt ? Math.min(100, Math.round(((score - cur.min) / (next - cur.min)) * 100)) : 100;
  return { idx, name: cur.name, min: cur.min, next, pctToNext: pct };
}

export function levelNames() { return LEVELS.map(l => l.name); }

// Categories favored for the user
export function userCategories(s: UserState): Category[] {
  const fromGoal = ({ paz: ["paz","ansiedade","raiva"], clareza: ["direcao","decisoes","paz"], ansiedade: ["ansiedade","paz","confianca"], fe: ["confianca","gratidao","medo"] } as const)[s.goal ?? "paz"];
  return [...fromGoal] as Category[];
}
