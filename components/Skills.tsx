"use client";

import {
  ChatCenteredText,
  InstagramLogo,
  Palette,
  Strategy,
  TiktokLogo,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type SkillsProps = {
  locale: Locale;
  copy: TranslationSet["skills"];
  profile: typeof profileData;
};

const iconMap = {
  communication: ChatCenteredText,
  socialMedia: InstagramLogo,
  canva: Palette,
  teamwork: UsersThree,
  planning: Strategy,
  support: TiktokLogo,
} as const;

export function Skills({ copy, profile }: SkillsProps) {
  return (
    <section
      id="skills"
      className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8"
    >
      <SectionHeading title={copy.title} description={copy.description} />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {profile.skills.map((skill, index) => {
          const Icon = iconMap[skill.id];
          const content = copy.items[skill.id];
          return (
            <Reveal
              key={skill.id}
              delay={index * 0.04}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 shadow-[0_16px_40px_var(--color-shadow)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon size={24} weight="fill" />
                </div>
                <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs text-[var(--color-muted)]">
                  {content.badge}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-foreground)]">
                {content.title}
              </h3>
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
