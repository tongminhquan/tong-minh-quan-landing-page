"use client";

import { CalendarDots, MicrophoneStage } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type ActivitiesProps = {
  locale: Locale;
  copy: TranslationSet["activities"];
  profile: typeof profileData;
};

const activityIcons = [CalendarDots, MicrophoneStage];

export function Activities({ copy, profile }: ActivitiesProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Reveal className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8">
        <SectionHeading title={copy.title} description={copy.description} />
      </Reveal>
      <div className="grid gap-4">
        {profile.activities.map((activity, index) => {
          const Icon = activityIcons[index];
          const content = copy.items[activity.id];
          return (
            <Reveal
              key={activity.id}
              delay={index * 0.05}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_16px_40px_var(--color-shadow)]"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <Icon size={24} weight="fill" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                      {content.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                      {content.description}
                    </p>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)]">
                  {activity.period}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
