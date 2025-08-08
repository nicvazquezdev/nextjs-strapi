export type TechnologyItem = {
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  maturityLevel: string;
  impactScore: number;
  publishedAt: string;
  image?: { url: string | null };
};

export type TechnologyDetail = TechnologyItem & {
  description: string;
  image?: { url: string | null };
};
