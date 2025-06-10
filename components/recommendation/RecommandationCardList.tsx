import { SPACING } from "@/constants/Theme";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import RecommandationCard from "./RecommandationCard";

export default function RecommandationCardList() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.columnWrapper}
      scrollEnabled={false}
      data={[1, 2, 3, 4]}
      renderItem={({ item }) => <RecommandationCard />}
      keyExtractor={(item) => item.toString()}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
  },
  columnWrapper: {
    gap: SPACING.md,
    justifyContent: "space-between",
    marginBottom: SPACING.md,
  },
});
