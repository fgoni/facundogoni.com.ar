import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    appStoreUrl: z.string().optional(),
    status: z.enum(['Active', 'Completed', 'Archived']).optional(),
  }),
});

export const collections = {
  blog,
  projects,
};
