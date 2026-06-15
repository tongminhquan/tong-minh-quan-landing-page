export const profile = {
  name: "Tống Minh Quân",
  facebookUrl: "https://www.facebook.com/maminhquan69",
  zaloPhone: "0947192590",
  zaloUrl: "https://zalo.me/0947192590",
  avatarUrl: "/tong-minh-quan-avatar.png",
  role: {
    vi: "Thực tập sinh Marketing / Sinh viên Digital Marketing",
    en: "Marketing Intern / Digital Marketing Student",
  },
  skills: [
    { id: "communication" },
    { id: "socialMedia" },
    { id: "canva" },
    { id: "teamwork" },
    { id: "planning" },
    { id: "support" },
  ],
  education: [
    {
      school: "FPT Polyschool Đồng Nai",
      period: "2023-2025",
      level: "intermediate",
      summary: "polyschool",
      highlights: ["gpa37", "excellentGraduation"],
    },
    {
      school: "FPT Polytechnic Đồng Nai",
      period: "2025-2026",
      level: "college",
      summary: "polytechnic",
      highlights: ["fall2025", "digitalMarketingTrack"],
    },
  ],
  project: {
    name: "Nhà Nấm Nhỏ",
    period: "09/2025 - nay",
  },
  activities: [
    { id: "softSkillsClub", period: "01/2024 - 02/2025" },
    { id: "mediaClub", period: "12/2023 - 05/2024" },
  ],
  awards: [
    { id: "database2025", period: "2025" },
    { id: "academicAchievement", period: "2023-2024" },
  ],
} as const;
