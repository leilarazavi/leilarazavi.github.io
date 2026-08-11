export type PublicationStatus =
  | "confirmed"
  | "probable"
  | "rejected";

export type IdentityConfidence =
  | "high"
  | "medium"
  | "low";

export type PublicationType =
  | "journal-article"
  | "conference-paper"
  | "book"
  | "book-chapter"
  | "thesis"
  | "other";

export type PublicationSource = {
  label: string;
  url: string;
  type:
    | "official"
    | "scholar"
    | "journal"
    | "conference"
    | "database"
    | "institution"
    | "other";
};

export type Publication = {
  id: string;

  title: string;
  titleFa?: string;

  authors: string[];

  year?: number;
  publicationDate?: string;

  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;

  doi?: string;

  publisher?: string;

  originalUrl?: string;

  type: PublicationType;

  language: "fa" | "en";

  status: PublicationStatus;

  identityConfidence: IdentityConfidence;

  verificationSources: PublicationSource[];

  notes?: string;
};


/**
 * Source of truth for Dr. Leila Razavi's
 * academic publications.
 *
 * IMPORTANT:
 * Only records with:
 *
 * status: "confirmed"
 *
 * should be exposed publicly.
 */
export const publications: Publication[] = [
  {
    id: "acceptance-commitment-ms-emotional-alexithymia",

    title:
      "اثر بخشی درمان مبتنی بر پذیرش و تعهد بر شدت خستگی و افسردگی با نقش تعدیل کنندگی ناگویی هیجانی در افراد مبتلا به MS",

    authors: [
      // TODO:
      // Add exact author list after verification.
    ],

    type: "other",

    language: "fa",

    status: "probable",

    identityConfidence: "low",

    verificationSources: [
      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type: "official",
      },
    ],

    notes:
      "Listed on Pendar profile, but authorship and bibliographic details still require independent verification.",
  },


  {
    id: "mindfulness-acceptance-commitment-migraine",

    title:
      "مقایسه اثربخشی درمان ذهن آگاهی مبنی بر کاهش استرس در درمان مبتنی بر پذیرش و تعهد به شیوه گروهی بر شدت درد و کیفیت زندگی مرتبط با سلامت در افراد مبتلا به میگرن",

    authors: [],

    type: "other",

    language: "fa",

    status: "probable",

    identityConfidence: "low",

    verificationSources: [
      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type: "official",
      },
    ],

    notes:
      "Listed on Pendar profile. Independent author verification required.",
  },


  {
    id: "acceptance-commitment-autism-resilience",

    title:
      "اثربخشی آموزش رویکرد درمان مبتنی بر پذیرش و تعهد بر تاب آوری والدین دارای فرزند مبتلا به اوتیسم",

    authors: [],

    type: "other",

    language: "fa",

    status: "probable",

    identityConfidence: "low",

    verificationSources: [
      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type: "official",
      },
    ],

    notes:
      "Listed on Pendar profile. Independent author verification required.",
  },


  {
    id: "compassion-emotion-regulation-cancer",

    title:
      "اثربخشی درمان متمرکز بر شفقت ورزی بر تنظیم هیجانی مادران کودکان مبتلا به سرطان",

    authors: [],

    type: "other",

    language: "fa",

    status: "probable",

    identityConfidence: "low",

    verificationSources: [
      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type: "official",
      },
    ],

    notes:
      "Pendar lists this work, but the Civilica result previously examined for a very similar title identifies a different author. Do not publish until exact authorship is verified.",
  },


  {
    id: "cbt-generalized-anxiety-disorder",

    title:
      "تشخیص، فرمول بندی و طرح درمان شناختی رفتاری اختلال اضطراب فراگیر",

    authors: [],

    type: "book",

    language: "fa",

    status: "probable",

    identityConfidence: "low",

    verificationSources: [
      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type: "official",
      },
    ],

    notes:
      "Pendar lists this as a book. Author/publisher/ISBN details require independent verification.",
  },
];