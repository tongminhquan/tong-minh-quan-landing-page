"use client";

import { FacebookLogo, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type ContactProps = {
  locale: Locale;
  copy: TranslationSet["contact"];
  profile: typeof profileData;
};

export function Contact({ copy, profile }: ContactProps) {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("Contact placeholder submission", Object.fromEntries(formData.entries()));
    setStatus(copy.success);
    event.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="grid gap-6 rounded-[32px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[0_20px_60px_var(--color-shadow)] backdrop-blur-xl sm:p-8 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <Reveal className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_16px_40px_var(--color-shadow)]">
        <SectionHeading title={copy.title} description={copy.description} />
        <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
          <p>{copy.note}</p>
          <a
            href={profile.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 font-medium text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <FacebookLogo size={18} weight="fill" />
            {copy.facebook}
          </a>
        </div>
      </Reveal>

      <Reveal className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 shadow-[0_16px_40px_var(--color-shadow)]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[var(--color-foreground)]">
              {copy.form.name}
              <input
                required
                name="name"
                placeholder={copy.form.namePlaceholder}
                className="min-h-12 rounded-[18px] border border-[var(--color-line)] bg-transparent px-4 text-base text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-soft)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--color-foreground)]">
              {copy.form.email}
              <input
                required
                type="email"
                name="email"
                placeholder={copy.form.emailPlaceholder}
                className="min-h-12 rounded-[18px] border border-[var(--color-line)] bg-transparent px-4 text-base text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-soft)]"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-[var(--color-foreground)]">
            {copy.form.message}
            <textarea
              required
              name="message"
              rows={5}
              placeholder={copy.form.messagePlaceholder}
              className="rounded-[18px] border border-[var(--color-line)] bg-transparent px-4 py-3 text-base text-[var(--color-foreground)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-soft)]"
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(79,107,255,0.3)]"
            >
              <PaperPlaneTilt size={18} weight="fill" />
              {copy.form.submit}
            </motion.button>
            {status ? <p className="text-sm text-[var(--color-muted)]">{status}</p> : null}
          </div>
        </form>
      </Reveal>
    </section>
  );
}
