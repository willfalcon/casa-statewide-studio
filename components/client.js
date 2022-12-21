import sanityClient from 'part:@sanity/base/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient.withConfig({ apiVersion: '2022-11-02' });

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
