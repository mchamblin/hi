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
  - { value: "5–15 s", label: "per publish in the pre-launch pilot" }
featured: true
highlight: { value: "5–15 s", label: "per publish in the pre-launch pilot, down from ~11 min" }
order: 1
---

## Context

The company's internal publishing platform serves a family of brand sites, including HBO.com and TCM.com. Editors publish in a CMS, a rendering service turns the content into Next.js pages, and a web service serves them behind a CDN.

## The problem

Every publish rebuilt the whole brand site. On the largest site, publishing a single page recompiled all 824 pages. That took about 11 minutes, roughly 8 of them in the Next.js build, and shipped an archive of more than 200 MB to a freshly started web worker.

A typo fix could take minutes to go live, and every publish was effectively a full deploy.

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

The new path launched in production behind per-brand feature flags, and brand sites on the platform have moved onto it. In the pre-launch pilot, publishes on allowlisted routes took **5 to 15 seconds**, against about 11 minutes on the old path.

The launch was safe because of how we rolled it out. Each brand and route opted in separately, so the new path ran next to the old one and nothing had to switch over in one go.
