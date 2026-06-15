"use client";

import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { motion } from "motion/react";
import { profile as profileData } from "@/data/profile";
import { Locale } from "@/data/translations";

type FloatingContactCtasProps = {
  locale: Locale;
  profile: typeof profileData;
};

export function FloatingContactCtas({
  locale,
  profile,
}: FloatingContactCtasProps) {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={profile.facebookUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex min-h-12 items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm font-medium text-[var(--color-foreground)] shadow-[0_18px_42px_var(--color-shadow)] backdrop-blur-xl"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white">
          <FacebookLogo size={18} weight="fill" />
        </span>
        <span>{locale === "vi" ? "Facebook" : "Facebook"}</span>
      </motion.a>

      <motion.a
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={profile.zaloUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex min-h-12 items-center gap-3 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm font-medium text-[var(--color-foreground)] shadow-[0_18px_42px_var(--color-shadow)] backdrop-blur-xl"
      >
        <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
          <Image
            src="/zalo-logo.png"
            alt="Zalo logo"
            fill
            sizes="36px"
            className="object-contain"
          />
        </span>
        <span>{locale === "vi" ? "Chat Zalo" : "Chat Zalo"}</span>
      </motion.a>
    </div>
  );
}
