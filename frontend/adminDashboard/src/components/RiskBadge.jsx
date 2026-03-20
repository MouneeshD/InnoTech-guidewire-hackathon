export default function RiskBadge({ score }) {
  const variant =
    score >= 70
      ? "bg-rose-100 text-rose-700"
      : score >= 45
        ? "bg-amber-100 text-amber-700"
        : "bg-emerald-100 text-emerald-700";

  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${variant}`}>{score}/100</span>;
}
