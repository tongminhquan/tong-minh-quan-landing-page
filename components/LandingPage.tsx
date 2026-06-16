"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Awards } from "@/components/Awards";
import { Education } from "@/components/Education";
import { FloatingContactCtas } from "@/components/FloatingContactCtas";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/profile";
import { Locale, translations } from "@/data/translations";

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "vi";
    }

    const storedLocale = window.localStorage.getItem("tmq-locale");
    return storedLocale === "vi" || storedLocale === "en" ? storedLocale : "vi";
  });

  useEffect(() => {
    window.localStorage.setItem("tmq-locale", locale);
    document.documentElement.lang = locale === "vi" ? "vi" : "en";
  }, [locale]);

  const copy = translations[locale];

  return (
    <div className="relative overflow-x-clip">
      <Navbar
        locale={locale}
        setLocale={setLocale}
        nav={copy.nav}
        name={profile.name}
      />
      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <Hero locale={locale} copy={copy.hero} profile={profile} />
        <About locale={locale} copy={copy.about} profile={profile} />
        <Skills locale={locale} copy={copy.skills} profile={profile} />
        <Education locale={locale} copy={copy.education} profile={profile} />
        <Projects locale={locale} copy={copy.projects} profile={profile} />
        <Activities locale={locale} copy={copy.activities} profile={profile} />
        <Awards locale={locale} copy={copy.awards} profile={profile} />
      </main>
      <FloatingContactCtas locale={locale} profile={profile} />
      <Footer locale={locale} copy={copy.footer} profile={profile} />
    </div>
  );
}
