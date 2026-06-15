"use client";

import { Medal, Trophy } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type AwardsProps = {
  locale: Locale;
  copy: TranslationSet["awards"];
  profile: typeof profileData;
};

const awardIcons = [Trophy, Medal];

export function Awards({ copy, profile }: AwardsProps) {
  return (
    <section className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8">
      <SectionHeading title={copy.title} description={copy.description} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {profile.awards.map((award, index) => {
          const Icon = awardIcons[index];
          const content = copy.items[award.id];
          return (
            <Reveal
              key={award.id}
              delay={index * 0.06}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_16px_40px_var(--color-shadow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon size={24} weight="fill" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[var(--color-foreground)]">
                {content.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-accent)]">{award.period}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {content.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
