type SectionHeadingProps = {
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
