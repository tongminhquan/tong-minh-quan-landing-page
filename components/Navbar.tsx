"use client";

import clsx from "clsx";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Locale } from "@/data/translations";

type NavbarProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  name: string;
  nav: {
    about: string;
    skills: string;
    education: string;
    projects: string;
    contact: string;
  };
};

const sectionLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "education", href: "#education" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Navbar({ locale, setLocale, name, nav }: NavbarProps) {
  const labels = {
    about: nav.about,
    skills: nav.skills,
    education: nav.education,
    projects: nav.projects,
    contact: nav.contact,
  };

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-surface)]/95 px-4 py-3 shadow-[0_18px_60px_var(--color-shadow)] backdrop-blur-xl sm:px-5 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-sm font-medium text-[var(--color-foreground)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-base font-semibold text-white shadow-[0_16px_40px_rgba(79,107,255,0.28)]">
            TMQ
          </span>
          <span className="flex flex-col">
            <span className="text-base font-semibold">{name}</span>
            <span className="text-xs text-[var(--color-muted)]">
              Marketing intern portfolio
            </span>
          </span>
        </a>

        <nav className="flex items-center gap-2 overflow-x-auto pb-1 lg:justify-center lg:pb-0">
          {sectionLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className={clsx(
                "rounded-full border border-transparent px-4 py-2 text-sm text-[var(--color-muted)] hover:border-[var(--color-line)] hover:bg-[var(--color-panel)] hover:text-[var(--color-foreground)]",
              )}
            >
              {labels[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <LanguageToggle locale={locale} setLocale={setLocale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
