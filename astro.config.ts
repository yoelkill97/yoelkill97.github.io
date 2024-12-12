import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.CI // Dynamically set the site URL based on the environment
    ? 'https://yoelkill97.github.io' // GitHub Pages production URL
    : 'http://localhost:4321', // Local development URL
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Disable Tailwind's base styles
    }),
  ],
});
