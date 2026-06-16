"use client";

import dynamic from "next/dynamic";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { profile as profileData } from "@/data/profile";
import { Locale, TranslationSet } from "@/data/translations";

const ThreeHero = dynamic(
  () => import("@/components/ThreeHero").then((mod) => mod.ThreeHero),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] rounded-[32px] border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_60px_var(--color-shadow)] backdrop-blur-xl lg:h-[520px]" />
    ),
  },
);

type HeroProps = {
  locale: Locale;
  copy: TranslationSet["hero"];
  profile: typeof profileData;
};

export function Hero({ locale, copy, profile }: HeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="grid min-h-[100dvh] items-center gap-8 rounded-[36px] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-8 shadow-[0_28px_80px_var(--color-shadow)] backdrop-blur-xl sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12"
    >
      <div className="flex max-w-2xl flex-col gap-6">
        <Reveal>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-2 text-sm text-[var(--color-muted)]">
            <Sparkle size={16} weight="fill" className="text-[var(--color-accent)]" />
            {copy.eyebrow}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-[var(--color-foreground)] sm:text-6xl xl:text-7xl">
              {profile.name}
            </h1>
            <p className="max-w-xl text-xl font-medium text-[var(--color-accent)] sm:text-2xl">
              {copy.role}
            </p>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              {copy.tagline}
            </p>
            <p className="max-w-[58ch] text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {copy.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#education"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(79,107,255,0.3)] hover:-translate-y-0.5 active:translate-y-px"
            >
              {copy.ctaResume}
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] active:translate-y-px"
            >
              {copy.ctaProject}
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] active:translate-y-px"
            >
              {copy.ctaContact}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid gap-3 sm:grid-cols-3">
            {copy.highlights.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-[24px] border border-[var(--color-line)] bg-[var(--color-panel)]/92 p-4 shadow-[0_14px_34px_var(--color-shadow)]"
              >
                <div className="text-sm font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={reducedMotion ? 0 : 0.12} className="h-full">
        <ThreeHero locale={locale} />
      </Reveal>
    </section>
  );
}
