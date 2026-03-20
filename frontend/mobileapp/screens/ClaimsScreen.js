import React from "react";
import { Text, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import ClaimItem from "../components/ClaimItem";
import InfoCard from "../components/InfoCard";
import { claimsData } from "../data/mockData";
import { colors } from "../theme/colors";

export default function ClaimsScreen() {
  return (
    <ScreenContainer>
      <SectionTitle title="Claims" subtitle="Track each payout raised by the platform." />

      {claimsData.map((claim) => (
        <ClaimItem key={claim.id} claim={claim} />
      ))}

      <InfoCard title="How claims work">
        <Text style={styles.text}>
          GigShield AI uses trigger signals like weather and disruption events to raise claims faster for eligible partners.
        </Text>
      </InfoCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
});
