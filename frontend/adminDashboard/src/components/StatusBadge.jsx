const statusStyles = {
  Approved: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Rejected: "bg-rose-100 text-rose-700",
  Active: "bg-emerald-100 text-emerald-700",
  Inactive: "bg-slate-200 text-slate-700",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status] || "bg-brand-100 text-brand-700"}`}>
      {status}
    </span>
  );
}
