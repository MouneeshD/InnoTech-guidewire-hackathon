import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import MetricCard from "../components/MetricCard";
import ActionCard from "../components/ActionCard";
import InfoCard from "../components/InfoCard";
import StatusBadge from "../components/StatusBadge";
import RiskIndicator from "../components/RiskIndicator";
import { dashboardData, userProfile } from "../data/mockData";
import { colors } from "../theme/colors";

export default function DashboardScreen({ navigation }) {
  return (
    <ScreenContainer>
      <SectionTitle
        title={`Hi ${userProfile.firstName}`}
        subtitle={`${userProfile.partnerType} • ${userProfile.city}`}
      />

      <MetricCard
        label="Weekly earnings protected"
        value={`₹${dashboardData.weeklyProtectedEarnings.toLocaleString("en-IN")}`}
        caption={`${dashboardData.policyName} keeps your income safer during disruption days.`}
        valueColor={colors.primaryDark}
      />

      <View style={styles.statusRow}>
        <View style={styles.statusCard}>
          <Text style={styles.smallLabel}>Insurance Status</Text>
          <StatusBadge status={dashboardData.insuranceStatus} />
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.smallLabel}>Risk Level</Text>
          <RiskIndicator level={dashboardData.riskLevel} />
        </View>
      </View>

      <SectionTitle title="Quick Actions" subtitle="Everything important in one place." />
      <View style={styles.actionsRow}>
        <ActionCard
          icon="shield-search-outline"
          title="View Policy"
          subtitle="Check your premium, coverage, and protection status."
          onPress={() => navigation.navigate("Policy")}
        />
        <View style={styles.actionGap} />
        <ActionCard
          icon="cash-fast"
          title="View Claims"
          subtitle="Track approved, pending, and rejected payouts."
          onPress={() => navigation.navigate("Claims")}
        />
      </View>

      <InfoCard title="Next update">
        <Text style={styles.infoText}>Next premium due: {dashboardData.nextPremiumDate}</Text>
        <Text style={styles.infoText}>AI risk monitor is watching local weather and work disruption alerts.</Text>
      </InfoCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  statusRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  statusCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  smallLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    marginBottom: 12,
  },
  actionsRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  actionGap: {
    width: 16,
  },
  infoText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 8,
  },
});
