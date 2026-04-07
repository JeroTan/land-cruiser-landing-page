import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://landing-page-land-crusier.pages.dev',
    output: 'server',
    adapter: cloudflare(),
    integrations: [react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            //@ts-ignore
            alias: import.meta.env.PROD && {
                "react-dom/server": "react-dom/server.edge",
            }
        }
    }
});