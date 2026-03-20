export default function PanelCard({ title, children, className = "" }) {
  return (
    <section className={`glass-panel rounded-3xl border border-white/70 p-5 shadow-panel ${className}`}>
      <h2 className="mb-4 text-lg font-semibold text-slate-900">{title}</h2>
      {children}
    </section>
  );
}
