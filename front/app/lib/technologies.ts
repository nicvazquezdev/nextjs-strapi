import { gql } from "./strapi";
import {
  TechnologyDetail,
  TechnologyDetailResponse,
  TechnologyItem,
  TechnologyResponse,
} from "./types";

const BASE = process.env.STRAPI_BASE_URL as string;

function normalizeImage(url?: string | null) {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${BASE}${url}`;
}

export async function getTechnologies(): Promise<TechnologyItem[]> {
  const query = `
    query GetTechnologies {
      technologies(sort: "publishedAt:desc") {
        title
        slug
        shortDescription
        category
        maturityLevel
        impactScore
        publishedAt
        image { url }
      }
    }
  `;
  const { technologies } = await gql<{ technologies: TechnologyResponse[] }>(
    query,
  );
  return technologies.map((a) => ({
    title: a.title,
    slug: a.slug,
    shortDescription: a.shortDescription,
    category: a.category,
    maturityLevel: a.maturityLevel,
    impactScore: a.impactScore,
    publishedAt: a.publishedAt,
    image: { url: normalizeImage(a.image?.url ?? null) },
  }));
}

export async function getAllSlugs(): Promise<string[]> {
  const query = `
    query GetSlugs {
      technologies {
        slug
      }
    }
  `;
  const { technologies } = await gql<{ technologies: { slug: string }[] }>(
    query,
  );
  return technologies.map((t) => t.slug);
}

export async function getTechnologyBySlug(
  slug: string,
): Promise<TechnologyDetail | null> {
  const query = `
    query GetTechnologyBySlug($slug: String) {
      technologies(filters: { slug: { eq: $slug } }) {
        title
        slug
        shortDescription
        description
        category
        maturityLevel
        impactScore
        publishedAt
        image { url }
      }
    }
  `;
  const { technologies } = await gql<{
    technologies: TechnologyDetailResponse[];
  }>(query, { slug });
  const a = technologies[0];
  if (!a) return null;
  return {
    title: a.title,
    slug: a.slug,
    shortDescription: a.shortDescription,
    description: a.description,
    category: a.category,
    maturityLevel: a.maturityLevel,
    impactScore: a.impactScore,
    publishedAt: a.publishedAt,
    image: { url: normalizeImage(a.image?.url ?? null) },
  };
}
