import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const entries = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => (b.data.publishDate?.valueOf() ?? 0) - (a.data.publishDate?.valueOf() ?? 0),
  );

  return rss({
    title: 'Jose Lemus Ortiz — Blog',
    description: 'Stories and thoughts on my past experiences.',
    site: context.site,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishDate,
      link: `/blog/${entry.id}/`,
    })),
  });
}
