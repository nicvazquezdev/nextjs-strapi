import { gql } from "./strapi";
import { TechnologyDetail, TechnologyItem } from "./types";

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
        data {
          attributes {
            title
            slug
            shortDescription
            category
            maturityLevel
            impactScore
            publishedAt
            image { data { attributes { url } } }
          }
        }
      }
    }
  `;
  const { technologies } = await gql<{
    technologies: { data: { attributes: any }[] };
  }>(query);
  return technologies.data.map((d) => {
    const a = d.attributes;
    return {
      title: a.title,
      slug: a.slug,
      shortDescription: a.shortDescription,
      category: a.category,
      maturityLevel: a.maturityLevel,
      impactScore: a.impactScore,
      publishedAt: a.publishedAt,
      image: { url: normalizeImage(a.image?.data?.attributes?.url ?? null) },
    } as TechnologyItem;
  });
}

export async function getAllSlugs(): Promise<string[]> {
  const query = `
    query GetSlugs {
      technologies {
        data { attributes { slug } }
      }
    }
  `;
  const { technologies } = await gql<{
    technologies: { data: { attributes: { slug: string } }[] };
  }>(query);
  return technologies.data.map((d) => d.attributes.slug);
}

export async function getTechnologyBySlug(
  slug: string,
): Promise<TechnologyDetail | null> {
  const query = `
    query GetTechnologyBySlug($slug: String) {
      technologies(filters: { slug: { eq: $slug } }, publicationState: LIVE) {
        data {
          attributes {
            title
            slug
            shortDescription
            description
            category
            maturityLevel
            impactScore
            publishedAt
            image { data { attributes { url } } }
          }
        }
      }
    }
  `;
  const { technologies } = await gql<{
    technologies: { data: { attributes: any }[] };
  }>(query, { slug });
  const a = technologies.data[0]?.attributes;
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
    image: { url: normalizeImage(a.image?.data?.attributes?.url ?? null) },
  } as TechnologyDetail;
}
