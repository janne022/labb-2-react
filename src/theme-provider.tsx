import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Get theme in local storage
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("app-theme") as Theme) || "system",
  );

  // Listen for theme changes
  useEffect(() => {
    const root = window.document.documentElement;

    // Clear existing theme classes
    root.classList.remove("light", "dark");

    // Check system theme first
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem("app-theme", newTheme);
      setTheme(newTheme);
    },
  };

  return <ThemeProviderContext value={value}>{children}</ThemeProviderContext>;
}

// Get theme
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
