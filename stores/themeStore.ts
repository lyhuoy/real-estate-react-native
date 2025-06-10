import { ThemePreference } from "@/types/theme"; // Import your theme types
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeState {
  themePreference: ThemePreference;
  setThemePreference: (preference: ThemePreference) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      themePreference: "system",
      setThemePreference: (preference) => set({ themePreference: preference }),
    }),
    {
      name: "user-theme-preference",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
