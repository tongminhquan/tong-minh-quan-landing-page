"use client";

import clsx from "clsx";
import { Locale } from "@/data/translations";

type LanguageToggleProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export function LanguageToggle({
  locale,
  setLocale,
}: LanguageToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] p-1 shadow-[0_12px_24px_var(--color-shadow)]">
      {(["vi", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={clsx(
            "rounded-full px-4 py-2 text-sm font-medium",
            item === locale
              ? "bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-white shadow-[0_16px_32px_rgba(79,107,255,0.24)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
          )}
          aria-pressed={item === locale}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
