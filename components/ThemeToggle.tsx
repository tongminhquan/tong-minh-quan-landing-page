"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-foreground)] shadow-[0_12px_24px_var(--color-shadow)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:translate-y-px"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? sizeMoon() : sizeSun()}
    </button>
  );
}

function sizeSun() {
  return <Sun size={18} weight="bold" />;
}

function sizeMoon() {
  return <Moon size={18} weight="bold" />;
}
