# Portfolio

Personal site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and MDX. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Local dev server at `localhost:4321`      |
| `npm run build`   | Production build into `dist/`             |
| `npm run preview` | Serve the production build locally        |
| `npm run check`   | Type-check pages, components, and content |

## Make it yours

1. **`src/site.config.ts`**: name, headline, email, links, experience, skills, education. Search for `TODO`.
2. **`src/content/work/`**: one Markdown or MDX file per case study. Set `featured: true` to show it on the home page and `order` to sort.
3. **`src/content/writing/`**: one file per post. `draft: true` hides it from the published site.
4. **`src/pages/about.astro`**: your story.
5. **`src/styles/global.css`**: colors live in the `:root` block. Change `--accent` to rebrand.

The résumé page at `/resume/` is generated from `site.config.ts` and has a **Save as PDF** button with print styles.

## Deploy

1. Push this project to `main` on [github.com/mchamblin/hi](https://github.com/mchamblin/hi).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The site is served at `https://atlyeah.com` (and at `https://mchamblin.github.io/hi/` until the custom domain is set).

The workflow reads the final URL from GitHub, so changing the domain or renaming the repo works without code changes.

### Custom domain (atlyeah.com, DNS at GoDaddy)

1. In GoDaddy's DNS page for the domain, add four `A` records with name `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` record with name `www` pointing to `mchamblin.github.io`. Remove any parked-page `A` record and turn off domain forwarding.
2. In the repo's **Settings → Pages → Custom domain**, enter `atlyeah.com` and save. Leave the source as **GitHub Actions**; no `CNAME` file is needed in the repo.
3. Re-run the deploy workflow (or push) so the site is rebuilt for the new URL.
4. Once the certificate is issued, tick **Enforce HTTPS**.
