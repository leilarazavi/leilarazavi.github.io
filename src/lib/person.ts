/**
 * Dr. Leila Razavi - central person/entity data.
 *
 * Only use information that has been verified
 * from reliable sources.
 */

export const person = {
  name: "Leila Razavi",
  nameFa: "لیلا رضوی",

  honorific: "Dr.",

  fullName: "Dr. Leila Razavi",
  fullNameFa: "دکتر لیلا رضوی",

  jobTitle: {
    fa: "روان‌شناس و پژوهشگر",
    en: "Psychologist and Researcher",
  },

  description: {
    fa: "دکتر لیلا رضوی، روان‌شناس و پژوهشگر.",
    en: "Dr. Leila Razavi is a psychologist and researcher.",
  },

  /**
   * Keep this list conservative.
   * Add fields only after verification.
   */
  knowsAbout: [
    "Psychology",
    "Psychological Research",
    "Acceptance and Commitment Therapy",
    "Mindfulness",
    "Schema Therapy",
    "ACT",
    "Child Psychology",
  ],

  /**
   * Professional affiliation(s).
   * Add exact official titles after verification.
   */
  affiliations: [
    {
      name: "Pendar",
      url: "https://pendar-gp.ir/chart/%d8%af%da%a9%d8%aa%d8%b1-%d9%84%db%8c%d9%84%d8%a7-%d8%b1%d8%b6%d9%88%db%8c/",
    },
  ],

  /**
   * External profiles.
   *
   * Empty values are intentionally omitted from Schema.
   */
  profiles: {
    linkedin: "",
    googleScholar: "",
    researchGate: "",
    instagram: "",
    pendar: "https://pendar-gp.ir/chart/%d8%af%da%a9%d8%aa%d8%b1-%d9%84%db%8c%d9%84%d8%a7-%d8%b1%d8%b6%d9%88%db%8c/",
  },

  /**
   * Profile image.
   * We will add the actual image later.
   */
  image: "",
} as const;