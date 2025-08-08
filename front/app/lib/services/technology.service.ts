import { gql } from "../strapi";
import { normalizeImageUrl } from "../utils";
import { APP_CONFIG } from "../constants";
import {
  TechnologyDetail,
  TechnologyDetailResponse,
  TechnologyItem,
  TechnologyResponse,
} from "../types";

const BASE_URL = process.env.STRAPI_BASE_URL as string;

/**
 * GraphQL queries for technology data
 */
const QUERIES = {
  GET_TECHNOLOGIES: `
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
  `,
  
  GET_TECHNOLOGY_SLUGS: `
    query GetTechnologySlugs {
      technologies {
        slug
      }
    }
  `,
  
  GET_TECHNOLOGY_BY_SLUG: `
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
  `,
} as const;

/**
 * Transform raw technology response to normalized technology item
 */
function transformTechnologyResponse(technology: TechnologyResponse): TechnologyItem {
  return {
    title: technology.title,
    slug: technology.slug,
    shortDescription: technology.shortDescription,
    category: technology.category,
    maturityLevel: technology.maturityLevel,
    impactScore: technology.impactScore,
    publishedAt: technology.publishedAt,
    image: { url: normalizeImageUrl(technology.image?.url, BASE_URL) },
  };
}

/**
 * Transform raw technology detail response to normalized technology detail
 */
function transformTechnologyDetailResponse(technology: TechnologyDetailResponse): TechnologyDetail {
  return {
    ...transformTechnologyResponse(technology),
    description: technology.description,
  };
}

/**
 * Technology service class for data operations
 */
export class TechnologyService {
  /**
   * Fetch all technologies
   */
  static async getTechnologies(): Promise<TechnologyItem[]> {
    try {
      const { technologies } = await gql<{ technologies: TechnologyResponse[] }>(
        QUERIES.GET_TECHNOLOGIES
      );
      
      return technologies.map(transformTechnologyResponse);
    } catch (error) {
      console.error("Failed to fetch technologies:", error);
      throw new Error("Unable to load technologies. Please try again later.");
    }
  }

  /**
   * Fetch all technology slugs for static generation
   */
  static async getAllSlugs(): Promise<string[]> {
    try {
      const { technologies } = await gql<{ technologies: { slug: string }[] }>(
        QUERIES.GET_TECHNOLOGY_SLUGS
      );
      
      return technologies.map((t) => t.slug);
    } catch (error) {
      console.error("Failed to fetch technology slugs:", error);
      throw new Error("Unable to load technology slugs.");
    }
  }

  /**
   * Fetch technology by slug
   */
  static async getTechnologyBySlug(slug: string): Promise<TechnologyDetail | null> {
    try {
      const { technologies } = await gql<{
        technologies: TechnologyDetailResponse[];
      }>(QUERIES.GET_TECHNOLOGY_BY_SLUG, { slug });

      const technology = technologies[0];
      if (!technology) return null;

      return transformTechnologyDetailResponse(technology);
    } catch (error) {
      console.error(`Failed to fetch technology with slug "${slug}":`, error);
      throw new Error("Unable to load technology details. Please try again later.");
    }
  }

  /**
   * Get revalidation time for caching
   */
  static getRevalidateTime(): number {
    return APP_CONFIG.revalidateTime;
  }
}
