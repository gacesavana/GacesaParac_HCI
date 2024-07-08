import { createClient, Entry } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error("Missing Contentful space ID or access token");
}

const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

interface Review {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export async function fetchReviews(): Promise<Review[]> {
  const entries = await contentfulClient.getEntries({ content_type: "review" });
  return entries.items.map((item: Entry<any>) => ({
    name: typeof item.fields.name === "string" ? item.fields.name : "",
    email: typeof item.fields.email === "string" ? item.fields.email : "",
    rating: typeof item.fields.rating === "number" ? item.fields.rating : 1,
    comment: typeof item.fields.comment === "string" ? item.fields.comment : "",
  }));
}
