---
title: Publishing a page without rebuilding the site
summary: I designed and built a publishing path where a CMS publish writes one JSON manifest instead of recompiling an entire brand website.
role: Architect and primary implementer
company: Warner Bros. Discovery
year: "2026"
stack: [Next.js, React, Node.js, Fastify, S3, Kafka, Datadog, k6]
metrics:
  - { value: "824", label: "pages recompiled for a one-page publish, before" }
  - { value: "~11 min", label: "per publish, before" }
  - { value: "5–15 s", label: "per publish in the dev pilot" }
featured: true
order: 1
---

## Context

The company's internal publishing platform serves a family of brand sites, including HBO.com and TCM.com. Editors publish in a CMS, a rendering service turns the content into Next.js pages, and a web service serves them behind a CDN.

## The problem

Every publish rebuilt the whole brand site. On the largest site, publishing a single page recompiled all 824 pages. That took about 11 minutes, roughly 8 of them in the Next.js build, and shipped an archive of more than 200 MB to a freshly started web worker.

Editors waited minutes to see a typo fix go live, and every publish carried the risk of a full deploy.

## What I did

I wrote the architecture decision record proposing a different model, and it was approved. A follow-up record for very large pages was accepted a few months later.

The design:

- On publish, the rendering service writes **one JSON manifest per route** to object storage.
- The web service renders any manifest through a **single catch-all route** and a per-brand **component registry**.
- The publish ends with a **CDN purge**, not a new web worker.

I wrote most of the publish and serve code on both sides:

- Manifest emission in the rendering service, including a slimmer schema and a manifest-only publish mode.
- A route-level gate in the web service so each brand and route opts in separately, with the legacy path untouched for everything else.
- The component registry, with CI checks that fail the build when a brand's components and manifests disagree.
- CDN cache headers for the new pages, and load tests with k6.
- Separate stages and dashboard tags for legacy and manifest publishes, so the two paths can be compared during rollout.

I also wrote the sprint plan and 15 pages of documentation: an architecture overview, data-flow pages, a guide for component authors, an on-call runbook, and an operations reference.

## Outcome

The new path shipped dark to production behind per-brand flags and was validated in the dev environment, where a pilot on allowlisted routes measured **5 to 15 seconds per publish**. As of November 2026, production enablement was rolling out brand by brand.

The lesson I took from it: the migration plan matters as much as the design. Gating by brand and by route let us ship the new path next to the old one for months without a risky switchover.
