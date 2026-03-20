import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

export default function SplashScreen() {
  return (
    <LinearGradient colors={["#F4F7FB", "#E4F0FB", "#D8EEF0"]} style={styles.container}>
      <View style={styles.logoWrap}>
        <MaterialCommunityIcons name="shield-sun-outline" size={52} color={colors.primary} />
      </View>
      <Text style={styles.title}>GigShield AI</Text>
      <Text style={styles.subtitle}>Smart income protection for delivery partners</Text>
      <ActivityIndicator size="large" color={colors.primary} style={styles.loader} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logoWrap: {
    width: 110,
    height: 110,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.8)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 23,
    maxWidth: 280,
  },
  loader: {
    marginTop: 32,
  },
});
