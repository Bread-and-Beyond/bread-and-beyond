import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "breads",
      "mains",
      "soups-sides",
      "desserts",
      "drinks",
      "holidays",
    ]),
    favorite: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    dietary: z.string().optional(),
    prepTime: z.string().optional(),
    cookTime: z.string().optional(),
    servings: z.string().optional(),
    notes: z.string().optional(),
    publishDate: z.date(),
    ingredientGroups: z.array(z.object({
      heading: z.string().optional(),
      items: z.array(z.string()),
    })),
    steps: z.array(z.string()),
  }),
});

export const collections = { recipes };
