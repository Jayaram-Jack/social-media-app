"use client";

import { LightMode, DarkMode } from "@mui/icons-material";

import { useTheme } from "@/app/hooks/useTheme";
import { Theme, THEMES } from "@/app/utils/constants/theme";

interface LightOrDarkTheme {
  theme: Theme;
}

const ThemeToggle = ({ theme }: LightOrDarkTheme) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-secondary text-secondary-foreground"
    >
      {theme === THEMES.DARK ? (
        <LightMode className="text-secondary-foreground" />
      ) : (
        <DarkMode />
      )}
    </button>
  );
};

export default ThemeToggle;
