import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortTitle: z.string().optional(),
      tagline: z.string().optional(),
      collaborators: z.array(z.string()).default([]),
      videos: z.array(z.string()).default([]),
      image: image(),
      gallery: z.array(image()).default([]),
      abstract: z.string(),
      description: z.string(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, blog };
