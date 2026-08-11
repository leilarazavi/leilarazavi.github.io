import {
  publications,
  type Publication,
} from "../data/publications";


export function getConfirmedPublications() {
  return publications.filter(
    (publication) =>
      publication.status === "confirmed",
  );
}


export function getProbablePublications() {
  return publications.filter(
    (publication) =>
      publication.status === "probable",
  );
}


export function getRejectedPublications() {
  return publications.filter(
    (publication) =>
      publication.status === "rejected",
  );
}


export function getPublicationById(
  id: string,
): Publication | undefined {
  return publications.find(
    (publication) =>
      publication.id === id,
  );
}


export function getPublicationsByYear() {
  return [...getConfirmedPublications()]
    .sort(
      (a, b) =>
        (b.year ?? 0) -
        (a.year ?? 0),
    );
}