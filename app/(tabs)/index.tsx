import { Image } from "expo-image";
import { ScrollView, TouchableOpacity, View } from "react-native";

import FeatureCardList from "@/components/featured/FeatureCardList";
import FilterMenu from "@/components/filter-menu/FilterMenu";
import RecommandationCardList from "@/components/recommendation/RecommandationCardList";
import { SafeAreaContainer } from "@/components/SafeAreaContainer";
import { SearchBar } from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import { ThemedText } from "@/components/ThemedText";
import { BORDER_RADIUS, SPACING } from "@/constants/Theme";
import { useAppThemeColor } from "@/hooks/useAppThemeColor";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
  const { t } = useTranslation();
  const { themeColors } = useAppThemeColor();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaContainer>
        <View
          style={{
            gap: SPACING.md,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: SPACING.md,
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Image
                source={require("@/assets/images/profile.jpg")}
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: BORDER_RADIUS.round,
                }}
                transition={500}
              />
              <View>
                <ThemedText>{t("welcome")}</ThemedText>
                <ThemedText>Tinfy Lu</ThemedText>
              </View>
            </TouchableOpacity>
            <Fontisto name="bell" size={24} color={themeColors.text} />
          </View>

          <SearchBar
            containerStyle={{
              marginTop: SPACING.sm,
              marginHorizontal: SPACING.md,
            }}
            placeholder={t("app.placeholder")}
            suffixIcon={
              <AntDesign
                name="search1"
                size={22}
                color={themeColors.text}
                style={{
                  opacity: 0.5,
                }}
              />
            }
            prefixIcon={
              <Ionicons
                name="menu-outline"
                size={24}
                color={themeColors.text}
                style={{
                  opacity: 0.5,
                }}
              />
            }
          />
          <View style={{ gap: SPACING.lg }}>
            <SectionHeader title="Featured" onPress={() => {}} />
            <FeatureCardList />
            <SectionHeader title="Our Recommendations" onPress={() => {}} />
            <FilterMenu />
            <RecommandationCardList />
          </View>
        </View>
      </SafeAreaContainer>
    </ScrollView>
  );
}
