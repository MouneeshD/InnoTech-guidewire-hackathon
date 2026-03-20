const toneMap = {
  primary: "from-brand-500 to-cyan-500",
  success: "from-emerald-500 to-teal-500",
  warning: "from-amber-500 to-orange-500",
  danger: "from-rose-500 to-red-500",
};

export default function StatCard({ title, value, change, tone = "primary" }) {
  return (
    <div className="glass-panel animate-float-in rounded-3xl border border-white/70 p-5 shadow-panel">
      <div className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r ${toneMap[tone]}`} />
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{change} vs last week</p>
    </div>
  );
}
