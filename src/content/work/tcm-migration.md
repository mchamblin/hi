---
title: Moving TCM.com onto a shared platform
summary: I was tech lead for the backend, CDN, and search work that moved TCM.com from its own legacy stack onto the company's multi-brand publishing platform.
role: Tech lead for backend, CDN, and search
company: Warner Bros. Discovery
year: "2024–2026"
stack: [CDN edge logic (VCL), AWS Lambda, Elasticsearch, GraphQL, Node.js]
metrics:
  - { value: "~220k", label: "legacy URLs covered by the redirect strategy (estimate)" }
  - { value: "~26k", label: "video redirects served from an edge dictionary" }
featured: true
highlight: { value: "~220k", label: "legacy URLs in the redirect strategy" }
order: 3
---

## Context

TCM.com ran for years on its own Drupal site and Node.js API. I had been a core developer on both since 2020, so when the company decided to move the site onto its shared publishing platform, I was named tech lead for the backend, CDN, and search work.

## The problem

A migration like this is mostly about what must not break. TCM has a deep archive: articles, a film database, monthly programming pages, and years of video clips, all with URLs that other sites and search engines link to. The site also depended on its own search setup and its own caching.

## What I did

**Redirects.** I wrote the redirect strategy, which covered an estimated 220,000 URLs across several content types. Then I implemented it: pattern-based redirects for articles, database pages, and monthly pages, and a CDN edge dictionary of about 26,000 entries for legacy video clips, with a script to load it through the CDN's API.

**CDN cutover.** I built the switchover from the legacy origin to the new platform as per-environment CDN configuration with a backend toggle, so we could cut over staging first and flip back quickly if needed.

**Search.** I wrote the approved decision record for moving TCM site search between hosted search providers and took it through security review. On the implementation side I:

- Added TCM search support to the content API.
- Rebuilt search ingestion as a streaming pipeline with per-brand transformers and hash-based change detection, so unchanged documents are skipped.
- Built a tool that copies a production search index to non-production. It works past the provider's 10,000-document export limit and refuses to write to production.

**Caching.** I took over the Lambda that purges TCM's caches on publish, fixed its landing-page purging, and rewrote its operations docs.

## Outcome

The cutover went out environment by environment, staging first, behind a toggle. The redirect layer was built to keep the archive's inbound links working, and TCM search is served through the same content API as the other brand sites.

Having worked on the legacy site made the difference here. I knew which odd URL patterns and feeds existed because I had maintained them.
