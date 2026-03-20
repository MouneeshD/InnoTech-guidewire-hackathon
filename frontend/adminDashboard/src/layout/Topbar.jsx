import { Search, ShieldCheck, UserCircle2, X } from "lucide-react";

export default function Topbar({ mobileMenuOpen, onToggleMobileMenu }) {
  return (
    <header className="glass-panel sticky top-0 z-20 flex items-center justify-between gap-4 rounded-b-3xl border-b border-white/70 px-4 py-4 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 lg:hidden"
        >
          {mobileMenuOpen ? <X size={18} /> : null}
          {!mobileMenuOpen ? <span className="block h-[18px] w-[18px] text-center text-sm font-bold leading-[18px]">≡</span> : null}
        </button>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Insurance Ops</p>
          <h2 className="text-xl font-bold text-slate-900">GigShield AI Dashboard</h2>
        </div>
      </div>

      <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 md:flex">
        <Search size={16} className="text-slate-400" />
        <span className="text-sm text-slate-400">Search claims, users, alerts...</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 md:flex md:items-center md:gap-2">
          <ShieldCheck size={16} />
          System Healthy
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
          <UserCircle2 size={30} className="text-brand-600" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-900">Riya Menon</p>
            <p className="text-xs text-slate-500">Lead Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
