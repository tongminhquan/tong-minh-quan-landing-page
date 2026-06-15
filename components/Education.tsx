"use client";

import { GraduationCap, Medal } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type EducationProps = {
  locale: Locale;
  copy: TranslationSet["education"];
  profile: typeof profileData;
};

export function Education({ copy, profile }: EducationProps) {
  return (
    <section
      id="education"
      className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8"
    >
      <SectionHeading title={copy.title} description={copy.description} />
      <div className="mt-8 grid gap-4">
        {profile.education.map((entry, index) => (
          <Reveal
            key={entry.school}
            delay={index * 0.06}
            className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_16px_40px_var(--color-shadow)]"
          >
            <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                  <GraduationCap size={18} weight="fill" />
                  {entry.period}
                </span>
                <span className="text-sm text-[var(--color-muted)]">
                  {copy.levels[entry.level]}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[var(--color-foreground)]">
                  {entry.school}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {copy.summaries[entry.summary]}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {entry.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-line)] bg-transparent px-4 py-2 text-sm text-[var(--color-foreground)]"
                    >
                      <Medal size={18} weight="fill" className="text-[var(--color-accent)]" />
                      {copy.highlights[highlight]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
