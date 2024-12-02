"use client";

import { createContext } from "react";
import { Theme } from "../utils/constants/theme";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
