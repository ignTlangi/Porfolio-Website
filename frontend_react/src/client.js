import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '45tsff9q',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skoXH8k5iiyRjdy9SSB5XM9TqVfn7MWs7pHofhiWrXKnnbC937a4NvjbqYl4XtR4lCeurkAvYdTx5joGfCxWRxxFxNIHXq6wSrLJtdLTsuvrjorVZcLwSz6Tvzh4BZJZSVBK0OMPI7rC173CZdPsikpRogXkIQOMDP3GzeOA7ZXSDn86iEZE',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);