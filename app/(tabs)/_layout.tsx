import { FONT_KANTUMRUY_PRO_MEDIUM } from "@/constants/Fonts";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

export default function TabLayout() {
  const { t } = useTranslation();
  const { themeColors } = useAppThemeColor();

  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        tabBarActiveTintColor: themeColors.text,
        headerShown: false,
        // tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarLabelStyle: {
          fontFamily: FONT_KANTUMRUY_PRO_MEDIUM,
          fontSize: 12,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            // position: "absolute",
            backgroundColor: themeColors.tabBg,
            borderTopWidth: 0,
            borderTopColor: "transparent",
          },
          default: {
            backgroundColor: themeColors.tabBg,
            borderTopWidth: 0,
            borderTopColor: "transparent",
            elevation: 0,
            shadowColor: "transparent",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("tabBar.home"),

          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: t("tabBar.explore"),
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t("tabBar.profile"),
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
