"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "theme-preference";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function resolveStoredTheme(value: string | null): Theme | null {
  if (value === "light" || value === "dark") {
    return value;
  }
  return null;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = resolveStoredTheme(localStorage.getItem(storageKey));
    const initialTheme = storedTheme ?? (media.matches ? "dark" : "light");

    setTheme(initialTheme);
    applyTheme(initialTheme);

    const handleChange = (event: MediaQueryListEvent) => {
      if (resolveStoredTheme(localStorage.getItem(storageKey))) {
        return;
      }
      const nextTheme = event.matches ? "dark" : "light";
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  };

  const buttonLabel = theme === "dark" ? "ライトモード" : "ダークモード";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={theme === "dark"}
      aria-label={buttonLabel}
    >
      {buttonLabel}
    </button>
  );
}
