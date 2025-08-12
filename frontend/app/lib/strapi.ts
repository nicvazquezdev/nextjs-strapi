import { GraphQLResponse } from "./types";

const URL = process.env.STRAPI_GRAPHQL_URL as string;
const TOKEN = process.env.STRAPI_API_TOKEN as string;

export async function gql<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  if (!URL) throw new Error("Missing STRAPI_GRAPHQL_URL");
  if (!TOKEN) throw new Error("Missing STRAPI_API_TOKEN");

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
      "x-apollo-operation-name": "Op",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const text = await res.text();
  let json: GraphQLResponse<T> | null = null;

  try {
    json = JSON.parse(text) as GraphQLResponse<T>;
  } catch {
    throw new Error(`Invalid JSON response: ${text}`);
  }

  if (!res.ok) throw new Error(`GraphQL ${res.status}: ${text}`);
  if (json.errors?.length) throw new Error(JSON.stringify(json.errors));

  return json.data;
}
