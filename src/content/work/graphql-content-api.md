---
title: The content API behind every brand site
summary: For five years I was the primary contributor to the GraphQL API that serves content to a family of brand websites, owning its search, caching, and schedule areas.
role: Primary contributor
company: Warner Bros. Discovery
year: "2021–2026"
stack: [Node.js, Apollo Server, Fastify, Elasticsearch, OpenSearch, Redis]
metrics:
  - { value: "5 yrs", label: "as primary contributor" }
  - { value: "28%", label: "of the non-test code on main" }
  - { value: "2-tier", label: "memory and Redis response cache" }
featured: true
order: 4
---

## Context

Every brand site on the publishing platform gets its content from one GraphQL API. Pages, navigation, search results, and TV schedules all come through it, so its speed and uptime are the sites' speed and uptime.

I was the top committer on its main branch, narrowly, and the author of the largest share of the code that is still there.

## What I did

**Framework.** I migrated the service from Hapi to Fastify in 2021 and to Fastify 5 in 2026.

**Caching.** I added a Redis response cache in 2024, then rebuilt it in 2026 as a two-tier cache: in-memory first, Redis second. It has targeted invalidation, a mutation for clearing entries on demand, cache metrics, and a shorter lifetime for empty and error responses so a bad answer doesn't stick around.

**Search.** I built search indexing for DC.com and site search for TCM.com on two different hosted search services.

**Schedules.** I owned the schedule data side: ingesting linear TV schedules into Elasticsearch and serving them through the API used by the HBO.com and TCM.com schedule pages. That included an alert for stale schedule feeds and a runbook for missing schedule data.

**Reliability.** I shipped a production memory-leak hotfix, hardened the response cache against floods of junk requests, and fixed consumers that exited on transient connection errors.

## After an outage

In late 2025 the API had a serious outage. Afterwards I wrote up and filed the hardening work: removing data-loader anti-patterns, moving non-production from Elasticsearch 7 to OpenSearch 3, a production-mirrored staging environment with load testing, and a fix for thread-pool exhaustion. Teammates picked up several of those, and the first ones are done.

## What I learned

Own your regressions quickly. One of my search changes for TCM broke search on another brand site. I traced it back to my own pull request and fixed it. Shared code paths between brands need tests that cover every brand, not only the one you are working on.
