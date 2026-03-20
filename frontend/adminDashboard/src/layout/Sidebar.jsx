import { NavLink } from "react-router-dom";
import { BellRing, ChartColumnBig, FileWarning, LayoutDashboard, ShieldAlert, Users } from "lucide-react";

const items = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/claims", label: "Claims", icon: FileWarning },
  { to: "/risk-analytics", label: "Risk Analytics", icon: ChartColumnBig },
  { to: "/fraud-detection", label: "Fraud Detection", icon: ShieldAlert },
  { to: "/users", label: "Users", icon: Users },
  { to: "/notifications", label: "Notifications", icon: BellRing },
];

export default function Sidebar({ mobile = false, onNavigate }) {
  return (
    <aside className={`glass-panel grid-pattern ${mobile ? "flex w-full flex-col rounded-3xl border border-white/60 p-5" : "hidden min-h-screen w-72 flex-col border-r border-white/60 px-5 py-6 lg:flex"}`}>
      <div className="rounded-3xl bg-slate-950 px-5 py-6 text-white shadow-panel">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">GigShield AI</p>
        <h1 className="mt-3 text-2xl font-bold">Admin Control Hub</h1>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Monitor claims, payouts, fraud, and risk patterns across partner regions.
        </p>
      </div>

      <nav className="mt-6 space-y-2">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
