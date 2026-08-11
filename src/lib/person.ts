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
      "دکتر لیلا رضوی، روان‌شناس، مدرس دانشگاه و پژوهشگر حوزه روان‌شناسی است.",

    en:
      "Dr. Leila Razavi is a psychologist, university lecturer, and researcher in psychology.",
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

  professionalCredentials: {
    psychologyOrganization: {
      name:
        "Iranian Psychology and Counseling Organization",

      membershipNumber: "30742",

      licenseNumber: "8240",

      verificationDocument:
        "TODO_GET_FROM_DR",
    },

    doctorate: {
      degreeTitleFa:
        "TODO_GET_FROM_DR",

      degreeTitleEn:
        "TODO_GET_FROM_DR",

      institutionFa:
        "TODO_GET_FROM_DR",

      institutionEn:
        "TODO_GET_FROM_DR",

      country:
        "TODO_GET_FROM_DR",

      graduationYear:
        "TODO_GET_FROM_DR",

      verificationDocument:
        "TODO_GET_FROM_DR",
    },

    otherDegrees: [
      /*
       * Add verified degrees here after
       * receiving CV / certificates.
       */
    ],
  },

  /*
   * Academic and professional positions.
   *
   * SOURCE REQUIRED:
   * CV or official documents from Dr. Razavi.
   */
  positions: [
    {
      titleFa:
        "TODO_GET_FROM_DR",

      titleEn:
        "TODO_GET_FROM_DR",

      organizationFa:
        "TODO_GET_FROM_DR",

      organizationEn:
        "TODO_GET_FROM_DR",

      startYear:
        "TODO_GET_FROM_DR",

      endYear:
        "TODO_GET_FROM_DR",

      verificationDocument:
        "TODO_GET_FROM_DR",
    },
  ],

  /*
   * Scientific / research profile.
   */
  research: {
    researchInterests: [
      /*
       * TODO:
       * Get the official research interests
       * from CV / Google Scholar / Dr. Razavi.
       */
    ],

    academicCV:
      "TODO_GET_FROM_DR",

    dissertationTitleFa:
      "TODO_GET_FROM_DR",

    dissertationTitleEn:
      "TODO_GET_FROM_DR",
  },

  /*
   * External profiles.
   *
   * Only add URLs that have been verified
   * as belonging to Dr. Razavi.
   */
  profiles: {
    linkedin:
      "TODO_GET_VERIFIED_URL",

    googleScholar:
      "https://scholar.google.com/citations?user=M8clObQAAAAJ",

    researchGate:
      "TODO_GET_VERIFIED_URL",

    orcid:
      "TODO_GET_VERIFIED_URL",

    instagram:
      "TODO_GET_VERIFIED_URL",

    pendar:
      "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",
  },

  /*
   * Official photograph.
   *
   * TODO:
   * Get a high-resolution professional portrait
   * from Dr. Razavi.
   */
  image: {
    src:
      "TODO_GET_FROM_DR",

    altFa:
      "دکتر لیلا رضوی",

    altEn:
      "Dr. Leila Razavi",
  },

  /*
   * Contact information.
   *
   * TODO:
   * Get only the contact information that
   * Dr. Razavi wants to publish publicly.
   */
  contact: {
    email:
      "TODO_GET_FROM_DR",

    telephone:
      "TODO_GET_FROM_DR",

    addressFa:
      "TODO_GET_FROM_DR",

    addressEn:
      "TODO_GET_FROM_DR",
  },
} as const;