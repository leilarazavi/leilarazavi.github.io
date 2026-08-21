import { person } from "./person";
import { site } from "./site";

function removeEmpty<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === undefined || value === null || value === "") return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }),
  ) as T;
}

export function getPersonSchema() {
  const sameAs = Object.values(person.profiles).filter(
    (url: unknown): url is string =>
      typeof url === "string" && url.startsWith("http"),
  );

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: person.fullName,
    givenName: person.givenName,
    familyName: person.familyName,
    alternateName: [person.name, person.nameFa, person.fullNameFa],
    honorificPrefix: "Dr.",
    url: person.url,
    jobTitle: person.jobTitle.en,
    description: person.description.en,
    knowsAbout: person.knowsAbout,
    affiliation: person.affiliations.map((affiliation) => ({
      "@type": "Organization",
      name: affiliation.name,
      url: affiliation.url,
    })),
    memberOf: person.positions.map((position) => ({
      "@type": "Organization",
      name: position.organizationEn,
    })),
    sameAs,
    image: person.image.src
      ? new URL(person.image.src, site.url).toString()
      : undefined,
  });
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    alternateName: site.nameFa,
    publisher: { "@id": `${site.url}/#person` },
    inLanguage: ["fa-IR", "en"],
  };
}

export function getProfilePageSchema({
  url = `${site.url}/about/`,
  name = site.title.fa,
  language = "fa-IR",
}: {
  url?: string;
  name?: string;
  language?: "fa-IR" | "en";
} = {}) {
  const normalizedUrl = new URL(url, site.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${normalizedUrl}#profile`,
    url: normalizedUrl,
    name,
    inLanguage: language,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#person` },
    mainEntity: { "@id": `${site.url}/#person` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: new URL(person.image.src, site.url).toString(),
    },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function getAuthorSchemas(authors: string[]) {
  return authors.map((author) => {
    const normalized = author.toLowerCase().replace(/\s+/g, " ");
    const isLeilaRazavi =
      normalized.includes("leila razavi") || normalized.includes("لیلا رضوی");

    if (isLeilaRazavi) {
      return {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: person.fullName,
        url: person.url,
      };
    }

    return { "@type": "Person", name: author };
  });
}

export function getScholarlyArticleSchema({
  title,
  description,
  url,
  year,
  authors,
  journal,
  doi,
  publisher,
  language,
}: {
  title: string;
  description?: string;
  url: string;
  year?: number;
  authors: string[];
  journal?: string;
  doi?: string;
  publisher?: string;
  language?: string;
}) {
  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${url}#article`,
    headline: title,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url, url },
    datePublished: year !== undefined ? `${year}` : undefined,
    author: getAuthorSchemas(authors),
    isPartOf: journal ? { "@type": "Periodical", name: journal } : undefined,
    publisher: publisher ? { "@type": "Organization", name: publisher } : undefined,
    identifier: doi
      ? { "@type": "PropertyValue", propertyID: "DOI", value: doi }
      : undefined,
    inLanguage: language,
    description,
  });
}

export function getBookSchema({
  title,
  description,
  url,
  year,
  authors,
  publisher,
  isbn,
  language,
}: {
  title: string;
  description?: string;
  url: string;
  year?: number;
  authors: string[];
  publisher?: string;
  isbn?: string;
  language?: string;
}) {
  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${url}#book`,
    name: title,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url, url },
    datePublished: year !== undefined ? `${year}` : undefined,
    author: getAuthorSchemas(authors),
    publisher: publisher ? { "@type": "Organization", name: publisher } : undefined,
    isbn,
    inLanguage: language,
    description,
  });
}
