import { AlertTriangle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PanelCard from "../components/PanelCard";
import RiskBadge from "../components/RiskBadge";
import { flaggedClaims } from "../data/mockData";

export default function FraudDetection() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fraud Detection"
        description="Investigate suspicious claim patterns, rising risk scores, and behavior anomalies flagged by the fraud engine."
      />

      <div className="grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
        <PanelCard title="Flagged Claims Summary">
          <div className="space-y-4">
            {flaggedClaims.map((item) => (
              <div key={item.id} className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-white p-3 text-rose-600">
                      <AlertTriangle size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.userName}</p>
                      <p className="text-sm text-slate-500">{item.location} • {item.id}</p>
                    </div>
                  </div>
                  <RiskBadge score={item.riskScore} />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.activity}</p>
              </div>
            ))}
          </div>
        </PanelCard>

        <PanelCard title="Suspicious Activities">
          <div className="overflow-hidden rounded-3xl border border-slate-200">
            <table className="min-w-full text-left">
              <thead className="bg-slate-50">
                <tr className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  <th className="px-4 py-4 font-semibold">Claim</th>
                  <th className="px-4 py-4 font-semibold">Location</th>
                  <th className="px-4 py-4 font-semibold">Risk Score</th>
                  <th className="px-4 py-4 font-semibold">Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {flaggedClaims.map((item) => (
                  <tr key={item.id} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-slate-900">{item.id}</td>
                    <td className="px-4 py-4 text-sm text-slate-600">{item.location}</td>
                    <td className="px-4 py-4"><RiskBadge score={item.riskScore} /></td>
                    <td className="px-4 py-4 text-sm leading-6 text-slate-600">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PanelCard>
      </div>
    </div>
  );
}
