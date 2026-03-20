import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import SplashScreen from "../screens/SplashScreen";
import AuthScreen from "../screens/AuthScreen";
import DashboardScreen from "../screens/DashboardScreen";
import PolicyScreen from "../screens/PolicyScreen";
import ClaimsScreen from "../screens/ClaimsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Dashboard: "view-dashboard-outline",
            Policy: "shield-check-outline",
            Claims: "file-document-outline",
            Notifications: "bell-outline",
          };

          return <MaterialCommunityIcons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Policy" component={PolicyScreen} />
      <Tab.Screen name="Claims" component={ClaimsScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsLoggedIn(true);
    }, 1400);
  };

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  if (isAuthenticating) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="Auth">
          {(props) => <AuthScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="MainTabs" component={DashboardTabs} />
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  tabBar: {
    height: 74,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    elevation: 8,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: "700",
  },
});
