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
    | "publisher"
    | "other";
};

export type Publication = {
  id: string;

  title: string;
  titleFa?: string;
  titleEn?: string;

  authors: string[];

  year?: number;
  publicationDate?: string;

  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;

  doi?: string;

  publisher?: string;
  isbn?: string;

  conference?: string;

  originalUrl?: string;

  type: PublicationType;

  language: "fa" | "en";

  status: PublicationStatus;

  identityConfidence: IdentityConfidence;

  verificationSources: PublicationSource[];

  notes?: string;
};


export const publications: Publication[] = [

  // ============================================================
  // 1. MIGRAINE — VERIFIED
  // ============================================================

  {
    id: "mindfulness-act-migraine",

    title:
      "Comparison of the Effectiveness of Mindfulness-Based Stress Reduction Group Therapy With Acceptance and Commitment Therapy on Severity of Pain and Health-Related Quality of Life in Patients With Migraine",

    authors: [
      "Tahereh Haji Seyed Javadi",
      "Nader Aghareb Parast",
      "Seyed Shahin Shahsavani",
      "Mir Javad Chehraghi",
      "Leila Razavi",
      "Soheila Rahmani",
    ],

    year: 2019,

    journal:
      "International Clinical Neuroscience Journal",

    volume: "6",

    issue: "3",

    pages: "111–117",

    doi:
      "10.15171/icnj.2019.21",

    originalUrl:
      "https://doi.org/10.15171/icnj.2019.21",

    type: "journal-article",

    language: "en",

    status: "confirmed",

    identityConfidence: "high",

    verificationSources: [
      {
        label: "DOI",
        url:
          "https://doi.org/10.15171/icnj.2019.21",
        type: "journal",
      },

      {
        label: "ResearchGate",
        url:
          "https://www.researchgate.net/publication/335903302_Comparison_of_the_Effectiveness_of_MindfulnessBased_Stress_Reduction_Group_Therapy_With_Acceptance_and_Commitment_Therapy_on_Severity_of_Pain_and_Health-Related_Quality_of_Life_in_Patients_With_Migrai?utm_source=chatgpt.com",
        type: "database",
      },

      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",
        type: "official",
      },
    ],

    notes:
      "Verified through the publication record and author identity information linking Leila Razavi to Islamic Azad University of Qom.",
  },


  // ============================================================
  // 2. MULTIPLE SCLEROSIS — VERIFIED
  // ============================================================

  {
    id:
      "act-ms-fatigue-depression-alexithymia",

    title:
      "Effectiveness of Group Therapy Based on Acceptance and Commitment on the Severity of Fatigue and Depression With the Moderating Role of Alexithymia in Patients With Multiple Sclerosis",

    authors: [
      "Tahereh Haji Seyed Javadi",
      "Maryam Aghel Masjedi",
      "Elnaz Hamzehloo",
      "Mir Javad Chehraghi",
      "Leila Razavi",
      "Soheila Rahmani",
      "Somayeh Nejati",
    ],

    year: 2021,

    journal:
      "International Clinical Neuroscience Journal",

    volume: "8",

    issue: "1",

    pages: "37–43",

    doi:
      "10.34172/icnj.2021.08",

    originalUrl:
      "https://doi.org/10.34172/icnj.2021.08",

    type: "journal-article",

    language: "en",

    status: "confirmed",

    identityConfidence: "high",

    verificationSources: [
      {
        label: "DOI",
        url:
          "https://doi.org/10.34172/icnj.2021.08",
        type: "journal",
      },

      {
        label: "Pendar profile",
        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",
        type: "official",
      },
    ],

    notes:
      "Verified through the article record and affiliation information identifying Leila Razavi with the School of Psychology and Educational Sciences, Islamic Azad University of Qom.",
  },


  // ============================================================
  // 3. JOB ASPIRATIONS / JOB BURNOUT — VERIFIED
  // ============================================================

  {
    id:
      "job-aspirations-job-burnout-teachers",

    title:
      "Investigating the Relationship Between Job Aspirations and Job Burnout Among Education Teachers in Tehran",

    titleFa:
      "بررسی رابطه‌ی رغبت‌های شغلی با فرسودگی شغلی در معلمان آموزش و پرورش شهر تهران",

    authors: [
      "Ahmad Torabi",
      "Leila Razavi",
      "Maryam Bagheri Panah",
      "Maryam Zarei Nejad",
      "Matin Gol Afrooz",
      "Fatemeh Ehsanpour",
    ],

    year:
      undefined,
      // TODO: confirm exact publication year

    journal:
      "Sociology of Education",

    volume:
      undefined,

    issue:
      undefined,

    pages:
      undefined,

    doi:
      undefined,

    originalUrl:
      "https://www.jedusocio.com/index.php/se/article/view/65",

    type:
      "journal-article",

    language:
      "en",

    status:
      "confirmed",

    identityConfidence:
      "high",

    verificationSources: [
      {
        label:
          "Sociology of Education — official article page",

        url:
          "https://www.jedusocio.com/index.php/se/article/view/65",

        type:
          "journal",
      },

      {
        label:
          "Pendar profile",

        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type:
          "official",
      },
    ],

    notes:
      "This publication is not listed on the Pendar profile but has an independent official journal record identifying Leila Razavi as a co-author and linking her to Islamic Azad University of Qom.",
  },


  // ============================================================
  // 4. COMPASSION-FOCUSED THERAPY / COGNITIVE EMOTION
  //    REGULATION — VERIFIED
  // ============================================================

  {
    id:
      "compassion-focused-cognitive-emotion-regulation-cancer",

    title:
      "اثربخشی درمان متمرکز بر شفقت‌ورزی بر تنظیم شناختی هیجان مادران کودکان مبتلا به سرطان",

    authors: [
      "Tahereh Haji Seyed Javadi",
      "Leila Razavi",
      "Maryam Bagheri Panah",
      "Maryam Kharroushi",
    ],

    year:
      2019,

    publicationDate:
      "1398",

    conference:
      "پنجمین کنفرانس ملی نوآوری‌های اخیر در روانشناسی، کاربردها و توانمندسازی با محوریت روان‌درمانی",

    originalUrl:
      "https://civilica.com/doc/922205/",

    type:
      "conference-paper",

    language:
      "fa",

    status:
      "confirmed",

    identityConfidence:
      "high",

    verificationSources: [
      {
        label:
          "Civilica",

        url:
          "https://civilica.com/doc/922205/",

        type:
          "database",
      },

      {
        label:
          "Elmnet",

        url:
          "https://elmnet.ir/doc/20977526-25315",

        type:
          "database",
      },

      {
        label:
          "Pendar profile",

        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type:
          "official",
      },
    ],

    notes:
      "The Pendar profile uses a shorter title. The verified bibliographic title includes 'تنظیم شناختی هیجان'.",
  },


  // ============================================================
  // 5. BOOK — VERIFIED
  // ============================================================

  {
    id:
      "cbt-generalized-anxiety-disorder",

    title:
      "تشخیص، فرمول‌بندی و طرح درمان شناختی–رفتاری اختلال اضطراب فراگیر",

    authors: [
      "Leila Razavi",
      "Maryam Zarei Nejad",
    ],

    year:
      2019,

    publicationDate:
      "1398",

    publisher:
      "نگاه ماندگار",

    isbn:
      "978-600-96956-8-3",

    originalUrl:
      "TODO_GET_OFFICIAL_BOOK_RECORD",

    type:
      "book",

    language:
      "fa",

    status:
      "confirmed",

    identityConfidence:
      "high",

    verificationSources: [
      {
        label:
          "Mahdro",

        url:
          "https://mahdroo.ir/shop/product/book-1474674-h2dlbe",

        type:
          "database",
      },

      {
        label:
          "Pendar profile",

        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type:
          "official",
      },
    ],

    notes:
      "First edition. 197 pages. ISBN and publisher information verified through the available bibliographic record.",
  },


  // ============================================================
  // 6. AUTISM / RESILIENCE — NOT YET VERIFIED
  // ============================================================

  {
    id:
      "act-resilience-parents-autism",

    title:
      "اثربخشی آموزش رویکرد درمان مبتنی بر پذیرش و تعهد بر تاب‌آوری والدین دارای فرزند مبتلا به اوتیسم",

    authors: [],

    year:
      undefined,

    journal:
      undefined,

    originalUrl:
      undefined,

    type:
      "other",

    language:
      "fa",

    status:
      "probable",

    identityConfidence:
      "low",

    verificationSources: [
      {
        label:
          "Pendar profile",

        url:
          "https://pendar-gp.ir/chart/%D8%AF%DA%A9%D8%AA%D8%B1-%D9%84%DB%8C%D9%84%D8%A7-%D8%B1%D8%B6%D9%88%DB%8C/",

        type:
          "official",
      },
    ],

    notes:
      "Listed by Pendar but no sufficiently reliable primary publication record has yet been identified. Do not expose publicly until Dr. Razavi provides the article/PDF/conference record/DOI or another primary source.",
  },
];