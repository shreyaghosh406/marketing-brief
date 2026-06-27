// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro + Starlight configuration.
// The `sidebar` array below controls the order of pages in the left-hand nav
// AND the prev/next paging at the bottom of each lesson. Keep it in course order.
export default defineConfig({
  integrations: [
    starlight({
      title: 'Marketing Foundations',
      description:
        'A one-week, self-paced course for people who are new to marketing.',
      // Hide the social/edit links by default; this is a self-contained course.
      customCss: ['./src/styles/theme.css'],
      // Course order: Welcome → Module 1 → 2 → 3 → 4 → 5 → 6 → Capstone.
      sidebar: [
        { label: 'Welcome', link: '/' },
        { label: '1. Meet the product', link: '/module-1/' },
        { label: '2. How AI works', link: '/module-2/' },
        { label: '3. Reading metrics', link: '/module-3/' },
        { label: '4. Go-to-market', link: '/module-4/' },
        { label: '5. Platforms (X & LinkedIn)', link: '/module-5/' },
        { label: '6. Copywriting', link: '/module-6/' },
        { label: 'Capstone', link: '/capstone/' },
      ],
      // Turn off the default "Edit page on GitHub" footer link.
      pagination: true,
    }),
  ],
});
