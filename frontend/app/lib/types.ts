export interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export type TechnologyItem = {
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  maturityLevel: string;
  publishedAt: string;
  image: { url: string };
};

export type TechnologyDetail = TechnologyItem & {
  description: string;
  image: { url: string };
};

export type TechnologyDetailResponse = Omit<TechnologyDetail, "image"> & {
  image: { url: string };
};

export type TechnologyResponse = Omit<TechnologyItem, "image"> & {
  image: { url: string };
};
