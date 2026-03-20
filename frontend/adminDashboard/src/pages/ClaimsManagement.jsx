import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import StatusBadge from "../components/StatusBadge";
import TableCard from "../components/TableCard";
import { claims as mockClaims } from "../data/mockData";

export default function ClaimsManagement() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");

  const filteredClaims = useMemo(() => {
    return mockClaims.filter((claim) => {
      const matchesStatus = statusFilter === "All" || claim.status === statusFilter;
      const matchesDate = !dateFilter || claim.date === dateFilter;
      return matchesStatus && matchesDate;
    });
  }, [statusFilter, dateFilter]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Claims Management"
        description="Review triggered claims, filter recent submissions, and take quick approval actions for settlement teams."
      />

      <TableCard
        title="Claims Queue"
        toolbar={
          <>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            >
              <option>All</option>
              <option>Approved</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
            <input
              type="date"
              value={dateFilter}
              onChange={(event) => setDateFilter(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
            />
          </>
        }
      >
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-400">
              <th className="pb-4 font-semibold">User</th>
              <th className="pb-4 font-semibold">Location</th>
              <th className="pb-4 font-semibold">Claim Amount</th>
              <th className="pb-4 font-semibold">Date</th>
              <th className="pb-4 font-semibold">Status</th>
              <th className="pb-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClaims.map((claim) => (
              <tr key={claim.id} className="border-b border-slate-100 last:border-b-0">
                <td className="py-4">
                  <p className="font-semibold text-slate-900">{claim.userName}</p>
                  <p className="text-sm text-slate-500">{claim.id}</p>
                </td>
                <td className="py-4 text-sm text-slate-600">{claim.location}</td>
                <td className="py-4 text-sm font-semibold text-slate-900">₹{claim.amount.toLocaleString("en-IN")}</td>
                <td className="py-4 text-sm text-slate-600">{claim.date}</td>
                <td className="py-4"><StatusBadge status={claim.status} /></td>
                <td className="py-4">
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Approve</button>
                    <button className="rounded-xl bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
