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
    fa: "دکتر لیلا رضوی، روان‌شناس، مدرس دانشگاه و پژوهشگر حوزه روان‌شناسی است.",
    en: "Dr. Leila Razavi is a psychologist, university lecturer, and researcher in psychology.",
  },

  url: `${site.url}/about/`,

  knowsAbout: [
    "Psychology",
    "Clinical Psychology",
    "Health Psychology",
    "Psychological Research",
    "Acceptance and Commitment Therapy",
    "Mindfulness-Based Interventions",
    "Pain and Health-Related Quality of Life",
    "Family and Adolescent Counseling",
  ],

  affiliations: [
    {
      name: "Pendar Nimrokh Psychological Center",
      url: "https://pendar-gp.ir/",
    },
  ],

  professionalCredentials: {
    psychologyOrganization: {
      name: "Iranian Psychology and Counseling Organization",
      membershipNumber: "30742",
      licenseNumber: "8240",
    },
  },

  positions: [
    {
      titleFa: "عضو شورای مرکزی مدرسه روان‌شناسی استان قم",
      titleEn: "Member, Central Council of the School of Psychology in Qom Province",
      organizationFa: "کانون روان‌شناسان و مشاوران استان قم / مدرسه روان‌شناسی",
      organizationEn: "Psychologists and Counselors Association of Qom Province / School of Psychology",
      source: "https://www.instagram.com/p/Da8wE5kE1Es/",
    },
    {
      titleFa: "معاون انجمن صنفی کارفرمایی مراکز مشاوره قم",
      titleEn: "Deputy, Association of Counseling Centers Employers in Qom",
      organizationFa: "انجمن صنفی کارفرمایی مراکز مشاوره قم",
      organizationEn: "Association of Counseling Centers Employers in Qom",
      source: "https://www.instagram.com/p/DbQ_uuvMC9i/",
    },
  ],

  research: {
    researchInterests: [
      "Acceptance and Commitment Therapy",
      "Mindfulness-Based Interventions",
      "Pain and Health-Related Quality of Life",
      "Depression and Fatigue",
      "Alexithymia",
      "Cognitive Emotion Regulation",
      "Psychological Interventions in Health Conditions",
    ],
  },

  profiles: {
    googleScholar: "https://scholar.google.com/citations?user=M8clObQAAAAJ",
    instagram: "https://www.instagram.com/dr.leila.razavi_psy/",
    pendar: "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",
  },

  image: {
    src: "/images/leila-razavi.jpg",
    altFa: "دکتر لیلا رضوی",
    altEn: "Dr. Leila Razavi",
  },

  contact: {
    publicChannelsOnly: true,
  },
} as const;
