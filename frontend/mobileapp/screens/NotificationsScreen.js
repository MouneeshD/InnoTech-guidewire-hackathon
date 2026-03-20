import React from "react";
import { Text, StyleSheet } from "react-native";
import ScreenContainer from "../components/ScreenContainer";
import SectionTitle from "../components/SectionTitle";
import NotificationItem from "../components/NotificationItem";
import InfoCard from "../components/InfoCard";
import { notificationsData } from "../data/mockData";
import { colors } from "../theme/colors";

export default function NotificationsScreen() {
  return (
    <ScreenContainer>
      <SectionTitle
        title="Notifications"
        subtitle="Stay updated on claim triggers, payouts, and premium activity."
      />

      {notificationsData.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}

      <InfoCard title="Alert Preferences">
        <Text style={styles.text}>
          Push alerts are mocked for the demo and designed to highlight the hackathon insurance journey.
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
