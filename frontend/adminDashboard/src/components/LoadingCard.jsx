export default function LoadingCard() {
  return (
    <div className="glass-panel rounded-3xl border border-white/70 p-5 shadow-panel">
      <div className="h-3 w-24 animate-pulse rounded-full bg-slate-200" />
      <div className="mt-5 h-8 w-28 animate-pulse rounded-xl bg-slate-200" />
      <div className="mt-4 h-3 w-36 animate-pulse rounded-full bg-slate-200" />
    </div>
  );
}
