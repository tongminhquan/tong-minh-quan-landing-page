import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--maminhqun-i2a.vn";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  title: "Tống Minh Quân | Marketing Intern & Digital Marketing Student",
  description:
    "Landing page cá nhân giới thiệu Tống Minh Quân, sinh viên Digital Marketing, thực tập sinh marketing, có kinh nghiệm quản lý mạng xã hội, thiết kế Canva và phát triển dự án Nhà Nấm Nhỏ.",
  keywords: [
    "Tống Minh Quân",
    "Marketing Intern",
    "Digital Marketing Student",
    "Canva Design",
    "Social Media Management",
    "Nhà Nấm Nhỏ",
  ],
  openGraph: {
    title: "Tống Minh Quân | Marketing Intern & Digital Marketing Student",
    description:
      "Bilingual personal landing page for Tống Minh Quân, focused on content planning, social media coordination, Canva design, and student-led brand building.",
    type: "website",
    url: siteUrl,
    locale: "vi_VN",
    siteName: "Tong Minh Quan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tống Minh Quân | Marketing Intern & Digital Marketing Student",
    description:
      "Bilingual personal landing page for Tống Minh Quân, Digital Marketing student and marketing intern.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-page)] text-[var(--color-foreground)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
