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
  const sameAs = person.identitySources.filter((source) => source.verified).map((source) => source.url);
  const pendarQom = {
    "@type": "Organization",
    "@id": `${site.url}/#pendar-nimrokh-qom`,
    name: "Pendar Nimrokh Qom",
    alternateName: "پندار نیم‌رخ قم",
    url: person.affiliations[0].url,
    parentOrganization: { "@id": `${site.url}/#pendar-nimrokh` },
  };

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
    affiliation: [pendarQom],
    worksFor: pendarQom,
    memberOf: person.positions.map((position) => ({ "@type": "Organization", name: position.organizationEn })),
    sameAs,
    image: person.image.src ? new URL(person.image.src, site.url).toString() : undefined,
  });
}

export function getPendarOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#pendar-group`,
    name: "Pendar Group",
    alternateName: "گروه سازمان‌های علمی، اجتماعی و درمانی پندار",
    subOrganization: {
      "@type": "Organization",
      "@id": `${site.url}/#pendar-nimrokh`,
      name: "Pendar Nimrokh",
      alternateName: "پندار نیم‌رخ",
      url: "https://pendar-gp.ir/",
      subOrganization: {
        "@type": "Organization",
        "@id": `${site.url}/#pendar-nimrokh-qom`,
        name: "Pendar Nimrokh Qom",
        alternateName: "پندار نیم‌رخ قم",
        url: person.affiliations[0].url,
        employee: { "@id": `${site.url}/#person` },
      },
    },
  };
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

export function getProfilePageSchema({ url = `${site.url}/about/`, name = site.title.fa, language = "fa-IR" }: { url?: string; name?: string; language?: "fa-IR" | "en" } = {}) {
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
    primaryImageOfPage: { "@type": "ImageObject", url: new URL(person.image.src, site.url).toString() },
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
  };
}

export function getPodcastSeriesSchema({ name, description, url, spotifyUrl, image, language = "fa-IR" }: { name: string; description: string; url: string; spotifyUrl: string; image?: string; language?: string }) {
  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${url}#podcast`,
    name,
    description,
    url,
    sameAs: [spotifyUrl],
    author: { "@id": `${site.url}/#person` },
    creator: { "@id": `${site.url}/#person` },
    inLanguage: language,
    image,
  });
}

export function getPodcastEpisodeSchema({ name, description, url, spotifyUrl, episodeNumber, seriesUrl, language = "fa-IR" }: { name: string; description: string; url: string; spotifyUrl: string; episodeNumber: number; seriesUrl: string; language?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "@id": `${url}#episode`,
    name,
    description,
    url,
    sameAs: [spotifyUrl],
    episodeNumber,
    partOfSeries: { "@type": "PodcastSeries", "@id": `${seriesUrl}#podcast`, url: seriesUrl },
    author: { "@id": `${site.url}/#person` },
    creator: { "@id": `${site.url}/#person` },
    inLanguage: language,
  };
}

function getAuthorSchemas(authors: string[]) {
  return authors.map((author) => {
    const normalized = author.toLowerCase().replace(/\s+/g, " ");
    const isLeilaRazavi = normalized.includes("leila razavi") || normalized.includes("لیلا رضوی");
    if (isLeilaRazavi) return { "@type": "Person", "@id": `${site.url}/#person`, name: person.fullName, url: person.url };
    return { "@type": "Person", name: author };
  });
}

export function getScholarlyArticleSchema({ title, description, url, year, authors, journal, doi, publisher, language }: { title: string; description?: string; url: string; year?: number; authors: string[]; journal?: string; doi?: string; publisher?: string; language?: string }) {
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
    identifier: doi ? { "@type": "PropertyValue", propertyID: "DOI", value: doi } : undefined,
    inLanguage: language,
    description,
  });
}

export function getBookSchema({ title, description, url, year, authors, publisher, isbn, language }: { title: string; description?: string; url: string; year?: number; authors: string[]; publisher?: string; isbn?: string; language?: string }) {
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
