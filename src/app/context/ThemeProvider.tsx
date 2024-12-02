"use client";

import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme, THEMES } from "../utils/constants/theme";
import LocalStorageService from "../utils/localStorageService";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = LocalStorageService.getItem("THEME") as Theme;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? THEMES.DARK
      : THEMES.LIGHT;

    setTheme(savedTheme || systemTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
    LocalStorageService.setItem("THEME", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
