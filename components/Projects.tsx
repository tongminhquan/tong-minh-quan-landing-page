"use client";

import {
  Megaphone,
  Package,
  ShoppingBagOpen,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type ProjectsProps = {
  locale: Locale;
  copy: TranslationSet["projects"];
  profile: typeof profileData;
};

const projectIcons = [ShoppingBagOpen, Megaphone, Package, VideoCamera];

export function Projects({ copy, profile }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[28px] border border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-panel),rgba(255,255,255,0.55))] p-6 shadow-[0_16px_40px_var(--color-shadow)] dark:bg-[linear-gradient(180deg,var(--color-panel),rgba(10,20,40,0.8))]">
          <SectionHeading title={copy.title} description={copy.description} />
          <div className="mt-8 space-y-5">
            <div>
              <p className="text-sm text-[var(--color-muted)]">{copy.projectLabel}</p>
              <h3 className="mt-2 text-3xl font-semibold text-[var(--color-foreground)]">
                {profile.project.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-accent)]">
                {profile.project.period} · {copy.roleLabel}: {copy.roleValue}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.caseStudy.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-panel)] p-4"
                >
                  <div className="text-sm font-semibold text-[var(--color-foreground)]">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {copy.capabilities.map((item, index) => {
            const Icon = projectIcons[index];
            return (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 shadow-[0_16px_40px_var(--color-shadow)]"
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
      </div>
    </section>
  );
}
