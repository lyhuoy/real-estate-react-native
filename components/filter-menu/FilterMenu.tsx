import { SPACING } from "@/constants/Theme";
import React from "react";
import { ScrollView } from "react-native";
import { Checkbox } from "../ui/Checkbox";

const filterList = [
  {
    id: 1,
    title: "All",
    value: "all",
  },
  {
    id: 2,
    title: "House",
    value: "house",
  },
  {
    id: 3,
    title: "Appartment",
    value: "appartment",
  },
  {
    id: 4,
    title: "Villa",
    value: "villa",
  },
  {
    id: 5,
    title: "Cottage",
    value: "cottage",
  },
  {
    id: 6,
    title: "Farm",
    value: "farm",
  },
  {
    id: 7,
    title: "Mansion",
    value: "mansion",
  },
  {
    id: 8,
    title: "Castle",
    value: "castle",
  },
  {
    id: 9,
    title: "Others",
    value: "others",
  },
];

export default function FilterMenu() {
  const [active, setActive] = React.useState<string>("all");
  const handleFilterPress = (value: string) => {
    setActive(value);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: SPACING.md,
        gap: SPACING.sm,
      }}
    >
      {filterList.map((filter, index) => {
        return (
          //   <TouchableOpacity
          //     onPress={() => handleFilterPress(filter.value)}
          //     key={filter.id}
          //     style={{
          //       borderWidth: active === filter.value ? 0 : 1,
          //       borderColor: bluePrimaryLight,
          //       borderRadius: BORDER_RADIUS.round,
          //       paddingVertical: SPACING.sm,
          //       paddingHorizontal: SPACING.md,
          //       backgroundColor:
          //         active === filter.value ? bluePrimary : "#0061FF1A",
          //     }}
          //   >
          //     <ThemedText
          //       style={{
          //         fontSize: 16,
          //         color: active === filter.value ? "white" : "black",
          //         fontWeight: "500",
          //       }}
          //     >
          //       {filter.title}
          //     </ThemedText>
          //   </TouchableOpacity>
          <Checkbox
            key={filter.id}
            label={filter.title}
            checked={active === filter.value}
            onPress={() => handleFilterPress(filter.value)}
          />
        );
      })}
    </ScrollView>
  );
}
