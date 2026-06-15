import { FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { Locale, TranslationSet } from "@/data/translations";
import { profile as profileData } from "@/data/profile";

type FooterProps = {
  locale: Locale;
  copy: TranslationSet["footer"];
  profile: typeof profileData;
};

export function Footer({ copy, profile }: FooterProps) {
  return (
    <footer className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-5 text-sm text-[var(--color-muted)] shadow-[0_18px_54px_var(--color-shadow)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p>{copy.copyright}</p>
        <a
          href={profile.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
        >
          <FacebookLogo size={18} weight="fill" />
          {copy.facebook}
        </a>
      </div>
    </footer>
  );
}
