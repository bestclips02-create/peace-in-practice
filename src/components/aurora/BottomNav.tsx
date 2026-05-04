import { NavLink } from "react-router-dom";
import { Home, HeartPulse, TrendingUp, Map, Headphones, User } from "lucide-react";

const items = [
  { to: "/", label: "Hoje", icon: Home },
  { to: "/situacoes", label: "Ajuda", icon: HeartPulse },
  { to: "/evolucao", label: "Evolução", icon: TrendingUp },
  { to: "/planos", label: "Planos", icon: Map },
  { to: "/audios", label: "Áudios", icon: Headphones },
  { to: "/perfil", label: "Perfil", icon: User },
];

export const BottomNav = () => (
  <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur-xl">
    <ul className="mx-auto flex max-w-md items-center justify-between px-2 py-2 safe-area-pb">
      {items.map(({ to, label, icon: Icon }) => (
        <li key={to} className="flex-1">
          <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-[10px] font-medium transition-soft ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`h-5 w-5 ${isActive ? "scale-110" : ""} transition-soft`} strokeWidth={isActive ? 2.4 : 1.8} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
