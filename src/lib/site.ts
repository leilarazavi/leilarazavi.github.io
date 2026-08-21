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
    fa: "دکتر لیلا رضوی | روان‌شناس و پژوهشگر",
    en: "Dr. Leila Razavi | Psychologist & Researcher",
  },

  description: {
    fa: "وب‌سایت رسمی دکتر لیلا رضوی، روان‌شناس و پژوهشگر.",
    en: "Official website of Dr. Leila Razavi, psychologist and researcher.",
  },

  copyright: "Leila Razavi",
} as const;
