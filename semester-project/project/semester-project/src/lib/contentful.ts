import { createClient } from 'contentful';

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error('Missing Contentful space ID or access token');
}

const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export async function fetchReviews() {
  const entries = await contentfulClient.getEntries({ content_type: 'review' });
  return entries.items.map((item) => ({
    name: item.fields.name,
    email: item.fields.email,
    rating: item.fields.rating,
    comment: item.fields.comment,
  }));
}
