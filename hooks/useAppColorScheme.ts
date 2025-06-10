import { useEffect, useState } from "react";
import { Appearance, ColorSchemeName } from "react-native";

export function useAppColorScheme(): ColorSchemeName {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme()
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: newColorScheme }) => {
        setColorScheme(newColorScheme);
      }
    );

    return () => subscription.remove();
  }, []);

  return colorScheme;
}
