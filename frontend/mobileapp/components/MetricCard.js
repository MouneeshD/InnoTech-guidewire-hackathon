import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme/colors";

export default function MetricCard({ label, value, caption, valueColor = colors.textPrimary }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
  value: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
  },
  caption: {
    color: colors.textSecondary,
    fontSize: 13,
  },
});
