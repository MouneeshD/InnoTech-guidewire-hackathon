import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import MetricCard from "../components/MetricCard";
import InfoCard from "../components/InfoCard";
import StatusBadge from "../components/StatusBadge";
import { policyData } from "../data/mockData";
import { colors } from "../theme/colors";

export default function PolicyScreen() {
  return (
    <ScreenContainer>
      <SectionTitle
        title="Policy Overview"
        subtitle="Transparent weekly protection built for gig workers."
      />

      <MetricCard
        label="Weekly Premium"
        value={`₹${policyData.weeklyPremium}`}
        caption="Auto-renews every Monday for uninterrupted coverage."
        valueColor={colors.primary}
      />

      <InfoCard title="Coverage Details">
        {policyData.coverageDetails.map((detail) => (
          <View key={detail} style={styles.coverageRow}>
            <View style={styles.bullet} />
            <Text style={styles.coverageText}>{detail}</Text>
          </View>
        ))}
      </InfoCard>

      <InfoCard title="Policy Status">
        <StatusBadge status={policyData.activeStatus} />
        <Text style={styles.statusText}>
          Your protection is live and will trigger when verified conditions match your insured zone.
        </Text>
      </InfoCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  coverageRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  bullet: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginTop: 6,
    marginRight: 12,
    backgroundColor: colors.accent,
  },
  coverageText: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
  statusText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 16,
  },
});
