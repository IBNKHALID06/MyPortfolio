# MyPortfolio

[![CI](https://github.com/IBNKHALID06/MyPortfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/IBNKHALID06/MyPortfolio/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A production-ready full-stack React + Express (single-port) portfolio starter. Built with Vite, TypeScript, TailwindCSS, Radix UI, and Vitest. Includes a lightweight Express server co-located with the frontend for APIs or server-only logic.

## ✨ Features
- React 18 + TypeScript + Vite (fast HMR)
- TailwindCSS 3 with utility-first styling
- Radix UI + custom component library under `client/components/ui`
- Express backend integrated with Vite dev server (single port dev)
- Shared type-safe API contracts via `shared/`
- Vitest for unit testing
- Zod for runtime validation
- React Router 6 SPA routing in `client/App.tsx`
- Ready for deployment to Netlify / Vercel / Static hosts

## 📁 Project Structure (simplified)
```
client/        # React SPA (pages, components, hooks, lib)
server/        # Express server (API routes)
shared/        # Shared TypeScript types/interfaces
netlify/       # Netlify serverless function example
public/        # Static assets
```

## 🔧 Scripts
| Script | Description |
| ------ | ----------- |
| `pnpm dev` | Start dev server (frontend + backend, HMR) |
| `pnpm build` | Build production assets + server bundle |
| `pnpm start` | Run production server (after build) |
| `pnpm typecheck` | Run TypeScript compiler for types only |
| `pnpm test` | Run Vitest tests |

## 🚀 Local Development
1. Install PNPM if not installed: https://pnpm.io/installation
---

Deployment: GitHub Pages via Actions — last triggered: 2025-11-12
   ```bash
   pnpm install
   ```
3. Start dev server:
   ```bash
   pnpm dev
   ```
4. Open http://localhost:8080 (or the port shown) in your browser.

## 🧪 Testing
Run unit tests:
```bash
pnpm test -- --run
```

## 🗂 API Endpoints
Example endpoints:
- `GET /api/ping`
- `GET /api/demo`
Add new endpoints under `server/routes` and register them in `server/index.ts`.

## 🧩 Adding a New Page
Create a component under `client/pages/` (e.g., `About.tsx`) and add a `<Route>` in `client/App.tsx`.

## 🔐 Environment Variables
Use a `.env` file at project root. Example values (do not commit secrets):
```
PORT=8080
```
Access with `process.env.PORT` in server code. Restart dev after changes.

## 🛠 Tech Decisions
- Vite + Express simplifies local dev with a single dev server.
- Shared types avoid drift between frontend and backend contracts.
- Tailwind + Radix = accessibility + rapid styling.

## 📦 CI
GitHub Actions workflow in `.github/workflows/ci.yml` runs install, typecheck, tests, and build. Artifacts (dist) are uploaded for inspection.

## 🌐 Deployment Options
| Platform | Notes |
| -------- | ----- |
| Netlify | Uses `netlify/functions` for serverless API (adjust build command) |
| Vercel | Configure build & output; can adapt Express via serverless wrapper |
| Static Host (GitHub Pages) | Build static assets (`dist/`). Express endpoints won't run—only SPA. |

## 📄 License
MIT - see [LICENSE](./LICENSE).

## 📘 GitHub Pages Deployment
Because this project includes an Express server, GitHub Pages can only host the static frontend (no Node server). Steps:
1. Ensure routes are SPA-friendly (already handled by client-side routing). For GitHub Pages under a repository (not user site), set the correct `base` in `vite.config.ts` if deploying to `https://<user>.github.io/<repo>/`:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: '/MyPortfolio/',
     // ... rest
   })
   ```
2. Build the static site:
   ```bash
   pnpm build
   ```
3. Publish `dist/` to `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
   (Or use `pnpm dlx gh-pages -d dist`.)
4. Enable GitHub Pages in repo settings -> Pages -> Branch: `gh-pages`.
5. Update any absolute links to use relative paths or include the base path.

Limitations: API routes (`/api/*`) and server logic will NOT run on GitHub Pages. For full-stack functionality deploy to Netlify/Vercel/Render/Fly.io.

### 🔒 Custom Domain (khalidibnfkih.dev)
If you point a custom domain at this GitHub Pages deployment:

1. Set DNS:
   - A records for apex (root) domain:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - (Optional) CNAME for `www` -> `ibnkhalid06.github.io`.
2. In GitHub repo settings -> Pages, enter `khalidibnfkih.dev` as the custom domain. Enable HTTPS (may take a few minutes to provision certificate).
3. Ensure a `CNAME` file exists in the published branch root containing exactly:
   ```
   khalidibnfkih.dev
   ```
   This repo automates it via `scripts/post-pages.cjs`.
4. Update build config:
   - In `vite.config.ts` set `base: '/'` (already done for this custom domain phase).
   - Remove repository-specific base paths.
5. Routing notes:
   - `BrowserRouter` uses `basename={import.meta.env.BASE_URL.replace(/\/$/, '')}`. When `base` is `'/'`, this evaluates to empty string so routes work at the root.
   - Deep links still resolve because a `404.html` copy of `index.html` is generated for SPA fallback.
6. Clear caches / force reload if old assets are cached (Ctrl + F5).

If you later revert to repo subpath hosting, reset `base` to `'/MyPortfolio/'` and remove the custom domain from Pages settings.

## 🧭 Future Enhancements
- Add E2E tests (Playwright / Cypress)
- Add preview deployments per PR
- Add linting (ESLint + Prettier integration) workflow

---
Feel free to open issues or PRs to suggest improvements.
