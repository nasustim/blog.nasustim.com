import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog,
};
