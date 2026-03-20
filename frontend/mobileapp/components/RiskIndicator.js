import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, riskColors } from "../theme/colors";

export default function RiskIndicator({ level }) {
  const tone = riskColors[level] || colors.warning;

  return (
    <View style={[styles.badge, { backgroundColor: `${tone}18` }]}>
      <View style={[styles.dot, { backgroundColor: tone }]} />
      <Text style={[styles.label, { color: tone }]}>{level} Risk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
  },
});
