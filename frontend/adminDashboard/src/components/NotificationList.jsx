const typeStyles = {
  Fraud: "bg-rose-100 text-rose-700",
  Claim: "bg-brand-100 text-brand-700",
  System: "bg-slate-200 text-slate-700",
};

export default function NotificationList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition hover:-translate-y-0.5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeStyles[item.type]}`}>{item.type}</span>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-400">{item.time}</p>
        </div>
      ))}
    </div>
  );
}
