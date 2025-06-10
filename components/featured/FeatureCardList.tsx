import React from "react";
import { FlatList } from "react-native";
import FeatureCard from "./FeatureCard";

export default function FeatureCardList() {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5]}
      renderItem={({ item }) => <FeatureCard />}
      keyExtractor={(item) => item.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        gap: 16,
      }}
      initialNumToRender={2}
    />
  );
}
