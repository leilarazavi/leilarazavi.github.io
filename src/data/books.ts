export type BookEntity = {
  id: string;
  titleFa: string;
  titleEn: string;
  authors: string[];
  publisher: string;
  isbn: string;
  year: number;
  pages: number;
  language: "fa" | "en";
  type: "book";
};

export const books: BookEntity[] = [
  {
    id: "generalized-anxiety-disorder-cbt",
    titleFa: "تشخیص، فرمول‌بندی و طرح درمان شناختی–رفتاری اختلال اضطراب فراگیر",
    titleEn: "Diagnosis, Formulation and Cognitive Behavioral Treatment Plan for Generalized Anxiety Disorder",
    authors: ["Leila Razavi", "Maryam Zarei Nejad"],
    publisher: "انتشارات نگاه ماندگار",
    isbn: "9786009695683",
    year: 1398,
    pages: 156,
    language: "fa",
    type: "book"
  }
];
