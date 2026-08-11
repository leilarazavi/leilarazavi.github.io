export type PublicationStatus =
  | "confirmed"
  | "probable"
  | "rejected";

export type Publication = {
  id: string;

  title: string;
  titleFa?: string;

  authors: string[];

  year: number;
  publicationDate?: string;

  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;

  doi?: string;

  originalUrl?: string;

  publisher?: string;

  type:
    | "journal-article"
    | "conference-paper"
    | "book-chapter"
    | "thesis"
    | "other";

  language: "fa" | "en";

  status: PublicationStatus;

  verificationSources: {
    label: string;
    url: string;
  }[];

  notes?: string;
};


export const publications: Publication[] = [
  // آثار تأییدشده را اینجا اضافه می‌کنیم.
];