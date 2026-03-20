import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";
import StatusBadge from "./StatusBadge";

export default function ClaimItem({ claim }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.flex}>
          <Text style={styles.title}>{claim.title}</Text>
          <Text style={styles.meta}>{claim.id} • {claim.date}</Text>
        </View>
        <StatusBadge status={claim.status} />
      </View>
      <Text style={styles.amount}>
        {claim.amount > 0 ? `₹${claim.amount.toLocaleString("en-IN")}` : "No payout"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  flex: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  meta: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  amount: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: "800",
  },
});
