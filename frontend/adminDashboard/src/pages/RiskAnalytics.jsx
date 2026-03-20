import ClaimsChart from "../components/ClaimsChart";
import PageHeader from "../components/PageHeader";
import PanelCard from "../components/PanelCard";
import RiskPieChart from "../components/RiskPieChart";
import { claimsByRegion, riskDistribution } from "../data/mockData";

export default function RiskAnalytics() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Risk Analytics"
        description="Visualize portfolio risk concentration and the regional intensity of claims to guide underwriting decisions."
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <PanelCard title="Risk Levels">
          <RiskPieChart data={riskDistribution} />
        </PanelCard>
        <PanelCard title="Claims Per Region">
          <ClaimsChart data={claimsByRegion} />
        </PanelCard>
      </div>
    </div>
  );
}
