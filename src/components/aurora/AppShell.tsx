import { Outlet } from "react-router-dom";
import { BottomNav } from "./BottomNav";

export const AppShell = () => (
  <div className="min-h-screen bg-background">
    <div className="mx-auto max-w-md pb-24">
      <Outlet />
    </div>
    <BottomNav />
  </div>
);
