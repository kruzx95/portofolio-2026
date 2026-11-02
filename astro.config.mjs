// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kruzx95.github.io',
  base: process.env.GITHUB_ACTIONS ? '/portofolio-2026' : undefined,
});
