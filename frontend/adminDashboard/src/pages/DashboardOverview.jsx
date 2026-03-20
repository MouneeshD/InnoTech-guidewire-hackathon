import { ArrowRight, TrendingUp } from "lucide-react";
import ClaimsChart from "../components/ClaimsChart";
import LoadingCard from "../components/LoadingCard";
import NotificationList from "../components/NotificationList";
import PageHeader from "../components/PageHeader";
import PanelCard from "../components/PanelCard";
import RiskPieChart from "../components/RiskPieChart";
import StatCard from "../components/StatCard";
import { claimsByRegion, notifications, overviewStats, riskDistribution } from "../data/mockData";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard Overview"
        description="A live executive snapshot of platform growth, payouts, risk distribution, and potential fraud pressure across cities."
        action={
          <button className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Export Snapshot
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {overviewStats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <LoadingCard />
        <LoadingCard />
        <div className="glass-panel rounded-3xl border border-white/70 p-5 shadow-panel xl:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Claims Velocity</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">+18.7%</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
              <TrendingUp size={24} />
            </div>
          </div>
          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Auto-triggered claim volume is rising in rain-exposed urban zones, especially during evening shift windows.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <PanelCard title="Claims Per Region">
          <ClaimsChart data={claimsByRegion} />
        </PanelCard>
        <PanelCard title="Risk Level Split">
          <RiskPieChart data={riskDistribution} />
          <div className="mt-2 flex flex-wrap gap-3">
            {riskDistribution.map((item) => (
              <div key={item.name} className="rounded-2xl bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.value}% of portfolio</p>
              </div>
            ))}
          </div>
        </PanelCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <PanelCard title="Notifications Panel">
          <NotificationList items={notifications} />
        </PanelCard>
        <PanelCard title="Ops Insight">
          <div className="rounded-3xl bg-slate-950 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Today&apos;s Focus</p>
            <h3 className="mt-3 text-2xl font-bold">Investigate Delhi fraud cluster</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Multiple high-risk claims are sharing similar route histories and payout destinations. Manual review is recommended before settlement.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900">
              Open Fraud Queue
              <ArrowRight size={16} />
            </button>
          </div>
        </PanelCard>
      </section>
    </div>
  );
}
