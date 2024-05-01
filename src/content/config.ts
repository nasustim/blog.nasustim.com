import { defineCollection, z } from "astro:content";

const entry = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		draft: z.boolean(),
		date: z.coerce.date(),
		tags: z.string().array().optional(),
	}),
});

export const collections = { entry };
