import { person } from "./person";
import { site } from "./site";

function removeEmpty<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => {
    if (value === undefined || value === null || value === "") return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  })) as T;
}

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;
const pendarGroupId = `${site.url}/#pendar-group`;
const pendarNimrokhId = `${site.url}/#pendar-nimrokh`;
const pendarQomId = `${site.url}/#pendar-nimrokh-qom`;

function organizationRef(id: string, name: string) {
  return { "@type": "Organization", "@id": id, name };
}

function getVerifiedSameAs() {
  return person.identitySources.filter((source) => source.verified).map((source) => source.url);
}

export function getPersonSchema() {
  const pendarQom = {
    "@type": "Organization",
    "@id": pendarQomId,
    name: "Pendar Nimrokh Qom",
    alternateName: "پندار نیم‌رخ قم",
    url: person.affiliations[0].url,
    parentOrganization: { "@id": pendarNimrokhId },
  };

  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
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
    worksFor: { "@id": pendarQomId },
    memberOf: person.positions.map((position) => organizationRef(`${site.url}/#org-${position.organizationEn.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`, position.organizationEn)),
    sameAs: getVerifiedSameAs(),
    image: person.image.src ? new URL(person.image.src, site.url).toString() : undefined,
    mainEntityOfPage: { "@id": `${site.url}/about/#profile` },
  });
}

export function getPendarOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": pendarGroupId,
    name: "Pendar Group",
    alternateName: "گروه سازمان‌های علمی، اجتماعی و درمانی پندار",
    sameAs: ["https://pendar-gp.ir/", "https://www.instagram.com/pendarqom/"],
    subOrganization: {
      "@type": "Organization",
      "@id": pendarNimrokhId,
      name: "Pendar Nimrokh",
      alternateName: "پندار نیم‌رخ",
      url: "https://pendar-gp.ir/",
      parentOrganization: { "@id": pendarGroupId },
      subOrganization: {
        "@type": "Organization",
        "@id": pendarQomId,
        name: "Pendar Nimrokh Qom",
        alternateName: "پندار نیم‌رخ قم",
        url: person.affiliations[0].url,
        parentOrganization: { "@id": pendarNimrokhId },
        employee: { "@id": personId },
      },
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    alternateName: site.nameFa,
    publisher: { "@id": personId },
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
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
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

export function getPodcastSeriesSchema({ name, description, url, spotifyUrl, image, episodeUrls = [], language = "fa-IR" }: { name: string; description: string; url: string; spotifyUrl: string; image?: string; episodeUrls?: string[]; language?: string }) {
  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    "@id": `${url}#podcast`,
    name,
    description,
    url,
    sameAs: [spotifyUrl],
    author: { "@id": personId },
    creator: { "@id": personId },
    episode: episodeUrls.map((episodeUrl) => ({ "@type": "PodcastEpisode", "@id": `${episodeUrl}#episode`, url: episodeUrl })),
    inLanguage: language,
    image,
  });
}

export function getPodcastEpisodeSchema({ name, description, url, spotifyUrl, episodeNumber, seriesUrl, image, language = "fa-IR" }: { name: string; description: string; url: string; spotifyUrl: string; episodeNumber: number; seriesUrl: string; image?: string; language?: string }) {
  return removeEmpty({
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    "@id": `${url}#episode`,
    name,
    description,
    url,
    sameAs: [spotifyUrl],
    episodeNumber,
    partOfSeries: { "@type": "PodcastSeries", "@id": `${seriesUrl}#podcast`, url: seriesUrl },
    author: { "@id": personId },
    creator: { "@id": personId },
    inLanguage: language,
    image,
  });
}

function getAuthorSchemas(authors: string[]) {
  return authors.map((author) => {
    const normalized = author.toLowerCase().replace(/\s+/g, " ");
    const isLeilaRazavi = normalized.includes("leila razavi") || normalized.includes("لیلا رضوی");
    if (isLeilaRazavi) return { "@type": "Person", "@id": personId, name: person.fullName, url: person.url };
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
