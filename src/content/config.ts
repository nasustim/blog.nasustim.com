import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string().datetime(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog,
};
