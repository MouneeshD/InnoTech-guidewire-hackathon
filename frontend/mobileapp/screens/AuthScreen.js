import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenContainer from "../components/ScreenContainer";
import AppButton from "../components/AppButton";
import { colors } from "../theme/colors";

export default function AuthScreen({ onLogin }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  const handleSendOtp = () => {
    setIsSendingOtp(true);
    setTimeout(() => {
      setIsSendingOtp(false);
      setIsOtpSent(true);
    }, 900);
  };

  return (
    <ScreenContainer scrollable={false} contentStyle={styles.screen}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.flex}>
        <LinearGradient colors={["#0F6CBD", "#14B8A6"]} style={styles.heroCard}>
          <View style={styles.heroIcon}>
            <MaterialCommunityIcons name="shield-account-outline" size={30} color={colors.surface} />
          </View>
          <Text style={styles.heroTitle}>Protect every working week</Text>
          <Text style={styles.heroSubtitle}>
            Quick OTP access to your AI-powered parametric insurance dashboard.
          </Text>
        </LinearGradient>

        <View style={styles.formCard}>
          <Text style={styles.title}>Login / Signup</Text>
          <Text style={styles.subtitle}>Use your mobile number to continue.</Text>

          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputWrap}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
              placeholder="98765 43210"
              placeholderTextColor={colors.textSecondary}
              style={styles.input}
              maxLength={10}
            />
          </View>

          {!isOtpSent ? (
            <AppButton title="Send OTP" onPress={handleSendOtp} loading={isSendingOtp} />
          ) : (
            <>
              <Text style={[styles.label, styles.otpLabel]}>Enter OTP</Text>
              <TextInput
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
                placeholder="000000"
                placeholderTextColor={colors.textSecondary}
                style={styles.otpInput}
                maxLength={6}
              />
              <AppButton title="Verify & Continue" onPress={onLogin} />
            </>
          )}

          <Text style={styles.helperText}>
            Demo flow only. Any 10-digit number and 6-digit OTP will work.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
  },
  flex: {
    flex: 1,
    justifyContent: "center",
  },
  heroCard: {
    borderRadius: 28,
    padding: 24,
    marginBottom: 20,
  },
  heroIcon: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.surface,
    marginBottom: 12,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.84)",
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 260,
  },
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: 28,
    padding: 24,
    shadowColor: colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  prefix: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginRight: 10,
  },
  input: {
    flex: 1,
    minHeight: 56,
    fontSize: 16,
    color: colors.textPrimary,
  },
  otpLabel: {
    marginTop: 16,
  },
  otpInput: {
    minHeight: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    fontSize: 20,
    letterSpacing: 8,
    color: colors.textPrimary,
    marginBottom: 20,
  },
  helperText: {
    marginTop: 16,
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
  },
});
