import PageHeader from "../components/PageHeader";
import RiskBadge from "../components/RiskBadge";
import StatusBadge from "../components/StatusBadge";
import TableCard from "../components/TableCard";
import { users } from "../data/mockData";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Users"
        description="View the insured delivery partner base, current policy coverage, and account-level risk posture."
      />

      <TableCard title="Partner Directory">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.2em] text-slate-400">
              <th className="pb-4 font-semibold">Name</th>
              <th className="pb-4 font-semibold">Location</th>
              <th className="pb-4 font-semibold">Risk Score</th>
              <th className="pb-4 font-semibold">Policy Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-slate-100 last:border-b-0">
                <td className="py-4">
                  <p className="font-semibold text-slate-900">{user.name}</p>
                  <p className="text-sm text-slate-500">{user.id}</p>
                </td>
                <td className="py-4 text-sm text-slate-600">{user.location}</td>
                <td className="py-4"><RiskBadge score={user.riskScore} /></td>
                <td className="py-4"><StatusBadge status={user.policyStatus} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
