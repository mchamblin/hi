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
highlight: { value: "5 yrs", label: "as primary contributor" }
order: 4
---

## Context

Every brand site on the publishing platform gets its content from one GraphQL API. Pages, navigation, search results, and TV schedules all come through it. When the API is slow, every site is slow.

I was the top committer on its main branch and the author of the largest share of the code that is still there.

## What I did

**Framework.** I migrated the service from Hapi to Fastify in 2021 and to Fastify 5 in 2026.

**Caching.** I added a Redis response cache in 2024, then rebuilt it in 2026 as a two-tier cache: in-memory first, Redis second. It has targeted invalidation, a mutation for clearing entries on demand, cache metrics, and a shorter lifetime for empty and error responses so a bad answer doesn't stick around.

**Search.** I built search indexing for DC.com and site search for TCM.com on two different hosted search services.

**Schedules.** I owned the schedule data side: ingesting linear TV schedules into Elasticsearch and serving them through the API used by the HBO.com and TCM.com schedule pages. That included an alert for stale schedule feeds and a runbook for missing schedule data.

**Reliability.** I shipped a production memory-leak hotfix, hardened the response cache against floods of junk requests, and fixed consumers that exited on transient connection errors.

## Hardening the API

After a serious outage in late 2025, I led the hardening work that followed:

- Removed data-loader anti-patterns from the resolvers.
- Moved non-production from Elasticsearch 7 to OpenSearch 3.
- Stood up a production-mirrored staging environment with load testing.
- Fixed thread-pool exhaustion under load.

All of it is resolved.

## Outcome

The API serves every brand site on the platform, with a two-tier cache in front of it and search and schedules built in.

When a code path serves several brands, I test all of them, not just the one I’m changing.
