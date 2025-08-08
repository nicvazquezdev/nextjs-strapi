/**
 * Application constants
 */

export const APP_CONFIG = {
  name: "Next Big Things",
  description: "A minimal catalog of emerging technologies powered by Strapi GraphQL",
  revalidateTime: 60,
} as const;

export const IMPACT_SCORE_THRESHOLDS = {
  high: 80,
  medium: 60,
  low: 40,
} as const;

export const IMPACT_SCORE_COLORS = {
  high: "bg-green-500",
  medium: "bg-blue-500",
  low: "bg-yellow-500",
  minimal: "bg-gray-400",
} as const;

export const DATE_FORMATS = {
  short: {
    month: "short" as const,
    day: "numeric" as const,
    year: "numeric" as const,
  },
  long: {
    month: "long" as const,
    day: "numeric" as const,
    year: "numeric" as const,
  },
} as const;

export const ROUTES = {
  home: "/",
  technologies: "/technologies",
  technologyDetail: (slug: string) => `/technologies/${slug}`,
} as const;

export const API_CONFIG = {
  graphql: {
    headers: {
      "Content-Type": "application/json",
      "x-apollo-operation-name": "Op",
    },
  },
} as const;
