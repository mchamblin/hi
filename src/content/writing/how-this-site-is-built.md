---
title: How this site is built
description: Astro, Tailwind CSS, and GitHub Pages, with no JavaScript framework and no hosting bill.
date: 2026-11-13
tags: [astro, meta]
---

This site is a small static build that ships almost no JavaScript. Here is what it is made of.

## The stack

- **Astro** renders every page to plain HTML at build time. Projects and posts are Markdown files checked by a schema, so a typo in the front matter fails the build instead of the page.
- **Tailwind CSS** handles styling, driven by a handful of color and font tokens in one stylesheet.
- **View transitions** make page changes feel instant without a single-page-app framework.
- **GitHub Pages** hosts it. Every push to `main` builds and deploys through GitHub Actions.

## Why so simple

A portfolio has one job: load fast and let the work speak. Fewer moving parts means less to maintain while I am busy with the actual job search.

## Adding a post

Create a Markdown file in `src/content/writing/`, give it a title, description, and date, and push.
