export default function TableCard({ title, toolbar, children }) {
  return (
    <section className="glass-panel rounded-3xl border border-white/70 p-5 shadow-panel">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {toolbar ? <div className="flex flex-wrap gap-3">{toolbar}</div> : null}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}
