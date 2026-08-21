import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const publicationSource = z.object({
  label: z.string(),
  url: z.string().url(),
  type: z.enum(["official", "journal", "conference", "database", "publisher", "other"]),
});

const publications = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/publications",
  }),
  schema: z.object({
    title: z.string(),
    titleFa: z.string().optional(),
    authors: z.array(z.string()),
    year: z.number().int().min(1900).max(2100).optional(),
    publicationDate: z.string().optional(),
    journal: z.string().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().url().optional(),
    url: z.string().url().optional(),
    publisher: z.string().optional(),
    isbn: z.string().optional(),
    conference: z.string().optional(),
    abstract: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    language: z.enum(["fa", "en"]).default("en"),
    type: z.enum([
      "journal-article",
      "conference-paper",
      "book",
      "book-chapter",
      "thesis",
      "other",
    ]).default("journal-article"),
    verified: z.boolean().default(false),
    featured: z.boolean().default(false),
    verificationSources: z.array(publicationSource).default([]),
  }),
});

export const collections = { publications };
