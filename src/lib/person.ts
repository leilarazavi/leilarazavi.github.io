import { site } from "./site";

export const person = {
  name: "Leila Razavi",

  nameFa: "لیلا رضوی",

  fullName: "Dr. Leila Razavi",

  fullNameFa: "دکتر لیلا رضوی",

  givenName: "Leila",

  familyName: "Razavi",

  jobTitle: {
    fa: "روان‌شناس و مدرس دانشگاه",
    en: "Psychologist and University Lecturer",
  },

  description: {
    fa:
      "دکتر لیلا رضوی، روان‌شناس، مدرس دانشگاه و فعال حوزه پژوهش‌های روان‌شناختی است.",

    en:
      "Dr. Leila Razavi is a psychologist, university lecturer, and psychological researcher.",
  },

  url: `${site.url}/about/`,

  knowsAbout: [
    "Psychology",
    "Clinical Psychology",
    "Health Psychology",
    "Psychological Research",
    "Couples Therapy",
    "Family Therapy",
    "Adolescent Counseling",
  ],

  affiliations: [
    {
      name:
        "Pendar Nimrokh Psychological Center",

      url:
        "https://pendar-gp.ir/",
    },
  ],

  professionalMemberships: [
    {
      organization:
        "Iranian Psychology and Counseling Organization",

      membershipNumber: "30742",

      licenseNumber: "8240",
    },
  ],

  profiles: {
    linkedin: "",
    googleScholar:
      "https://scholar.google.com/citations?user=M8clObQAAAAJ",
    researchGate: "",
    instagram: "",
    pendar:
      "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",
  },

  image: "",

  contact: {
    email: "",
    telephone: "",
  },
} as const;