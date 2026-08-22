/**
 * Website-only configuration.
 * Person identity, profiles, affiliations and public contact channels live in person.ts.
 */

export const site = {
  githubUsername: "leilarazavi",

  get url() {
    return `https://${this.githubUsername}.github.io`;
  },

  name: "Dr. Leila Razavi",
  nameFa: "دکتر لیلا رضوی",

  defaultLocale: "fa" as const,
  locales: ["fa", "en"] as const,

  title: {
    fa: "دکتر لیلا رضوی | روان‌شناس، مدرس دانشگاه و پژوهشگر",
    en: "Dr. Leila Razavi | Psychologist, University Lecturer & Researcher",
  },

  description: {
    fa: "وب‌سایت رسمی دکتر لیلا رضوی، روان‌شناس، مدرس دانشگاه و پژوهشگر حوزه روان‌شناسی؛ شامل سوابق حرفه‌ای، پژوهش‌ها، آثار علمی و فعالیت‌های رسانه‌ای.",
    en: "Official website of Dr. Leila Razavi, psychologist, university lecturer and researcher, featuring professional background, research, publications and media activity.",
  },

  copyright: "Leila Razavi",
} as const;
