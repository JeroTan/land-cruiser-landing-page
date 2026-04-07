# Astro JS + Cloudflare Workers Landing Page

This project is a high-performance landing page built with Astro JS and deployed on Cloudflare Workers.

## Tech Stack
- **Framework:** [Astro JS](https://astro.build/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Interactivity:** [React](https://reactjs.org/)
- **Utilities:** [lodash](https://lodash.com/), [p-queue](https://github.com/sindresorhus/p-queue), [jose](https://github.com/panva/jose)
- **Testing:** [Vitest](https://vitest.dev/)
- **SEO:** [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)

## Project Structure
- `src/`: Astro source files.
- `src/cloudflare/worker.ts`: Custom worker entry point for Cloudflare.
- `wrangler.jsonc`: Cloudflare configuration.
- `astro.config.mjs`: Astro configuration with Cloudflare adapter.

## Scripts
- `npm run dev`: Start local development server.
- `npm run build`: Build for production (includes type checking and tests).
- `npm run wrangler-dev`: Build and run in wrangler for local Cloudflare environment.
- `npm run wrangler-types`: Synchronize Cloudflare environment types.
- `npm run check`: Run Astro check.
- `npm run test`: Run tests with Vitest.

## Cloudflare Binding Workflow
When adding or modifying bindings in `wrangler.jsonc` (KV, D1, R2, etc.), you **MUST** run:
```bash
npm run wrangler-types
```
This keeps `worker-configuration.d.ts` synchronized and ensures type safety.
