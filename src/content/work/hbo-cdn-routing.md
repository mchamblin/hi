---
title: Launching HBO.com page by page
summary: I built the CDN services and routing that let HBO.com move from its legacy CMS to a new platform one page at a time.
role: CDN and routing engineer
company: WarnerMedia
year: "2021–2022"
stack: [CDN edge logic (VCL), Edge dictionaries, Terraform]
metrics:
  - { value: "4", label: "environments, dev through production" }
  - { value: "Mar 2022", label: "cutover completed" }
  - { value: "~9k", label: "redirects refreshed in a 2026 update" }
highlight: { value: "Mar 2022", label: "cutover completed" }
order: 6
---

## Context

HBO.com was moving from a legacy CMS to the company's new publishing platform. A site that size can’t switch over in one night. The plan was to move it page by page, with both systems serving the same domain for months.

## What I did

I built the CDN layer that made that possible:

- A reusable infrastructure-as-code module for a CDN service with **two backends**: the legacy CMS and the new platform.
- The HBO services for dev, QA, staging, and production.
- **Page-by-page routing** using edge dictionaries: one lookup for which backend serves a path, plus path patterns and a redirect table. Moving a page to the new platform meant changing one dictionary entry, with no deploy.

After launch I owned the routing layer: incident response, redirect fixes, and keeping the redirect tables current. In 2026 that meant refreshing about 9,000 redirect entries.

## Outcome

The cutover finished on March 30, 2022, with pages moved in batches as they were ready. I used the same staged, toggle-based approach again a few years later for the TCM.com cutover.
