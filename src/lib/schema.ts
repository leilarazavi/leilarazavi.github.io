import { person } from "./person";
import { site } from "./site";

/**
 * Remove empty values from an object.
 */
function removeEmpty<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === undefined || value === null || value === "") {
        return false;
      }

      if (Array.isArray(value) && value.length === 0) {
        return false;
      }

      return true;
    }),
  ) as T;
}

/**
 * Returns the canonical Person entity.
 *
 * This is the main entity we want search engines
 * to associate with the website.
 */
export function getPersonSchema() {
  const sameAs = Object.values(person.profiles).filter(Boolean);

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": `${site.url}/#person`,

    name: person.fullName,
    alternateName: person.fullNameFa,

    url: `${site.url}/about/`,

    jobTitle: person.jobTitle.en,

    description: person.description.en,

    knowsAbout: person.knowsAbout,

    affiliation: person.affiliations.map((affiliation) => ({
      "@type": "Organization",
      name: affiliation.name,
      url: affiliation.url,
    })),

    sameAs,

    image: person.image || undefined,
  });
}

/**
 * Website entity.
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${site.url}/#website`,

    url: site.url,

    name: site.name,

    alternateName: site.nameFa,

    publisher: {
      "@id": `${site.url}/#person`,
    },

    inLanguage: ["fa-IR", "en"],
  };
}

/**
 * Profile page schema.
 *
 * Used on the About page.
 */
export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "ProfilePage",

    "@id": `${site.url}/about/#profile`,

    url: `${site.url}/about/`,

    name: site.title.en,

    mainEntity: {
      "@id": `${site.url}/#person`,
    },

    isPartOf: {
      "@id": `${site.url}/#website`,
    },
  };
}

/**
 * Breadcrumb schema.
 *
 * Example:
 *
 * Home → Publications → Article
 */
export function getBreadcrumbSchema(
  items: Array<{
    name: string;
    url: string;
  }>,
) {
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
  year: number;
  authors: string[];
  journal?: string;
  doi?: string;
  publisher?: string;
  language?: string;
}) {
  const authorSchemas = authors.map((author) => {
    const normalizedAuthor = author
      .toLowerCase()
      .replace(/\s+/g, " ");

    const isLeilaRazavi =
      normalizedAuthor.includes("leila razavi") ||
      normalizedAuthor.includes("لیلا رضوی");

    if (isLeilaRazavi) {
      return {
        "@type": "Person",

        "@id": `${site.url}/#person`,

        name: person.name,

        url: `${site.url}/about/`,
      };
    }

    return {
      "@type": "Person",

      name: author,
    };
  });

  return {
    "@context": "https://schema.org",

    "@type": "ScholarlyArticle",

    "@id": `${url}#article`,

    headline: title,

    url,

    datePublished: `${year}-01-01`,

    author: authorSchemas,

    isPartOf: journal
      ? {
          "@type": "Periodical",
          name: journal,
        }
      : undefined,

    publisher: publisher
      ? {
          "@type": "Organization",
          name: publisher,
        }
      : undefined,

    identifier: doi
      ? {
          "@type": "PropertyValue",
          propertyID: "DOI",
          value: doi,
        }
      : undefined,

    inLanguage: language,

    description,
  };
}