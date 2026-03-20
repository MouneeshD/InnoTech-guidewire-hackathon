import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

const statusMap = {
  Active: colors.success,
  Approved: colors.success,
  Pending: colors.warning,
  Rejected: colors.danger,
};

export default function StatusBadge({ status }) {
  const tone = statusMap[status] || colors.primary;

  return (
    <View style={[styles.badge, { backgroundColor: `${tone}18` }]}>
      <Text style={[styles.label, { color: tone }]}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    alignSelf: "flex-start",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
  },
});
