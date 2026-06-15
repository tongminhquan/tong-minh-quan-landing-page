"use client";

import { ChatCircleDots, HandHeart, Strategy, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type AboutProps = {
  locale: Locale;
  copy: TranslationSet["about"];
  profile: typeof profileData;
};

const icons = [ChatCircleDots, UsersThree, Strategy, HandHeart];

export function About({ copy }: AboutProps) {
  return (
    <section id="about" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8">
        <SectionHeading title={copy.title} description={copy.description} />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {copy.focuses.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_18px_44px_var(--color-shadow)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Icon size={24} weight="fill" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-foreground)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
