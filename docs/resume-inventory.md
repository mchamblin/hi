# Resume Inventory — Matt Chamblin

Compiled 2026-11-13 from git history (40+ local repos), GitHub PR search, Jira (two Atlassian sites), Confluence (two sites), and personal notes. Per-repo evidence with commit hashes lives in `resume-inventory-parts/A-graphql.md` … `H-security-wb-misc.md`; the raw mining log is Appendix A at the bottom of this file.

**How to read this**
- **Role labels:** *sole owner* (only author), *architect* (wrote the approved design record), *tech lead* (named lead or drove design + breakdown + most code), *primary contributor* (top or near-top author), *feature owner* (owned specific subsystems), *contributor*, *reviewer*, *migrator*.
- **Authored vs reviewed vs present:** "built/wrote" = Matt's commits or pages; "filed/broke down" = Jira tickets he reported for others; "approved/reviewed" = named approver or PR reviewer; "present" = meeting participant or mentioned only.
- **Numbers:** only figures that appear in a source are used. Projections and dev-only measurements are labeled. No traffic or cost figures were found anywhere.
- **⚠ CONFIDENTIAL** marks details to generalize before they go on a resume (internal system names, hostnames, account IDs, vulnerability specifics, vendor contracts, incident numbers).

**Headline numbers (all sourced)**
- 2,337 GitHub PRs authored (1,778 merged), 2018-11 → 2026-11; 1,749 PRs by 56 other engineers reviewed across ~100 repos, 2017–2026.
- Jira: 350 tickets assigned, 324 reported (wbddigital, GEP/KYAC/CLOUD); pre-2022 Jira projects are not accessible.
- Confluence: 32 pages created + 13 edited (wbddigital); 15 created/edited (wbdstreaming). Across both sites: **10 decision records covering 9 decisions, 7 approved or accepted** (event bus, event-bus content feed, asset refresh, TCM search, Component Service decommission, page publishing, large manifest pages); 2 drafts (CDN migration, TCM redirects); 1 rejected and then approved on revision.
- Top or near-top committer in the core GEP repos: web (#1), GraphQL (#1 by a hair), lambdas (top two), StatusHub (#2 on main by one commit), event-bus library (#1, 45%); #1 on the TCM API (2020–2024).

## 1. Master table (newest first by start date)

| # | Project | Dates | Role | Tech | Repos | Short description |
|---|---|---|---|---|---|---|
| 1 | AI Security Agent PoC | 2026-10 – 2026-11 (Brinqa agent use from 2026-06) | Primary developer of the working PoC (only committer); not the epic owner or ADR author | TypeScript, Node.js, internal AI-agent platform, Okta M2M, Jira + GitHub APIs, Docker, Trivy, AWS | security-agent-poc, wbd-cdp-ai-acme, local prototypes | Multi-agent pipeline that dedupes, triages, drafts fixes, reviews, and verifies vulnerability tickets, stopping at human review |
| 2 | WB Portals security & ops | 2026-06 – 2026-07 | Contributor on a sister team's app | Terraform, AWS ElastiCache Redis, Elasticsearch, Docker, Lambda | wb-portals-platform | Removed Sentry, added Redis AUTH+TLS across international markets, enforced HTTPS, fixed CVEs, filed API security findings |
| 3 | Manifest-driven publishing | 2026-03 – 2026-11 | Architect (approved LADR) + primary implementer; epic owned by Rajesh Mahajan | Next.js, React, Node.js, Fastify, S3, Kafka, Fastly purge, Datadog, Docker | wme-gep-web, wme-gep-renderengine, wme-gep-statushub | Publish a page by writing a JSON manifest instead of rebuilding the whole brand site |
| 4 | Component Service GraphQL decommission | 2025-12 – 2026-07 | Architect (approved LADR) + work breakdown; teammates did most implementation | Node.js, GraphQL, S3, Drupal | component-service, theme-service, renderengine, lambdas | Retire a legacy GraphQL service by moving component metadata into ThemeService |
| 5 | Automated site refresh on theme/module pins | 2025-09 – 2026-03 | Architect (LADR rejected, revised, approved) + Render Engine job | Kafka, Node.js | renderengine, web, drupal, theme-service | Theme and module-bundle pin events trigger a site refresh through the event bus |
| 6 | Fastly → CloudFront CDN migration (design only) | 2025-08 – 2025-10 | Architect (draft LADR, workstream breakdown); not shipped | Fastly VCL, CloudFront Functions, KeyValueStore, Terraform | cdn-iac (unmerged), shared-iac | Plan to move GEP's CDN off Fastly; program cancelled |
| 7 | TCM.com → GEP migration | 2024-01 – 2026-06 | Tech lead for backend, CDN, and search pieces | Fastly VCL, Lambdas, Elasticsearch, Swiftype, Motif, GraphQL | cdn-iac, lambdas, graphql, cache-bandaid, pipeline-scripts | Moved TCM.com onto GEP: redirect strategy, CDN cutover, search migration |
| 8 | Unified Event Bus (Kafka) | 2024-02 – 2026-03 | Co-architect (co-author of approved LADR), lead implementer, top library contributor | Kafka (Confluent, KafkaJS), Node.js, S3, PrivateLink | wme-uep-unified-event-bus + 6 consuming/producing services | Replaced SQS, RabbitMQ, Redis/Bull, and SNS messaging with one Kafka event bus |
| 9 | Release engineering, CI/CD & IaC | 2021-06 – 2026-10 | Creator of pipeline-scripts; migrator; Sentry module author | Azure Pipelines, Bash, Node.js, Terraform, AWS SSM/EC2, Slack, Sentry | pipeline-scripts, shared-iac, service-template, production-release, TBS/truTV config repos | Release, ops, and observability automation |
| 10 | Schedule data pipeline & GraphQL schedule API | 2022-04 – 2026-02 | Owner of the schedule data side (not the front-end page) | Node.js Lambdas, GraphQL, Elasticsearch, Kafka | graphql, lambdas | Schedule ingestion and API behind HBO.com and TCM.com schedule pages |
| 11 | GEP GraphQL API: search, caching, reliability | 2021-05 – 2026-10 | Primary contributor; de facto owner of search, caching, schedule areas | Node.js, Apollo Server, Fastify, Elasticsearch/OpenSearch, Redis | wme-gep-graphql | Central content API for all GEP brand sites |
| 12 | StatusHub & platform audit events | 2021-05 – 2026-10 | #2 contributor on main, one commit behind #1; designer of audit-event stream | Node.js, Fastify, Socket.IO, MongoDB, React, Kafka, Datadog | statushub, UEB, lambdas, renderengine, web | Publish job-status service with a real-time audit dashboard |
| 13 | GEP web & rendering platform | 2021-05 – 2026-11 | Primary contributor (web #1; largest current-code author in Render Engine) | Node.js, Fastify, Next.js, React, Apollo Client, Docker, k6 | wme-gep-web, wme-gep-renderengine | Framework migrations, per-brand images, upgrades, observability |
| 14 | Page Alias service | 2021-10 – 2026-10 | Feature owner | Node.js, Elasticsearch, Kafka, SQS | page-alias-service | URL alias lookup for GEP content |
| 15 | Cartographer brand APIs | 2023-09 – 2026-10 | Feature owner | Node.js, Braze API, Slack | cartographer | TCM email preferences via Braze; Adult Swim episode API |
| 16 | Internationalization & variants | 2022-02 – 2024-03 | Contributor + ticket author | GraphQL, Elasticsearch mappings, Lambdas | graphql, lambdas, page-alias, wme-gep-scripts | Locale and variant support across GEP |
| 17 | HBO.com on GEP | 2021-07 – 2022-04 (redirects to 2026-08) | Builder of the HBO CDN services and routing | Fastly, VCL, edge dictionaries, Terraform | cdn-iac | Routed HBO.com page by page from the legacy CMS to GEP |
| 18 | TCM.com Drupal site | 2020-01 – 2025-06 | Core developer (#2 in window), release promoter | PHP, Drupal 8, MySQL, Akamai, Redis, memcached, Elasticsearch | tcm-www | TCM.com website |
| 19 | TCM API | 2020-04 – 2024-06 | Primary owner (#1 in window) | Node.js, Express, MySQL/Sequelize | tcm-webservices | API for TCM site and apps: schedules, VOD, partner feeds |
| 20 | TCM email preference center | 2020-02 – 2025-04 | Lead front-end developer at launch | JavaScript, Node.js; later Braze | tcm-preference-center-mcfly/-marty, cartographer | Subscriber email preference management |
| 21 | NBA League Pass storefront | 2019-03 – 2020-03 | Primary front-end contributor + release driver | Angular, TypeScript, SSR, e2e tests | nba-ng, nba-angular-dependencies | Subscription purchase storefront |
| 22 | NBA.com Drupal platform | 2016-04 – 2020-02 | Core feature developer (#6 of ~100), release duty | PHP, Drupal 8, Twig, SCSS, JavaScript | nba-drupal, nba-cloudformation-stacks | Fan engagement, tentpole events, privacy compliance |

## 2. Project details (newest first)

### 2.1 AI Security Agent PoC — 2026-10 → 2026-11
- **What and why:** Teams spent time manually connecting the same vulnerability across scanner findings, CLOUD Jira tickets, GitHub repos, and Dependabot alerts spread over many AWS accounts (Confluence "Security Agent (Ready for Review)"). The PoC runs each ticket through dedupe → triage → remediation PR → secure code review → verification, and stops at "Ready for Review" so people merge and close.
- **Role:** Primary developer of the working PoC — only committer on `warnermediacode/security-agent-poc` (5 of 5 commits, 2026-10-30 → 11-12). **Not** the ADR author or epic owner (Rajesh Mahajan; GEP-13108, GEP-13764). The Step Functions orchestration and remaining sub-agent stories are assigned to Matias Eguez (GEP-13783/13787/13788/13789). Member of the Security & Incident Response Agents tiger team (scrum participant, 2026-10/11).
- **Built:**
  - Deterministic TypeScript orchestrator (candidate queue, per-account flow) and five agent handlers (dedupe, triage, remediation, secure code review, verification), each an `agent.yaml` + `handler.ts`.
  - His own Jira and GitHub write tools with a status/label contract; a Docker + Trivy rebuild-and-scan worker; a CI drift check for agent prompts.
  - Okta machine-to-machine client wiring (GEP-13822); 3 merged config PRs in the shared agent-platform repo (wbd-cdp-ai-acme, 2026-10-19 → 11-03).
  - Synthetic test tickets (CLOUD-13681–13690, CLOUD-13700) and an end-to-end run on a test ticket.
  - Earlier AI-assisted prototypes, not in git: TypeScript + Step Functions (CDK), Python on AgentCore, a Step Functions orchestrator with an 805-line developer guide written "for the junior dev who will be working with me", and a dedupe slice.
- **Related (2026-06):** packaged a teammate's Brinqa triage agent into a repo (2 of ~96 commits; Rajesh wrote 90) and used it to remediate container CVE tickets in GEP repos (e.g. CLOUD-10150 GraphQL, CLOUD-10183 Render Engine, CLOUD-10173, CLOUD-12840 lambdas).
- **Scale:** PoC only; no production metrics. (One prototype dedupe run grouped 105 tickets into 11, but 94 link writes failed — don't cite.)
- **Evidence:** Part H §1–6; Jira GEP-13615, 13784–13786, 13790, 13792, 13822, 13863, 13972, 13578; Confluence "Security Agent (Ready for Review)", "Security Agent PoC Runbook" (edited).
- **⚠ CONFIDENTIAL:** agent-platform name, vulnerability-tool vendor names, AWS account IDs in design docs and run outputs, Okta client details. Say "internal AI agent platform" and "vulnerability management tooling".

### 2.2 WB Portals security & ops — 2026-06 → 2026-07
- **What:** Warner Bros. international portal platform, a sister team's app. Matt took it on to decommission Sentry and close security tickets.
- **Role:** Contributor — 65 commits (58 non-merge); 52 on `main` (+10,890 / −8,167 lines).
- **Built:** Sentry decommission across markets; **ElastiCache Redis AUTH + TLS** (CLOUD-8295/8492, PR #31) with a 334-line runbook he wrote alone (7 commits); HTTPS enforced on Elasticsearch; vulnerable base images fixed; Lambda runtime upgrades; runbooks.
- **Also filed** three API security findings on the portal (CLOUD-10192, -10193, -10194; fixed by teammates, Done).
- **Scale:** Redis rollout across **11 pre-production markets** ("All 11 pre-prod markets have been confirmed and fixed" — runbook) and **12 production markets** (README, rollout tables).
- **⚠ CONFIDENTIAL:** vulnerability details, AWS account IDs and market codes in the runbook.

### 2.3 Manifest-driven publishing (Page Publishing Optimization) — 2026-03 → 2026-11
- **What and why:** Every CMS publish rebuilt the whole brand site. Per Matt's LADR 0017, a one-page HBO publish recompiled **all 824 pages in about 11 minutes** (~8 min `next build`) and shipped a ~200+ MB zip. The new path writes one JSON manifest per route to S3, renders it through a single catch-all route and component registry, and purges the CDN instead of forking a new web worker.
- **Role:** Architect and primary implementer.
  - Author of **UEP-LADR 0017** (approved 2026-04-14 by Rajesh Mahajan and Robert Raheja) and **"ADR: Large manifest pages — universal pointer + cached layout asset"** (accepted 2026-09-03).
  - Epic GEP-12361 is owned by Rajesh Mahajan; Matt wrote the sprint plan (team assumed: Matt + Shon Stafford) and the revised plan (2026-07-16).
  - Git corroborates ownership: 92% of the Render Engine layout-manifest emitter; 354 of his web commits are from 2026. His transition page states he "wrote most of the manifest publish and serve code and its runbooks and change procedures".
- **Built (Render Engine):** manifest emission (GEP-12174); universal emit, slim schema 1.1, manifest-only publish (GEP-13248, GEP-12303/12304); canonical componentType (GEP-13122); publish-optimization POC (GEP-12100); ISR/App Router POC and build-performance analysis (GEP-11524).
- **Built (web):** route-level manifest gate (GEP-12323); legacy site shell for manifest pages (GEP-12303); per-brand component registry with CI gates (GEP-12301); CDN Cache-Control for ISR HTML (GEP-12299); universal pointer props and layout API (GEP-13249, PR #1807); static-asset sync in the Docker bake (GEP-12942); launch parity umbrella (GEP-13349/13334, PR #1837); k6 load tests (GEP-13145). Single-page purge (GEP-13502) is branch-only and blocked.
- **Built (observability):** StatusHub stages and Datadog tags separating legacy vs manifest publishes (StatusHub #401, #409); Datadog dashboard.
- **Docs:** 15 Confluence pages — program page, implementation guide, glossary, architecture overview, two data-flow pages, component-author dev guide, on-call runbook, ops reference, dashboard guide, ADR.
- **Scale and impact:** baseline 824 pages / ~11 min per publish (LADR). A **dev pilot measured ~5–15 s per publish** on allowlisted TCM dev routes (doc on an unmerged branch — dev only). LADR outcomes ("seconds", no zip, no worker restarts) are projections. As of 2026-11-13, production enablement for TCM (GEP-13895) and the other brands (GEP-13584) was in progress. Accurate phrasing: "shipped dark to production behind per-brand flags; validated in dev".
- **⚠ CONFIDENTIAL:** bucket names, internal hostnames, config/SSM paths.

### 2.4 Component Service GraphQL decommission — 2025-12 → 2026-07
- **What:** Retire the Component Service's GraphQL server by moving component metadata into ThemeService, removing the Drupal and Lambda dependencies on it.
- **Role:** Architect — author of **UEP Core UI LADR 015** (approved 2026-01-15, approver Robert Raheja). Broke the work into tickets: GEP-11332–11339 (Yongli Cheng, Done), GEP-11488/11489, GEP-12678 (Done). Teammates did most of the implementation.
- **Earlier hands-on work in component-service:** ported its GraphQL server from Hapi to Fastify; moved its config from keymanager to the Context service (Part E).
- **Evidence:** wbdstreaming LADR 015; Jira; Part E.

### 2.5 Automated site refresh on theme/module-bundle pins — 2025-09 → 2026-03
- **What:** When a theme or modules bundle is pinned, affected sites refresh automatically through the event bus (`asset_refresh`) instead of by manual rebuild.
- **Role:** Architect — **UEP-LADR 0013** was rejected (2025-09-26); he revised it as **0013-2**, which was approved (created 2025-10-09). Broke down the cross-service work: Drupal producer (GEP-10861, Brendan Cecere), ThemeService producer (GEP-10862, Yongli Cheng), web consumer (GEP-12034, Shon Stafford, Done). Implemented the Render Engine asset-refresh job (GEP-10863).
- **Evidence:** wbdstreaming LADRs; Jira; Part C; personal note "Automated Site Refresh — Jira Tickets".

### 2.6 Fastly → CloudFront CDN migration — design only, 2025-08 → 2025-10
- **What:** Plan to move GEP's CDN from Fastly to CloudFront.
- **Role:** Author of **UEP-LADR 0011** (draft, 2025-08-28); edited "Migrating GEP off of Fastly CDN"; broke the workstream into stories (GEP-10241, GEP-10448/10449/10453/10454/10455/10459/10460/10461 — all cancelled when the program was deprioritized); wrote a 7,859-line proposal that exists only on a local unmerged branch.
- **Shipped piece:** CloudFront static-asset cache and security headers (GEP-11303, shared-iac, 2026-01).
- **Phrase as** "designed a CDN migration plan", not "migrated".
- **⚠ CONFIDENTIAL:** the business/contract driver.

### 2.7 TCM.com → GEP migration — 2024-01 → 2026-06
- **What:** Move TCM.com off its legacy Drupal/Node stack onto GEP.
- **Role:** Tech lead for backend, CDN, and search. Named **co-tech lead (with Michael Walters)** on "TOP2 Feature Requirements [TCM]" (2024-01); mentioned in "Initiation Brief: TCM to GEP" (2025-04).
- **Redirects:** authored "UEP-LADR: TCM Redirect Strategy" (2025-05-21, draft): "~220k URLs across multiple content types". Implemented article/TCMDB redirects (KYAC-1101), "this month"/category redirects (KYAC-1562), and legacy video-clip redirects via an edge dictionary of ~26,270 entries plus a Fastly API loader script (KYAC-1556).
- **CDN cutover:** legacy → GEP switchover with per-environment VCL and a backend toggle, staging first (cdn-iac PR #223, 2025-09-08 → 11-05).
- **Search:**
  - Approver on Motif LADR 012 (2025-04-29); Motif re-ingest and TCM site search (GEP-12804/12805).
  - Author of **UEP-LADR 0014: TCM Search Migration from Motif to Swiftype** (approved; created 2025-10-23) and co-author of its security questionnaire (KYAC-1458).
  - GraphQL search support (#1409) and hotfixes (KYAC-1602).
  - Rebuilt search ingestion as streaming with per-brand transformers and hash-based change detection (GEP-10906, lambdas).
  - Swiftype prod → nonprod copy tool that works past the 10,000-document export limit and refuses writes to prod (GEP-5290).
- **Cache:** current maintainer of the TCM cache-purge Lambda — GraphQL cache clearing (KYAC-1295), landing-page purge fix (GEP-11154), Dependabot fixes, ops docs rewrite.
- **Scale:** ~220k URLs (LADR estimate); ~26,270 redirect entries (README).
- **⚠ CONFIDENTIAL:** vendor names (Fastly, Swiftype, Motif), internal hostnames, partner feed URLs.

### 2.8 Unified Event Bus (Kafka) — 2024-02 → 2026-03
- **What and why:** GEP messaging mixed SQS, RabbitMQ, Redis/Bull, and SNS "with no consistent design" (Matt's "Event Bus Phase 1 summary"). The UEB is a client library for the company's managed Confluent Kafka service plus the GEP producers and consumers that carry publish, save, bulk-update, and asset-refresh messages between Drupal, Render Engine, web, StatusHub, GraphQL, and Page Alias.
- **Role:** Co-architect and lead implementer.
- **Discovery (2024):** "WBD Event Bus Inventory" (messaging used across WBD orgs); "[WIP] Event-Driven Architecture Landscape" (2024-04 requirements matrix: Kafka vs RabbitMQ vs Bull/Redis vs SNS/SQS); "Event Bus Phase 1 summary and next steps".
- **Decisions:** **"LADR: UEP Unified Event Bus"** — APPROVED; co-authors Dennis Padilla and Matt; approvers Michael Chastain, Nick Padovani; due 2024-03-29. **"UEP-LADR 005: Event Bus Content-Feed Architecture"** — APPROVED 2024-07, five approvers.
- **Breakdown:** messages & schemas, protocols, producer API, consumer API (GEP-5712–5715, assigned to Dennis Padilla, Done).
- **Platform onboarding (cross-team):** his 3 merged PRs were the first GEP entries in the central Kafka config repo (asynchronous-messaging-solution, 2024-04 → 06): service account, dev and int environments, first topic. Filed the access and approval requests with central Cloud Engineering and Release teams (CEA-60194 … CEA-63009, RDE-15258); created the GitHub team; listed as GEP contact in the platform team's service-account inventory.
- **Library:** #1 contributor on `wme-uep-unified-event-bus` (25 of 56 non-merge commits, 45%; next 20). Audit-event method that never blocks the main flow and skips auditing audit events (GEP-8657); fixed consumers exiting on transient connection errors (GEP-11411, v5.0.2/5.0.3); fixed `UNKNOWN_MEMBER_ID` behind **7–8 minute consumer connection delays** (GEP-11862, v5.0.4).
- **Migration across services:**
  - Four ingestion Lambdas moved from SQS to Kafka with dual-run flags, batching, rate limits, and Datadog metrics; content-feed Lambda production launch on the bus (GEP-7073).
  - GraphQL content-feed consumer, then removal of the old SQS code (−1,709 lines).
  - Page Alias Kafka consumer behind a flag (GEP-7003); StatusHub consumer with a switch from the Redis queue (GEP-7520, GEP-6138).
  - Web and Render Engine integration (rolled back twice, then re-landed).
  - 2026 duplicate-message fix: builds ran inside the Kafka message handler and outlasted the 45-second session timeout (one HBO build measured 10m47s), so the consumer was ejected and messages were consumed twice. Fixed with job dedup plus session and rebalance timeout tuning (GEP-11862; root cause from a branch-only doc).
- **Close-out:** RabbitMQ broker decommissioned in all environments (GEP-11816, filed by Matt, done by Yongli Cheng, 2026-02).
- **Docs:** Migration Plan (dual-write, then consumer migration), How to Use Kafka Locally.
- **Scale:** the library is a dependency of 7 service repos plus 6 Lambda services (`package.json` scan); one shared topic with filter-based routing; eight publish-path operations. Matt cut most releases after 4.0.32 (4.0.33 → 5.0.4).
- **⚠ CONFIDENTIAL:** broker hostnames (library README), topic and service-account names.

### 2.9 Release engineering, CI/CD & IaC — 2021-06 → 2026-10
- **Pipeline scripts:** created `wme-gep-pipeline-scripts` (first commit 2021-10-14; #4 on `main`, 74 of 715 commits).
  - Release-candidate tagging across repos with build polling and Slack summaries (GEP-4857, 2023; prototyped in scratch repo `test-chamblin`).
  - Per-deploy Slack notifications in the prod release pipeline and Cartographer added to the production release (GEP-5100, production-release #58–#60).
  - Weekly Elasticsearch dedupe: AWS SSM Run Command document plus a temporary Terraform-built EC2 instance (GEP-4468).
  - Dead-link scanner whose scheduler fans out one pipeline run per brand and environment (GEP-5186).
- **Migrations:** Azure Pipelines for TBS, truTV, Highlander, and web-video config builds (18 PRs, WMEEPP-693/696/697/699/700/702, 2021-06/07); Terraform 0.14 upgrade of shared IaC (WMEEPP-572, 2021-06).
- **tcm-configs (2021-05 → 2022-04):** created the repo and its Azure Pipelines → S3 publishing for 5 TV and mobile platforms.
- **Observability:** shared Sentry Terraform module rolled out to 12 repos in one week (GEP-5177, 2024-01-18 → 01-25, per PR titles); filed the follow-ups (GEP-5389–5392, GEP-5595).
- **Process:** filed the Production Release Improvements epic (GEP-7476, 2024-10) after a deployment-failure CoE (GEP-7477): error-page efficiency spike (Done), load tests, health checks, CDN cache-hit alerts, scaling runbooks.
- **Tools he built:** `hub-pull-request` (2018 → 2026, sole author; personal PR CLI); `gep-datastore-proxy-cli` (2025-10-22, sole author, production-safety guardrails), built nine days after a 2025-10-13 incident in which production search data was deleted through a misrouted proxy (CoE #2729683; ⚠ CONFIDENTIAL).
- **Numbers:** none measured. The "3x faster, 60% cheaper" figure is a projection in an unmerged POC README.

### 2.10 Schedule data pipeline & GraphQL schedule API (HBO.com, TCM.com) — 2022-04 → 2026-02
- **What:** Ingest linear TV schedules from an internal scheduling system into Elasticsearch and serve them through the GraphQL schedule API used by the HBO.com and TCM.com schedule pages and the HBO homepage schedule ribbon.
- **Role:** Owner of the backend schedule data. No evidence that he built the front-end schedule page.
- **Built:**
  - 2022, during the HBO-on-GEP launch: schedule feed queries (WMEEPP-1966/1967/1968; GraphQL #551, #555, #565, #566).
  - API features: feeds, filters, publish toggle, brand scoping, event-bus ingestion.
  - Ingestion extended with new scheduling-system fields (GEP-6068; GraphQL #976–979, lambdas #744/745); ScheduleEntry fields to move TCM off its own database (GEP-6528); TCM US-west feed derived from East (GEP-5750); DVS flag (GEP-5990).
  - Fixes: title/schedule ID collision (GEP-5927), cross-brand contamination (GEP-7526), schedule-ribbon 500s (GEP-7223), HBO.com display gaps from programs missing title IDs with ingestion fallbacks (GEP-11160), TCM episode images (KYAC-1587/1602).
  - Ops: Datadog schedule-feed alert (GEP-7166); Confluence runbook "Missing Schedule Data" (2024-08).
- **Before GEP:** TCM API schedule endpoints and the "What's On Now" feed (2.19).
- **⚠ CONFIDENTIAL:** the scheduling system's internal name ("Time Machine").

### 2.11 GEP GraphQL API — search, caching, reliability — 2021-05 → 2026-10
- **Role:** Primary contributor — #1 on the default branch by a hair (523 non-merge commits vs 520 and 498); 1,077 non-merge commits overall (~440–470 distinct after cherry-pick dedup); 168 of his own PRs; top author of surviving code (28% of non-test and 37% of test JS on `main`). De facto owner of search, caching, and schedule areas (inferred).
- **Built:**
  - Framework: Hapi → Fastify (2021); Fastify 5 (2026).
  - Search: DC.com Swiftype indexing (2022); TCM search on Motif (2025) and Swiftype (#1409, 2025–26); DC search fix and image cuts (GEP-11875) — the regression came from his own #1409.
  - Caching: Redis response cache (2024), then a two-tier memory + Redis cache with targeted invalidation, a `clearCache` mutation, cache metrics, and a shorter-TTL policy for empty/error responses (GEP-11623, 2026).
  - Reliability: production memory-leak hotfix (GEP-11992, 2026-03); mitigation for a response cache poisoned by a vulnerability-scanner flood (GEP-11843); event-bus connection hardening (GEP-11411).
  - CVE and Dependabot remediation, 2024–2026 (e.g. CLOUD-10150).
- **Post-incident hardening:** after a 2025-12 P1 outage caused by another engineer's hotfix, filed GEP-11236 DataLoader anti-patterns (done by Shon Stafford), GEP-11237 Elasticsearch 7 → OpenSearch 3 nonprod (Done), GEP-11235/11253 production-mirrored staging and load testing, GEP-11307 thread-pool exhaustion; owned GEP-11300 (AI code review in GitHub). OpenSearch client migration POC (2026-03) is unmerged.
- **Not shipped:** the Dec-2025 performance branches (e.g. "61 → 2 queries per request" is a proposal).
- **⚠ CONFIDENTIAL:** search hostnames, incident numbers.

### 2.12 StatusHub & platform audit events — 2021-05 → 2026-10
- **StatusHub** is GEP's publish and deploy job-status API and UI. **Role:** #2 contributor on `main`, one commit behind #1 (71 of 468 vs 72); wrote most of the README and all of `AGENTS.md`.
- **Built:** Hapi → Fastify migration (WMEEPP-1222); event-bus consumer with a switch from the Redis queue (GEP-7520, GEP-6138); **real-time audit dashboard** — Socket.IO, MongoDB, React (PR #307, +4,540 lines, 2025-03); Datadog tags for legacy vs manifest publishes (#401, #409); Publish Queue Dashboard (GEP-8764, Done).
- **Audit events (GEP-8657, 2025)** end to end: event-bus library audit method, render-Lambda audit client (100% his current code), Render Engine and web audit producers with backpressure handling, and the StatusHub dashboard.
- **Unpushed:** an audit-retention fix.

### 2.13 GEP web & rendering platform (outside the manifest program) — 2021-05 → 2026-11
- **wme-gep-web** (Fastify + Next.js service that serves the GEP brand sites): #1 committer (456 of 2,654 non-merge commits; also #1 on the default branch, 188 vs 143); ~77% of current lines on `main` by blame; effectively tech lead 2024–2026 (inferred).
- **wme-gep-renderengine** (CMS JSON → Next.js page bundles): #2 by commits (276 of 3,796) but the largest author of current code (29%).
- **Built:** web Hapi → Fastify (2022) and Fastify 3 → 5 (2026); Render Engine Hapi → Fastify; Apollo Client migration (WMEEPP-2215, 2022); per-brand baked Docker images with release manifests; Next.js version management (GEP-13750, GEP-13799); fix so release-candidate images retagged to prod stop reading staging config (GEP-13569); brand module resolution (GEP-13594); Datadog metrics and dashboards; k6 load tests; CVE work (Next.js 14.2.25 patch, CLOUD-10183, scanner fixes GEP-11787); bulk-update render fix.
- **Don't use unverified:** "TCM dev cold start ~2m13s → ~40s" appears only in his commit message `a3fde1a2` on a feature branch; no equivalent change found on `main`.
- **AI-assisted development:** 315 of his web commits are co-authored with Cursor; pinned an agent-standards framework (GEP-13541).

### 2.14 Page Alias service — 2021-10 → 2026-10
- **Role:** Feature owner (#4, 75 commits).
- **Built:** Kafka consumer replacing SQS behind a flag (GEP-7003); batch id → path API capped at 500 IDs per request (verified in the route schema); variant/language support (GEP-5908 era); cleanup tooling (branch-only) that found 309 corrupted records out of 19,383 TCM aliases.
- **Incidents:** mentioned in the 2023-09 "Page Aliases Empty" CoE (role not determined).

### 2.15 Cartographer brand APIs — 2023-09 → 2026-10
- **Role:** Feature owner (#5, 65 commits).
- **Built:** moved the TCM email preference center backend to Braze and collapsed it into one call, removing a race condition; Adult Swim episode API with Slack alerts on 404s. Filed AS alerting and retry follow-ups (GEP-5781, GEP-6633, GEP-6772).
- **⚠ CONFIDENTIAL:** subscriber email handling (PII); vendor name.

### 2.16 Internationalization & variants — 2022-02 → 2024-03
- **Role:** Contributor and ticket author (moderate evidence).
- **Evidence:** personal design notes "GEP International Backend" (2022-02) and localization notes (2022-04). Filed GEP-3745 (schema refactor), GEP-4462/4475 (locale script, Shon Stafford), GEP-4741 (geotargeting incident), and GEP-5908/5913/5921 (variants, language, offerings across Page Alias, the GraphQL index mapping, and Lambdas; Done). Locale "black box" POC (GEP-3582, wme-gep-scripts, unmerged). Participant in the "I18n Capability 1" demo (2023-12).

### 2.17 HBO.com on GEP (CDN + routing) — 2021-07 → 2022-04 (redirect upkeep to 2026-08)
- **Role:** Built the double-backend CDN module and the HBO Fastly services (dev, qa, staging, prod) for HBO's GEP launch; #2 committer on cdn-iac (105 commits, 17.5%).
- **Built:** page-by-page routing between the legacy CMS (AEM) and GEP via edge dictionaries (backend lookup + path patterns) and a redirect table; cutover completed 2022-03-30 (personal note; cdn-iac #49 "hbo page launch 3 31 22"); incident-driven redirect fixes and a redirect-loop fix (GEP-5219); HBO → HBO Max redirect refresh of ~9k entries (GEP-13149, 2026-08); Adult Swim edge fixes (GEP-4881, 2023–24). Earlier ticket: WMEEPP-725/984 "HBO on GEP via Fastly" (2021). A teammate bulk-loaded the 5,211-key HBO redirect dictionary.
- **⚠ CONFIDENTIAL:** origin-auth header names, AWS account IDs in IaC, a historical logging token in IaC history.

### 2.18 TCM.com Drupal site (tcm-www) — 2020-01 → 2025-06
- **Role:** Core Drupal 8/PHP developer (#2 by commits in his window: 576 of 2,666); promoted releases through qa, staging, and prod; peers merged 181 of his PRs.
- **Built:** Akamai purge with Drupal cache-tag invalidation; added a Redis layer (2020) and later removed it, including its Terraform (2023); schema.org schedule markup; DVS schedule page; WatchTCM carousel scheduler with S3 uploads; This Month/Archives article module; admin SSO lockdown; memcached; Elasticsearch autocomplete ranking.
- **Don't claim:** the Drupal 8.9 upgrade (reverted; prod stayed on 8.7.4). Some 2024–25 work exists only on develop/feature branches.

### 2.19 TCM API (tcm-webservices) — 2020-04 → 2024-06
- **Role:** Primary owner (#1 in his window: 408 non-merge commits vs 242 and 191).
- **Built:**
  - **SQL-injection remediation:** parameterized queries and input validation across 32 API routes (e.g. `5cb9901d`, `29d8d070`, 2021-03).
  - **Bearer-token auth middleware** on 51 write routes (e.g. `9a23e00a`, 2022-07).
  - Rewrote the live "What's On Now" feed with gap fillers; schedule-ingestion endpoints (called by the TCM linear-schedule Step Functions workflow — he has 0 commits in that repo).
  - VOD ingest cron with a database lock so only one server runs it; live-stream outage hotfix (INC01803785, 2023-09, `e759334b`); Roku search feed v1 (XML) and 2.0 (JSON); removed New Relic (#678).
- **⚠ CONFIDENTIAL:** SQLi specifics, partner feed URLs, incident number.

### 2.20 TCM email preference center — 2020-02 → 2025-04
- **mcfly:** lead front-end developer for the launch (#1 committer, 71 non-merge commits). **marty:** environment config, and removed private keys that had been committed to the repo. The backend later moved to Braze through Cartographer (2.15).

### 2.21 NBA League Pass storefront (nba-ng) — 2019-03 → 2020-03
- **Source:** 185 authored PRs (142 merged), titles only; repo not cloned.
- **Role:** Primary front-end contributor and release driver.
- **Built:** global nav; purchase confirmation page; Branch deep linking; League Pass ↔ Team Pass switching flow with e2e tests; manage-subscriptions; sales sheet (one-time and team-pass purchase, SEO, configurable header, compare-features config, holiday pricing grid); edge blackout notice; Ensighten analytics and a Lighthouse-driven performance refactor; Adobe Analytics; single-game pages moved to SSR; add-on cards; "do not honor" payment-error handling; CODEOWNERS; coverage threshold raised to 94% (#873); release promotion INT → QA → MASTER and production deploys 8.5.18–8.5.41. In nba-angular-dependencies: Slick carousel replacement (NBADE-965).
- **⚠ CONFIDENTIAL:** vendor names, pricing.

### 2.22 NBA.com Drupal platform — 2016-04 → 2020-02
- **Role:** Core feature developer (#6 of ~100; 854 non-merge commits, 5.9% in his window); regular release duty (88 version-bump/deploy commits; merged 43 others' PRs). Front-end heavy: ~86% of lines added were SCSS/CSS/JS/Twig, ~8% PHP.
- **Built:**
  - Fan votes and sweepstakes: Kia MVP vote, Rising Stars polls, admin config (#1 on the module: 91 of 205 commits).
  - Tentpole events: All-Star, Playoffs, Draft, Summer League, Africa Game. Playoffs 2018 schedule with server-side fetch and editor-set cache timing; Summer League 2017/2018 schedule, scores, standings, stats.
  - **HTTPS migration** (2018-08: ~21 commits, 154 files, plus environment settings in CloudFormation params).
  - Privacy compliance: GDPR consent, CCPA "Do Not Sell", current-password requirement for password/email changes.
  - Config JSON module (2019); lazy-loaded ads; HTML5 player default; custom 404 with archive link; NBA TV VOD hub (2019); League Pass purchase modal and pricing; single-game purchases moved to the new SSR storefront.
  - Modules created: Summer League, League Pass, collections, scores page, international league, polls bundle, Config JSON.
- **nba-cloudformation-stacks (2018):** 15 one-line environment-config edits; no template work.
- **Don't claim:** the Drupalgeddon patch (a colleague's).
- **⚠ CONFIDENTIAL:** AWS account IDs, internal hostnames, a default login in the README, partner and pricing data.

## 3. Leadership, design, and cross-team work (across projects)

**Decision records authored** (Confluence; "LADR" = the architecture team's decision-record format)

| Record | Site | Date | Status |
|---|---|---|---|
| LADR: UEP Unified Event Bus (co-author with Dennis Padilla) | wbddigital | 2024-03 | Approved |
| UEP-LADR 005: Event Bus Content-Feed Architecture | wbdstreaming | 2024-07 | Approved (5 approvers) |
| UEP-LADR: TCM Redirect Strategy | wbddigital | 2025-05-21 | Draft |
| UEP-LADR 0011: Fastly-CloudFront CDN Migration | wbdstreaming | 2025-08-28 | Draft |
| UEP-LADR 0013: Automated Site Refresh | wbdstreaming | 2025-09 | Rejected 2025-09-26 |
| UEP-LADR 0013-2 (revision) | wbdstreaming | 2025-10-09 | Approved |
| UEP-LADR 0014: TCM Search Migration, Motif → Swiftype | wbdstreaming | 2025-10-23 | Approved |
| UEP Core UI LADR 015: Component Service GraphQL Decommission | wbdstreaming | 2025-12-18 | Approved 2026-01-15 |
| UEP-LADR 0017: Page Publishing Optimization | wbdstreaming | 2026-04-02 | Approved 2026-04-14 |
| ADR: Large manifest pages — universal pointer + cached layout asset | wbddigital | 2026-09-03 | Accepted |

**Reviewing and approving**
- Reviewed 1,749 PRs by 56 engineers across ~100 repos (2017–2026; peak 365 in 2022). Most in GEP GraphQL (268), tcm-www (136), lambdas (131). This is a count from GitHub's reviewed-by search; review depth was not measured.
- Cross-brand reviews 2023–2026: Cartoon Network, TNT/TBS, Adult Swim, WB Portals (15), shared Drupal core (16), AVS replacement CMS (15).
- Approver on another team's decision record: Motif LADR 012 (2025-04-29).

**Planning and work breakdown**
- 324 Jira tickets reported (2023-05 → 2026-11), mostly work breakdowns for teammates (event bus, asset refresh, Component Service decommission, CDN migration, manifest program).
- Epics he filed and owns: GEP-7476 Production Release Improvements (2024-10, Done; after deployment-failure CoE GEP-7477) and GEP-8879 backend test coverage (2025-02; stories for Render Engine, Lambdas, Cartographer, Context, GraphQL).
- Sprint plan and revised plan for the manifest program (2026).

**Named lead and coverage roles**
- Co-tech lead with Michael Walters on "TOP2 Feature Requirements [TCM]" (2024-01).
- Security & Incident Response Agents tiger team (2026-10/11), with standup action items assigned to him.
- Named in Robert Raheja's parental-leave coverage plan (2026-09). What he covered was not read — check before claiming "acting lead".
- GEP release notes: author of 26.2.1; listed contributor on 26.1.4, 26.1.5, 26.3.2, 26.3.7, 26.4.1 (2026).

**Incident response and on-call**
- CoE reports authored: DC.com production deployment incident (2024-09-24); T-Nets microsites 5xx (2025-05-16); TCM live simulcast unavailable (2023-09), for which he shipped the TCM API fix (`e759334b`).
- CoE reports assigned (auto-created on-call ownership): GEP published-web 5xx anomaly (COER-9686, 2025-07, Completed); Cartoon video-data service with no running prod containers (COER-9946, 2025-09, Completed); TCM.com TV-provider sign-in broken (COER-14085, 2026-10, Completed; hotfix GEP-13595); two others cancelled.
- Mentioned (role not determined) in CoEs for HBO 404 errors (2023-09), Page Aliases empty (2023-09), and GEP Elasticsearch missing data (2025-10).
- Live-event support: March Madness Live 2026 event report (TBS, TNT, truTV).
- Post-incident follow-up: GraphQL hardening tickets after the 2025-12 outage (2.11); release-improvement epic after a deployment failure.

**Documentation and enablement**
- Runbooks: Missing Schedule Data (2024-08), TCM AWS Alerts (2024-08), TCM Deployment Instructions (2024-07), ODT/ODS Event Consumer run book (2026-03), WB Portals Redis AUTH/TLS (2026), Security Agent PoC (2026-11), manifest on-call runbook and ops reference (2026).
- Process guides: UEP Sprint Maintenance (sprint release rotation), Deploy: Staging, Reset QA & Dev with mainline code and production data.
- Developer guides: How to Use Kafka Locally; local Kafka connectivity section in the event-bus README; Manifest Layout Components Dev Guide for component authors.

**Mentoring and hiring**
- 805-line developer guide written for a junior developer joining the security-agent work (2026; local file, not in git).
- Interview question template (2022-09): evidence that he interviewed candidates; number of interviews unknown.

**Cross-team platform work**
- First GEP onboarding to the company's central Kafka platform: config-repo PRs, access requests to central Cloud Engineering and Release teams, GitHub team creation; listed as the GEP contact in the platform team's service-account inventory.
- Co-author of the TCM search vendor security questionnaire (KYAC-1458).
- Security findings filed against a sister team's app (WB Portals, 2026).
- Config PRs to the shared AI-agent platform repo (2026).

## 4. Cross-cutting skills (approximate years, from dated evidence)

| Skill | Approx. years | Evidence span | Supporting projects (§2) |
|---|---|---|---|
| Node.js / JavaScript backend services | ~6.5 | 2020-04 → 2026-11 | 2.19, 2.11, 2.13, 2.8, 2.12, 2.14, 2.15 |
| GraphQL (Apollo Server and Client) | ~5.5 | 2021-05 → 2026-10 | 2.11, 2.10, 2.4, 2.13 |
| Drupal / PHP | ~9 (front-end heavy at NBA) | 2016-04 → 2025-06; CMS fixes to 2026 | 2.22, 2.18, DC migrations (§5) |
| Front end: Angular/TypeScript, SCSS, Twig, JS | ~4 | 2016-04 → 2020-03 | 2.21, 2.22, 2.20 |
| Next.js / React server rendering | ~5.5 | 2021-05 → 2026-11 | 2.13, 2.3, 2.12 (React UI) |
| Event-driven architecture on Kafka | ~2.5 | 2024-02 → 2026-08 | 2.8, 2.5, 2.12, 2.3 |
| Queues: SQS, RabbitMQ, Redis/Bull | ~5 | 2021 → 2026 | 2.8, 2.14, §5 (compressed SQS messages) |
| Search: Elasticsearch/OpenSearch, Swiftype, Motif | ~5.5 | 2021 → 2026 (also TCM Drupal) | 2.11, 2.7, 2.10, 2.18 |
| Caching and CDN: Redis, memcached, Akamai, Fastly VCL, CloudFront | ~6.5 | 2020 → 2026 | 2.18, 2.17, 2.7, 2.11, 2.6, 2.3 |
| AWS: Lambda, S3, SQS, SSM, EC2, ElastiCache, CloudFront | ~5.5 (light use from 2018) | 2018 → 2026 | 2.9, 2.8, 2.2, 2.10, 2.6 |
| Terraform / infrastructure as code | ~5 | 2021-05 → 2026-07 | 2.9, 2.17, 2.2, 2.18 |
| CI/CD: Azure Pipelines, Docker images, release automation | ~5.5 | 2021-06 → 2026-10 | 2.9, 2.13; release promotion in 2.21/2.22 |
| Observability: Datadog, Sentry, status dashboards | ~3 | 2024-01 → 2026-11 | 2.9, 2.12, 2.3, 2.10 |
| Application security and vulnerability remediation | intermittent, 2018 → 2026 | GDPR/CCPA 2018–19, SQLi 2021, auth 2022, CVEs 2024–26, Redis TLS 2026 | 2.22, 2.19, 2.2, 2.1, 2.11 |
| Databases: MySQL (Sequelize), MongoDB | MySQL ~4; MongoDB ~2 | 2020–2024; 2024–2026 | 2.19, 2.18; 2.12 |
| Architecture decision records and technical writing | ~2.75 | 2024-03 → 2026-11 | §3 |
| AI-assisted engineering and LLM agents | ~1 | 2025-11 → 2026-11 | 2.1, 2.13, AI log-analyzer POC (§5) |
| Testing: Jest, e2e, k6 load tests, coverage gates | intermittent, 2019 → 2026 | NBA 94% coverage gate 2019; coverage epic 2025; k6 2026 | 2.21, 2.3, §3 |

## 5. Smaller contributions (authored unless noted)

- **Food Network hackathon GraphQL API** (2024-05): created the repo from the service template, stood up the Apollo server and container; #1 of 4 by commits (15). Three commits are titled "rajesh updates", so some of it may be pair work.
- **DC.com → GEP content migrations** (2022-10 → 12): Drupal Migrate pipelines from the legacy DC.com API (images → S3 → media → content) for DC Talent and DC Movies (WMEEPP-3156/3158), plus comic-book `bookType` (WMEEPP-3570). Overall an occasional CMS contributor (~#33 of 87 authors).
- **CMS fixes:** component sync reads compressed SQS messages (GEP-9319, 2025-04); PHP/SAML CVE remediation with two follow-up hotfixes (CLOUD-10180, 2026-07); single-content CDN purge on publish and unpublish (GEP-13502, local branch only).
- **node-sass → sass** across 13 brand theme repos in five days (WMEEPP-4545, 2023-06).
- **ThemeService:** publish themes to npm (WMEEPP-3677/3679, 2023); timeouts and retries for Context-service calls (2024-11); Dependabot releases (2026-10).
- **Context Service:** Sentry IaC; deep-linked admin UI routes and Okta post-login redirect (GEP-11985); CVE fixes.
- **Security audit fixes** across StatusHub, Context, Cartographer, and scripts (GEP-5079/5080/5083/5179, 2023-11); Node 22 LTS upgrades (GEP-7729, GEP-8352).
- **TNT/TBS video player:** analytics config change and dependency bump (GEP-9477, 2025-06).
- **Org tooling:** GitHub team for the Kafka config (2024-04, merged by automation); AWS key rotation in a legacy Bitbucket Terraform repo (GEP-6462, 2024-07); a gimme-aws-creds fix with a unit test (2025-12, local only).
- **Prototypes outside git:** UEB event-stream dashboard (Kafka → MongoDB → WebSocket, 2024-12); Kafka schema-registry POC (2024-04/05); Swiftype site-search indexing POC for DC (2022-09); AI CloudWatch log analyzer using a local LLM (2025-11); hybrid manifest web-server POC (2026-04/05); json-render (Drupal Canvas) rendering POC (2026-11-12; its 13–35 ms figure is a local warm-cache measurement).
- **Scratch and personal:** 404 crawler for the HBO site (2023-10, personal repo); `test-chamblin` (GEP-4857 pipeline prototype); a feelings/needs web app (2024, vanilla JS plus a React port); two empty Gatsby starters.

## 6. Gaps and uncertainties

- **Before 2016-04:** the earliest evidence found is nba-drupal (2016-04). If your WBD tenure starts around 2014, that period has no repo, PR, or ticket evidence in anything I could reach.
- **Pre-2022 Jira** (DRUTCM, WMEEPP, NBADE, TCMAPP) is not on the accessible Jira sites, so NBA and early TCM/GEP work rests on git history and PR titles only. nba-ng was never cloned, so it is titles only.
- **No traffic, revenue, latency, or cost figures** appear in any source. Scale is expressed as counts (pages, URLs, markets, services, tickets).
- **Not on main / not shipped:** CloudFront proposal, GEP-13502 purge, GraphQL performance branches, StatusHub audit-retention fix, gimme-aws-creds fix, the cold-start commit.
- **Manifest program:** production rollout was still in progress at compile time (2.3).
- **Titles:** the only documented lead title is TOP2 co-tech lead. Other "lead" roles are inferred from code share, ticket breakdowns, and decision records; no HR data was available.
- **Mentions without a determined role:** the 2023 HBO 404 and Page Aliases CoEs, the 2025-10 Elasticsearch data-loss CoE, and the 2026-09 leave coverage plan.
- **Security-agent prototypes outside git** are dated from file timestamps and chat transcripts.
- **Interviewing:** one template; the number of interviews is unknown.

## 7. Confidential flags — generalize before use

- **Internal names:** GEP, UEB, StatusHub, Cartographer, ThemeService, Context service, "Time Machine", the internal AI-agent platform. Prefer "internal multi-brand publishing platform", "company Kafka event bus", "job-status service".
- **Incident and vulnerability detail:** INC/COER/CoE numbers; SQL injection, auth-bypass, data-exposure, and cache-poisoning specifics; CVE IDs tied to company systems. Say "remediated injection and authorization vulnerabilities" without system names.
- **Infrastructure identifiers:** hostnames, bucket names, AWS account IDs, Kafka topic and consumer-group names, Okta clients, config paths, market codes.
- **Business context:** the contract reason behind the CDN migration; vendor relationships (Fastly, Akamai, Swiftype, Motif, Braze, Brinqa, Wiz, Mux, Branch, Ensighten, OptinMonster). Naming the technologies is usually fine.
- **Personal/HR pages:** the transition-plan page and the parental-leave coverage plan. Use them as evidence; don't cite them.
- **Credentials found in files** (values were never read): see the rotation list in the chat summary. Don't copy any of these files into resume material.

## 8. Do-not-claim list

- Designing or owning the security-automation epic or ADR (Rajesh Mahajan), or building its Step Functions orchestration (Matias Eguez).
- The TCM linear-schedule Step Functions project (0 commits; his 2023 refactor was never committed).
- Building the HBO.com schedule front-end page (he owned the data and API).
- The NBA Drupalgeddon patch (a colleague's) and the TCM Drupal 8.9 upgrade (reverted).
- "Sole/primary owner of the GEP Lambdas" — say "top-two contributor".
- Manifest publishing "in seconds in production", "no zip per publish", "no worker restarts" as results — these are LADR projections; 5–15 s is a dev pilot.
- "Cold start 2m13s → 40s"; "61 → 2 queries per request"; "3x faster, 60% cheaper"; the 105 → 11 dedupe run.
- "Migrated GEP to CloudFront" (designed only).
- Authoring the Brinqa agent (2 of ~96 commits) or committing to `warnerbros/agents` (0 commits; his `/security-agent` plugin is uncommitted local work).
- "Upgraded SimpleSAMLphp to 4.20.3" (the lock file reports that version while installing compatible older sources) — say "resolved a dependency/scanner conflict".

## Appendix B — per-repo evidence files

Commit hashes, PR numbers, rank calculations, and per-repo confidential flags:
[A — GraphQL](resume-inventory-parts/A-graphql.md) · [B — Lambdas & IaC](resume-inventory-parts/B-lambdas-iac.md) · [C — Web & Render Engine](resume-inventory-parts/C-web-renderengine.md) · [D — Pipelines, StatusHub, tooling](resume-inventory-parts/D-pipeline-statushub-tooling.md) · [E — GEP services](resume-inventory-parts/E-gep-services.md) · [F — TCM](resume-inventory-parts/F-tcm.md) · [G — NBA](resume-inventory-parts/G-nba.md) · [H — Security, WB, misc](resume-inventory-parts/H-security-wb-misc.md)

---

# Appendix A — Evidence log (working record from mining; all sources complete as of 2026-11-13)

Identity regex used for git attribution: `chamblin` (case-insensitive), which matches:
- `mchamblin <matthew.chamblin@wbd.com>` (current machine identity)
- `Matt Chamblin <31355195+mchamblin-turner@users.noreply.github.com>` (GitHub web UI merges/squashes)
- `Matt Chamblin <matthew.chamblin@turner.com>` (Turner era)
- `Matt Chamblin <matthew.chamblin@warnermedia.com>` (WarnerMedia era)
- `mchamblin-turner <matthew.chamblin@wbd.com>`

## Repo checklist (git stats, all branches)

Columns: my commits (all) / my non-merge commits / my first–last commit / repo first–last commit / remote.
"Mine (all)" includes merge commits, which may be me merging other people's PRs.

### GEP platform (warnermediacode org)
| Repo | Mine | Non-merge | My dates | Repo dates | Total | Mined? |
|---|---|---|---|---|---|---|
| wme-gep-graphql | 1692 | 1077 | 2021-05-25 – 2026-10-09 | 2020-12 – 2026-11 | 11435 | [x] Part A (verified: #1 on default branch by a hair, 523 vs 520 vs 498; ~440–470 distinct changes after cherry-pick dedup) |
| wme-gep-lambdas | 660 | 395 | 2021-07-29 – 2026-10-23 | 2020-12 – 2026-11 | 3791 | [x] Part B (verified rank: #1 across all branches by distinct patches, 364 vs 268; #2 on default branch, 200 vs 228 — say "top-two contributor") |
| wme-gep-web | 641 | 456 | 2021-05-25 – 2026-11-13 | 2020-12 – 2026-11 | 4358 | [x] Part C (verified: #1 on default branch too, 188 vs 143. Caveat: "cold start ~2m13s → ~40s" is from commit `a3fde1a2` message, TCM dev, on feature branch GEP-12877 only — no equivalent patch found on main) |
| wme-gep-renderengine | 403 | 276 | 2021-05-25 – 2026-11-12 | 2020-12 – 2026-11 | 6381 | [x] Part C |
| wme-gep-pipeline-scripts | 279 | 268 | 2021-10-14 – 2026-10-02 | 2021-10 – 2026-11 | 1378 | [x] Part D |
| wme-gep-statushub (+ statushub2 clone) | 196 | 117 | 2021-05-25 – 2026-10-16 | 2020-12 – 2026-11 | 1518 | [x] Part D |
| wme-gep-cdn-iac | 165 | 106 | 2021-07-14 – 2026-08-24 | 2021-05 – 2026-09 | 864 | [x] Part B |
| wme-gep-page-alias-service | 102 | 75 | 2021-10-07 – 2026-10-08 | 2021-07 – 2026-10 | 1224 | [x] Part E |
| wme-gep-component-service | 101 | 64 | 2021-05-25 – 2026-07-30 | 2020-12 – 2026-10 | 4288 | [x] Part E |
| wme-gep-cartographer | 93 | 65 | 2023-09-07 – 2026-10-09 | 2022-10 – 2026-10 | 1327 | [x] Part E |
| wme-gep-drupal | 64 | 37 | 2021-05-25 – 2026-10-09 | 2020-12 – 2026-10 | 9277 | [x] Part E |
| wme-uep-unified-event-bus | 33 | 25 | 2024-08-27 – 2026-03-04 | 2024-05 – 2026-03 | 72 | [x] Part E (verified: top author, 25 vs next 20) |
| wme-gep-shared-iac | 29 | 19 | 2021-06-02 – 2026-01-21 | 2021-01 – 2026-10 | 1407 | [x] Part B |
| wme-gep-theme-service | 20 | 11 | 2022-03-18 – 2026-10-15 | 2021-03 – 2026-10 | 606 | [x] Part E |
| wme-gep-context | 19 | 14 | 2023-11-09 – 2026-10-08 | 2021-10 – 2026-10 | 826 | [x] Part E |
| wme-gep-core-component-library | 13 | 8 | 2025-05-01 – 2026-10-15 | 2022-03 – 2026-11 | 17018 | [x] Part E |
| wme-gep-cache-bandaid | 11 | 7 | 2025-07-30 – 2026-09-30 | 2021-12 – 2026-09 | 85 | [x] Part B |
| wme-gep-production-release | 10 | 6 | 2023-11-28 – 2026-10-15 | 2021-06 – 2026-10 | 475 | [x] Part D |
| wme-gep-dev-documentation | 8 | 5 | 2023-03-10 – 2024-08-20 | 2022-10 – 2026-03 | 219 | [x] Part D |
| gep-datastore-proxy-cli | 6 | 6 | 2025-10-22 | 2025-10-22 | 6 | [x] Part B |
| wme-gep-service-template | 5 | 3 | 2021-11-08 – 2024-01-25 | 2021-09 – 2025-03 | 91 | [x] Part A |
| wme-gep-ai-skills (local only, no remote) | 4 | 4 | 2026-07-29 | 2026-07-29 | 4 | [x] Part E |
| wme-gep-scripts | 3 | 2 | 2023-07-26 – 2023-11-13 | 2020-12 – 2025-07 | 609 | [x] Part D |
| wme-gep-search | 3 | 2 | 2024-01-24 – 2024-01-25 | 2023-07 – 2025-09 | 238 | [x] Part E |
| eslint-config-wme-gep | 2 | 1 | 2025-01-28 | 2020-02 – 2025-01 | 110 | [x] Part D |
| wme-gep-foodhackathon_gql_service | 16 | 15 | 2024-05-07 – 2024-05-08 | 2024-05 – 2024-08 | 59 | [x] Part A |
| test-chamblin | 34 | 34 | 2023-10-20 – 2023-11-07 | same | 34 | [x] self (scratch repo for testing the GEP-4857 release-candidate tagging pipeline: test build, `check_build_status` polling, simulated long builds; supports Part D) |
| Zero commits by me: wme-gep-context-cli, wme-gep-debug, wme-gep-email-util, wme-gep-messaging, wme-gep-sessionmanager, wme-gep-slack-bot, wme-gep-terraform-modules, wme-micro-raze, wme-platform-metrics, wme-micro-cn-socialsweeps-iac (empty), wme-gep-agent-skills, rna-errorreporting, rna-logzio-logger, odt-event-consumer, dvs-schedules-temp (0 local commits, but GitHub shows 1 merged PR authored by Matt: #50 CLOUD-10173 CVE remediation, 2026-07-20 — local clone likely stale or squash-merged under another identity) | 0 | | | | | n/a (Part E confirmed zero for its list) |

### Turner Classic Movies (turnercode org)
| Repo | Mine | Non-merge | My dates | Repo dates | Total | Mined? |
|---|---|---|---|---|---|---|
| tcm-www | 1107 | 577 | 2020-01-30 – 2025-06-10 | 2017-06 – 2026-01 | 12859 | [x] Part F |
| tcm-webservices | 749 | 408 | 2020-04-02 – 2024-06-11 | 2018-10 – 2024-11 | 4301 | [x] Part F |
| tcm-preference-center-mcfly | 95 | 71 | 2020-02-05 – 2025-04-28 | 2019-04 – 2025-12 | 253 | [x] Part F |
| tcm-configs | 51 | 41 | 2021-05-06 – 2022-04-06 | 2021-05 – 2025-11 | 244 | [x] Part F |
| tcm-preference-center-marty | 23 | 19 | 2020-02-25 – 2021-02-24 | 2019-04 – 2025-04 | 274 | [x] Part F |
| TCM-Linear-Schedule | 0 | | | 2020-11 – 2021-06 | 49 | n/a (Part F confirmed 0 commits; Step Functions + Lambda schedule loader) |

### NBA (turnercode org)
| Repo | Mine | Non-merge | My dates | Repo dates | Total | Mined? |
|---|---|---|---|---|---|---|
| nba-drupal | 1374 | 854 | 2016-04-26 – 2020-02-06 | 2015-08 – 2020-11 | 27772 | [x] Part G (verified: #1 on nba_sweepstakes, 91 vs next 47; Drupalgeddon patch not Matt's) |
| nba-cloudformation-stacks | 24 | 15 | 2018-01-29 – 2018-12-17 | 2017-02 – 2024-05 | 3949 | [x] Part G (config-value edits only) |

### Tooling / cross-brand / other WBD orgs
| Repo | Mine | Non-merge | My dates | Repo dates | Total | Mined? |
|---|---|---|---|---|---|---|
| turnercode/hub-pull-request | 96 | 74 | 2018-11-29 – 2026-10-08 | same | 96 | [x] Part D |
| warnermediacode/wb-portals-platform | 65 | 58 | 2026-06-08 – 2026-07-14 | 2024-10 – 2026-09 | 775 | [x] Part H |
| wbd-streaming/asynchronous-messaging-solution | 10 | 9 | 2024-04-24 – 2024-06-05 | 2022-09 – 2026-01 | 11259 | [x] Part H |
| wbd-streaming/wbd-cdp-ai-acme | 10 | 9 | 2026-10-19 – 2026-11-03 | 2026-01 – 2026-11 | 1318 | [x] Part H |
| warnermediacode/security-agent-poc | 5 | 5 | 2026-10-30 – 2026-11-12 | same | 5 | [x] Part H |
| warnerbros/brinqa-agent (+ warnermediacode copy) | 2 | 2 | 2026-06-18 | 2026-06 – 2026-10 | 100 | [x] Part H |
| turnercode/ten-dejavu-video | 6 | 4 | 2025-06-25 – 2025-06-26 | 2016-05 – 2025-06 | 2082 | [x] Part H |
| turnercode/wme-drupal-core | 5 | 4 | 2025-06-26 | 2019-08 – 2026-01 | 2491 | [x] Part H |
| wbd-streaming/github-management | 2 | 2 | 2024-04-23 | 2022-08 – 2026-01 | 3987 | [x] Part H |
| bitbucket wbdigital/platform | 2 | 2 | 2024-07-22 | 2011-05 – 2024-07 | 22062 | [x] Part H |
| WarnerMedia/gimme-aws-creds | 1 | 1 | 2025-12-12 | 2017-01 – 2025-12 | 1131 | [x] Part H |
| Zero commits by me: warnerbros/agents, security-agent-poc-sandbox, cnn-content-hub, global-communication-schema, instrumentation-schemas, cartoon-origin-www, cn-redirects, adult-swim-* (6 repos), adult-swim-roku-catalog, ten-dejavu-feeds, fargate (turnerlabs) | 0 | | | | | n/a |

### Personal / sandbox (mchamblin GitHub or no remote)
| Repo | Mine | Dates | Mined? |
|---|---|---|---|
| mchamblin/loc | 14 | 2024-01-12 – 2024-02-01 | [x] Part H |
| loc-react (no remote) | 1 | 2024-02-02 | [x] Part H |
| mchamblin/404-crawler | 1 | 2023-10-02 | [x] Part H |
| kafka-dashboard / kafka-dashboard-client (no remote) | 1 each | 2024-12-04 | [x] Part H |
| my-gatsby-site, twee-trunk-beta | 1 each | 2022-11 | [x] Part H |
| Third-party clones, no commits by me: pact_broker, terraform-pact-broker, pact-5-minute-getting-started-guide (fork), dashboards-assistant, observability-stack, response-cache-eviction, aws workshop samples, aws-power-tuner-ui, invbeertory, lattice | 0 | | n/a |

### Non-git folders to check
- `~/gep/ai-log-analyzer`, `~/gep/wme-gep-hybrid-web-poc`, `~/gep/gep-json-render-poc` (no commits yet), `~/documentation` (personal work notes)

## GitHub PR data (gh search, account mchamblin-turner) — DONE 2026-11-13

Raw data: `/tmp/resume-inv/prs-authored-all.json`, `/tmp/resume-inv/prs-reviewed-all.json`.

### Authored PRs: 2,337 total (1,778 merged, 546 closed unmerged, 13 open), 2018-11 to 2026-11
By year: 2018: 33 · 2019: 182 · 2020: 698 · 2021: 484 · 2022: 176 · 2023: 181 · 2024: 202 · 2025: 146 · 2026: 235.
Note: TCM and NBA used one PR per environment branch (DEVELOP/QA/STAGING/PROD/MASTER), so PR counts there overstate distinct changes. Distinct ticket keys across authored PR titles: 400.

| Repo | PRs | First | Last |
|---|---|---|---|
| turnercode/tcm-www | 606 | 2020-01-30 | 2025-06-10 |
| turnercode/tcm-webservices | 331 | 2020-04-02 | 2024-06-03 |
| warnermediacode/wme-gep-graphql | 250 | 2021-05-25 | 2026-10-09 |
| warnermediacode/wme-gep-lambdas | 217 | 2021-07-29 | 2026-10-07 |
| turnercode/nba-ng (NOT cloned locally) | 185 | 2019-04-22 | 2020-03-19 |
| warnermediacode/wme-gep-web | 143 | 2021-05-25 | 2026-10-28 |
| warnermediacode/wme-gep-renderengine | 106 | 2021-05-25 | 2026-11-12 |
| warnermediacode/wme-gep-cdn-iac | 57 | 2021-07-14 | 2026-08-21 |
| turnercode/hub-pull-request | 56 | 2018-11-29 | 2021-08-24 |
| warnermediacode/wme-gep-statushub | 51 | 2021-05-25 | 2026-10-15 |
| warnermediacode/wme-gep-page-alias-service | 37 | 2021-10-07 | 2026-08-04 |
| turnercode/tcm-preference-center-mcfly | 31 | 2020-02-07 | 2025-04-28 |
| warnermediacode/wme-gep-component-service | 31 | 2021-05-25 | 2026-07-30 |
| warnermediacode/wme-gep-pipeline-scripts | 27 | 2022-05-17 | 2026-10-02 |
| warnermediacode/wme-gep-cartographer | 26 | 2023-09-07 | 2026-10-09 |
| warnermediacode/wme-gep-drupal | 21 | 2021-05-25 | 2026-10-09 |
| warnermediacode/wme-gep-context | 11 | 2023-11-09 | 2026-10-07 |
| turnercode/nba-cloudformation-stacks | 10 | 2018-08-20 | 2018-12-17 |
| warnermediacode/wme-uep-unified-event-bus | 10 | 2024-08-27 | 2026-03-03 |
| wbd-streaming/asynchronous-messaging-solution | 8 | 2024-04-23 | 2024-06-05 |
| warnermediacode/wb-portals-platform | 8 | 2026-06-03 | 2026-07-08 |
| tcm-preference-center-marty 7 · wme-gep-core-component-library 7 · wme-gep-shared-iac 7 · wme-gep-theme-service 7 · nba-angular-dependencies 6 (not cloned) · wbd-cdp-ai-acme 6 · tbs-app-configs 5 (not cloned) · wme-gep-production-release 5 · tcm-configs 4 · ten-dejavu-video 4 · wme-theme-dc 4 (not cloned) | | | |
| 1–3 PRs each: tru-app-configs, tru-config, wme-webvideo-config, tbs-config, highlander-node, nba-amp (all not cloned); wme-gep-cache-bandaid, wme-gep-dev-documentation, wme-gep-service-template, wme-drupal-core, wme-gep-scripts, wme-gep-search, eslint-config-wme-gep, dvs-schedules-temp, wme-avs-replacement-cms (not cloned); 12 brand theme repos wme-theme-{hbo,gelatam,sandbox,as,cnkr,tbs,tcm,tnt,trutv,cinemax,international,template} (not cloned) | | | |

Ticket namespaces in authored PR titles (prefix, PR mentions, first–last):
- DRUTCM (TCM Drupal) 652, 2020-01 – 2023-06
- GEP 460, 2023-07 – 2026-11
- WMEEPP (pre-2023 key for the GEP platform) 414, 2021-05 – 2023-06
- NBADE (NBA digital) 97, 2019-03 – 2020-03
- KYAC 44, 2024-01 – 2026-06 (meaning TBD from Jira)
- CLOUD 16, 2026-06 – 2026-10 (CVE remediation tickets)
- MATT/HPR (hub-pull-request) 2018–2021

### Reviewed PRs: 1,749 PRs authored by 56 other engineers, ~100 repos, 2017–2026
By year: 2019: 49 · 2020: 39 · 2021: 193 · 2022: 365 · 2023: 331 · 2024: 255 · 2025: 167 · 2026: 349.
Top repos reviewed: wme-gep-graphql 268, tcm-www 136, wme-gep-lambdas 131, wme-gep-renderengine 99, wme-gep-web 91, wme-gep-pipeline-scripts 78, wme-gep-shared-iac 72, wme-gep-drupal 66, wme-gep-cdn-iac 65, wme-gep-context 64, wme-gep-page-alias-service 62, nba-ng 52, wme-gep-cartographer 45, tcm-webservices 44, wme-gep-statushub 38, wme-gep-theme-service 32, wme-gep-component-service 30.
Cross-brand reviews 2023–2026 (outside GEP core): Cartoon Network (cartoon-avs-cms 14, cn-go-videodata 10, cartoon-origin-www 9, cn-drupal-cma 9, cartoon-queue-fetcher 6, cartoon-cartographer 5, cartoon-shared-iac 5, cn-go-api 5, cartoon-cms-api 4, cartoon-stats-api, cartoon-secrets-sidecar), TNT/TBS (ten-dejavu-* 14 across 6 repos, ten-graphql 5), Adult Swim (adult-swim-* 14 across 9 repos), wme-drupal-core 16, wb-portals-platform 15, wme-avs-replacement-cms 15, dvs-schedules-temp 9, wme-gep-terraform-modules 11.
Top authors reviewed: gitycheng 303, jhilton-turner 216, wmikega 205, shstafford-turner 187, brahian-pena 128, nickpadovani 106, wschaeferiii 98, dennis-padilla 74, junchenTurner 59, brannonglover 52 (+46 others).

### Cross-repo initiatives visible only from PR titles (to verify against git/Jira)
- **NBA League Pass storefront (turnercode/nba-ng, Angular)** 2019-04 – 2020-03, ~185 PRs, NBADE-*: global nav (NBADE-1181), confirmation page (NBADE-1291), Branch deep links (NBADE-1295), payment style (NBADE-1697), switch teams + e2e tests (NBADE-1332), sales sheet one-time purchase (NBADE-1582), team pass purchase (NBADE-1769), blackout notice (NBADE-1892), sales sheet SEO (NBADE-1689), Ensighten/Adobe analytics phases 3–4 (NBADE-1642, NBADE-2164), send single game to SSR (NBADE-2247), config updates (NBADE-2226), compare-features config (NBADE-2468), add-on card (NBADE-1225), holiday pricing grid (NBADE-2562), OptinMonster (NBADE-2875), hide monthly (NBADE-2836), coverage threshold 94% (nba-ng#873), many "deploy 8.5.x" release PRs. Also nba-angular-dependencies: Slick carousel replacement (NBADE-965), nba-amp deploy 1.0.3.
- **Azure Pipelines migration for TBS/truTV/web-video config repos + Highlander** 2021-06 – 2021-07: WMEEPP-693 (highlander-node), WMEEPP-696 (tbs-app-configs), WMEEPP-697 (tru-app-configs), WMEEPP-699 (wme-webvideo-config), WMEEPP-700 (tbs-config), WMEEPP-702 (tru-config).
- **Terraform 0.14 upgrade across GEP services** WMEEPP-572, 2021-05 – 2021-06: drupal, shared-iac, component-service, graphql, renderengine, statushub, web.
- **HBO.com on GEP**: HBO CDN (WMEEPP-725, cdn-iac#11/#12, 2021-07), HBO launch Fastly logic (WMEEPP-984, cdn-iac#16, 2021-09), HBO feed date check (WMEEPP-1741, lambdas#373, 2022-03), "hbo page launch 3 31 22" (cdn-iac#49, 2022-04), HBO redirects (2022–2023), HBO legacy deploy dev/qa (GEP-12832, web#1721/#1722, 2026-07), hbomax redirect URLs (GEP-13149, cdn-iac#257, 2026-08).
- **Schedule features**: TCM schedule metadata schema (DRUTCM-945, 2020-06), TCM schedule JS errors (DRUTCM-2604, 2021-02), "pst schedule down" hotfix (2021-05), GEP "get schedule feeds query" (WMEEPP-1966, graphql#551/#555, 2022-04), "Schedule" (WMEEPP-1967-8, graphql#565/#566, 2022-05), TCM livestream schedule refactor (2023-07), placeholder schedule content (GEP-5120, 2023-11), DVS TV schedule page (GEP-5406, tcm-www#2307, 2024-01), Schedule List View (GEP-5491, graphql, 2024-02), schedule import without external_id (GEP-5750), schedule summaries missing (GEP-5907), schedule capitalization/series casing (GEP-5923, GEP-6190), schedule query needs brand (GEP-5927), Time Machine schedule data (GEP-6068, graphql + lambdas, 2024-04), scheduleEntry TM fields (GEP-6528, 2024-05/06), UEP schedule-entry Kafka topic (GEP-6367, 2024-05).
- **Apollo Client migration across 5 services** WMEEPP-2215, 2022-05 – 2022-06: page-alias-service, renderengine, lambdas, pipeline-scripts, web.
- **node-sass → sass across 13 brand theme repos** WMEEPP-4545, 2023-06-09 – 2023-06-13.
- **Security audit fixes** GEP-5079/5080/5083/5179 (statushub, context, cartographer, scripts), 2023-11.
- **Sentry IaC rollout across 12 repos** GEP-5177, 2024-01-18 – 2024-01-25.
- **Unified Event Bus (Kafka) migration** 2024-04 – 2026-03: onboard to company message bus (GEP-6074), UEP topics (GEP-6143/6367), content-feed Kafka producer in lambdas (GEP-6143), GraphQL content-feed consumer (GEP-6144), page-alias consumer (GEP-7003), migrate render lambda to event bus (GEP-6149), renderengine SQS → event bus (GEP-7188), web integration with UEB (GEP-6138), StatusHub integration with UEB (GEP-7520), UEB audit events (GEP-8657), Kafka connection fixes (GEP-11411, GEP-11862).
- **CVE / Dependabot remediation wave** 2026-06 – 2026-10: CLOUD-9669/10150/10173/10180/10183/10185/10936/12786/12840 CVE remediation PRs across wb-portals-platform, dvs-schedules-temp, cartographer, drupal, graphql, renderengine, normalizer lambda, context; Dependabot roll-ups GEP-13363/13364/13543/13578/13585/13589; Artemis scans GEP-11787/11788 (2026-03); braces vulnerability GEP-6701 (2024-06); Next.js security update (2025-03); site-search cache-poisoning mitigation (graphql#1474, 2026-03).
- **Node 22 LTS** (GEP-7729, 2025-01, closed PRs), cache-manager upgrade + revert (GEP-9508, 2025-07).

## Jira (wbddigital.atlassian.net) — DONE

Counts: assignee = Matt: 350 issues; reporter = Matt: 324 issues. wbdstreaming.atlassian.net: 18 issues (assignee or reporter).
Note: Jira Cloud JQL cannot search "commented by", so commenter-only involvement is not captured.
Older project keys seen in PR titles (DRUTCM, NBADE, WMEEPP, MATT/HPR) — check whether they exist on this site.

### Assigned, page 1 (newest 100: 2026-03-13 – 2026-11-11)
- **Manifest Layout / ISR rendering program (epic GEP-12361)**, 2026-03 – 2026-11: GEP-11996 Write LADR for ISR migration (Done); GEP-12100 Publish optimization POC (Done); GEP-12174 Render Engine emits per-route layout manifest JSON to S3; GEP-12183 spike: bootstrap real React components for manifest pages; GEP-12295 per-brand Docker build foundation; GEP-12297 TCM dev baked image boot/health check/legacy SSR validation; GEP-12299 CDN Cache-Control for ISR-cached manifest HTML; GEP-12301 generated component registry, CI fails on unknown types; GEP-12302 personalization strategy + deterministic ISR context; GEP-12303 legacy site shell (theme, context, modals); GEP-12304 RE publish notify via UEB `manifestOnly` (prod fleet ISR); GEP-12305 SEO parity (canonical, OG/Twitter, JSON-LD); GEP-12306 manifest-vs-legacy golden-route regression suite; GEP-12307 publish-to-visible observability (metrics + dashboards); GEP-12308 prod flip + staging rehearsal (M5); GEP-12323 route-level manifest gate; GEP-12748 ISR + on-demand revalidation; GEP-12749 single Next app / drop content zip (To Do); GEP-12751 parameterized route substitution; GEP-12860 publish .next/static to CDN; GEP-12942 Docker bake syncs static to CDN; GEP-12944 immutable staging ECR tags; GEP-13122 canonical componentType; GEP-13145 QA load testing legacy vs manifest; GEP-13248 hub manifest scale (slim emit); GEP-13249 manifest scale (pointer props, layout API); GEP-13334 hydration errors; GEP-13349 TCM manifest E2E; GEP-13350 brand onboarding (In Progress); GEP-13584 CMR: enable manifest layout for ALL GEP brands (In Progress); GEP-13895 CMR: enable for TCM (In Progress); GEP-13595 TCM prod hotfix (TVE login issue → disable manifest publishing); GEP-13594 webpack nested-dependency resolution bug; GEP-13799 headSection 500 after html-react-parser v6; GEP-13834 manifest web hotfix runbook (Done).
- **AI Security Agent (vulnerability-ticket automation)**, 2026-10 – 2026-11: GEP-13615 ramp-up tickets for AI security agent; GEP-13784 triage by ticket type; GEP-13785 update Jira status + hand off to remediation; GEP-13786 remediation produces a PR or manual steps; GEP-13790 shell security subagents; GEP-13792 dedupe sub-agent; GEP-13822 wire Okta M2M (Security Agent) to ACME; GEP-13863 spike: cross-account AWS access for remediation (New); GEP-13578 Brinqa Agent — wme-gep container CVE umbrella; GEP-13972 Dependabot ingestion validation (In Progress); GEP-13614 CoE work (COER-14081).
- **Vulnerability remediation tickets assigned to Matt**: CLOUD-10055/10150/10158/10173/10180/10182/10183/10185 (2026-07, "Container Vulnerabilities: <service> <sha>" for microsites-webserver, graphql, context-service, tnets-dvs-schedule, drupal, statushub, renderengine, cartographer); CLOUD-12751/12786/12840 (2026-10: page-alias, context, normalizer); CLOUD-8280/8292/8295/8492 (2026-05, cloud posture findings on the WB portal platform accounts: Redis AUTH, admin privileges, OpenSearch HTTPS). Dependabot roll-ups GEP-13363/13364/13543/13589; GEP-13529/13531 cache-bandaid Dependabot deploy.
  - CONFIDENTIAL: CLOUD-8xxx summaries contain AWS account IDs and specific security findings — generalize.
- **WB Portals platform** (2026-05 – 2026-06): GEP-12657 destroy Sentry infra (vulnerability); GEP-12690 CMR: WB Portals release, Sentry removal; GEP-12519/12521 decommission unused portal-tech-dev S3 buckets and two ECS services.
- **AWS account cleanup / decommissioning** (2026-05): GEP-12570 decommission cn-sweeps + raze CDN stacks (S3 + CloudFront + Lambda@Edge); GEP-12440 decommission a legacy login site (S3 + CloudFront); GEP-12414 decommission platform-metrics deployment tracker; GEP-12446 AVS Replacement CMS decommission (Cancelled); GEP-12422–12426 WAF/ALB hardening and non-prod exposure reduction (Cancelled).
- **Ops / bugs**: GEP-11992 GraphQL memory leak (2026-03, Done); GEP-11985 Context UI deep links + Okta post-login restore; GEP-13569 prod ECS using staging Context tier; GEP-13331 preview startup crash (broken symlink + Bull bootstrap race); GEP-13219 hotfix: web regex breaking DC preview; GEP-13557 preserve manifests/ in S3 cleanup; GEP-13544 TCM QA metadata mismatch vs Percy baseline; GEP-13748 local published lane setup; GEP-13502/13399 (Blocked).
- **HBO redirects**: GEP-13149 update HBOMAX redirect URLs; GEP-13166 CMR: update HBO external redirects (2026-08).
- **AI-assisted engineering**: GEP-13540/13541 initialize renderengine/web with WBD Agent Catalog (Lattice context).
- **Release management**: GEP-12093 CMR: GEP 26.2.1 release (2026-04).
- **KYAC (TCM email preference center / Braze)**: KYAC-1632 new-user subscription endpoint error handling; KYAC-1635 QA returns Braze PROD subscription groups (Cancelled); KYAC-1651 delete unused endpoint; KYAC-1677 TCM redirect hosts URL.

### Assigned, page 2 (2025-04-30 – 2026-03-11)
- **TCM.com → GEP migration (KYAC + GEP keys)**, 2025-04 – 2026-03: redirect strategy LADR (KYAC-1175); redirects for TCMdb pages (KYAC-1103) and article pages (KYAC-1101); TCM 404 redirects (GEP-11304); redirect old TCM API requests to prevent 404s (GEP-11466); TCM redirects (GEP-11620, GEP-11717); watchtcm 301→302 (GEP-11212); redirect old video URLs for site health (KYAC-1556); legacy "this month" article URLs (KYAC-1562); Fastly VCL updates to prod (KYAC-1221, KYAC-1236); page alias mapping for TCM (GEP-9677 consumer title; KYAC-1207/1208 article alias path + category; KYAC-1224 legacy id; KYAC-1284 "/" in titles; GEP-10990 wrong destination); TCM API issues (GEP-10619 prod 5xx investigation; GEP-10620 old feature entries; GEP-10931 watch_carousel stale data from findPageBy limits); TCM cache hiding new films (GEP-11154); expired features in search (GEP-11739); TCM schedule episode images (KYAC-1587 spike, KYAC-1602) and schedule PDF (KYAC-1573); TCM email preference center service endpoints get/updateSubscriptionGroups (GEP-11562, GEP-11563, 2026-01; Braze) + bugs KYAC-1612/1632; API migration legacy TCM → GEP Cartographer (KYAC-1580, Cancelled); KT for TCM data feed (GEP-11742, Cancelled).
- **Site search → Swiftype for TCM**, 2025-04 – 2026-02: LADR + work breakdown for Swiftype (GEP-10768); provision engine (GEP-10905); TCM data ingestion (GEP-10906); GraphQL queries Swiftype (GEP-10907); prod deploy + cutover (GEP-10909); fine-tuning (GEP-11085); "Did You Mean" (GEP-11162; GEP-10250); pagination/phrase/single-word fixes (GEP-11336, GEP-11337, GEP-11683, GEP-9785, GEP-10168); earlier UEP site search pagination (GEP-9472); mixed-content search with multiple relevancy algorithms (GEP-10161, GEP-10146); Datadog monitoring for TCM site-search queries (GEP-10136); vulnerability-scanner traffic causing intermittent siteSearch failures / cache poisoning (GEP-11843, 2026-03); DC.com search bugs (GEP-11656, GEP-11662, GEP-11703, GEP-11875).
- **GraphQL caching, performance, reliability**: clear GraphQL cache on publish (GEP-9508, 2025-05); plan + implement cache invalidation for availability/"flight" changes (KYAC-1293, KYAC-1295); cache metrics + diagnostic tools (KYAC-1308); fix GraphQL cache performance bottleneck (GEP-10280, 2025-08); brand extraction for Datadog metrics (GEP-10226); reduce TTL for null responses (GEP-11623, 2026-01); GraphQL hotfix CMRs 26.1.4-2 and 26.1.4-3 (GEP-11846, GEP-11876, 2026-03); runtimeFormatted/durationFormatted fields (GEP-10307, GEP-10308); feature availability filter (GEP-10113); remove dependencies on Component Service GraphQL (GEP-10404 spike).
- **HBO.com schedule (Time Machine data)**: GEP-11160 "Programs missing TITLE ID from Time Machines causing schedule display issues on HBO.com" (2025-11). Ties the HBO.com schedule page to the Time Machine schedule data work (GEP-6068, GEP-6528, 2024).
- **CDN strategy**: high-level workstream doc for migrating GEP off Fastly (GEP-10245, 2025-08); LADR for Fastly → AWS CloudFront (GEP-10276, 2025-08); PageSpeed cache lifetimes (GEP-11303).
- **Publish pipeline / ISR**: reduced publish job time spike (GEP-11524, 2026-01); ISR feasibility + POC for single-page publish (GEP-11854, 2026-03); web published lane downloads S3 pages instead of zip (GEP-9579).
- **UEB events**: RE consumes asset_refresh from UEB (GEP-10863, 2025-10); event on pinning triggers RE (GEP-10407); fix unhandled Kafka connection errors (GEP-11411, 2026-01).
- **Page Alias service**: Batch Page Alias API (GEP-11035, 2025-11); special-character / quote preservation bugs (GEP-10356, GEP-10423, GEP-10426, GEP-10434).
- **Safety / ops tooling**: [CoE 2729683] production data deletion prevention — Session Manager proxy safety measures (GEP-10824, 2025-10; likely = gep-datastore-proxy-cli repo); 404 crawler daily scan incl. TCM, ignore robots.txt (GEP-10822, GEP-10032; likely = 404-crawler repo); review Elasticsearch copy-down script (GEP-10437); Sentry log levels (GEP-10176); decommission Sentry on WB portal platform (GEP-11542); inactive IAM credentials finding (GEP-10264, contains account ID — CONFIDENTIAL).
- **AI-assisted engineering**: Copilot instructions / Cursor rule to assist in PRs (GEP-11300 spike, 2025-12).
- Misc: Mux applicationName for TNT/TBS web (GEP-9477); DC image aspect ratio (GEP-11877); CN activate page redirect (GEP-11907, Cancelled).

### Assigned, page 3 (2024-01-05 – 2025-04-29)
- **Unified Event Bus (Kafka) program — discovery, design, rollout** 2024-02 – 2025-04:
  - Discovery/design: GEP-5711 Inventory existing WBD messaging systems; GEP-5717 Define message bus tenets; GEP-5743 Inventory industry standards and cost analysis; GEP-5895 Impact analysis (Cancelled); GEP-5956 Diagram proposed new flow; GEP-6253 Detailed migration plan (2024-04); GEP-6124 How to use Kafka locally; GEP-6729 UEB LADR: content feed ingestion (2024-06).
  - Onboarding: GEP-6074 service account to onboard UEP (2024-03); GEP-6367 topic + schema for schedule-entry (2024-05).
  - Content feed: GEP-6143 producer — event emissions for CRUD ops; GEP-6144 GraphQL consumer from event bus; GEP-6145 GraphQL stops consuming content-feed events from **RabbitMQ**; GEP-7003 Page Alias consumer; GEP-7052 monitoring; GEP-7073 production launch with message bus (2024-08); GEP-7051 (To Do).
  - Publish flow: GEP-6149 Render Lambda SQS → Event Bus; GEP-7188 Render Engine consumes CMS publish messages from Event Bus; GEP-6138 Web server integration; GEP-6140 StatusHub UI impacts of migrating off **Bull** queue; GEP-7520 StatusHub integration; GEP-7348 deploy RE + Render Lambda to prod (2024-09); GEP-7734 deploy publish-flow event bus integration to prod (2024-10); GEP-7846 prod web-server message consumption race condition; GEP-7947 enable publish-flow event bus in prod (2024-12); GEP-9006 publish failure during message bus migration (2025-02); GEP-9464 StatusHub sendToEventBus validation error; GEP-6126 post-migration GraphQL cleanup.
  - Audit / observability: GEP-8657 [Backend] Publish Queue Dashboard (2025-01; = UEB audit events in wme-uep-unified-event-bus); GEP-8764 [UI] Publish Queue Dashboard; GEP-9181 audit events dashboard UI issues (Cancelled).
- **Schedule MVP for TCM + HBO (GEP schedule platform)** 2024-01 – 2025-02: GEP-5491 Schedule List View search query; GEP-5565 add TCM schedule feed; GEP-5750 TCM US-West feed derived from East feed in lambdas; GEP-5924 TCM Canada feed; GEP-5796 TCM Storybook updates; GEP-5907 missing summaries; GEP-5923 capitalization rules spike; GEP-6190 HBO all-caps series investigation; GEP-5927 titleId/scheduleId collision; GEP-5990 DVS flag in GraphQL; GEP-6068 extend schedule ingestion with Time Machine properties; GEP-6528 ScheduleEntry fields (moving off TCM DB); GEP-6882 runtime/duration; GEP-7128 schedule ingest lambda timeout before committing diff hash; GEP-7166 Datadog alert for TCM schedule feed; GEP-7223 schedule ribbon 500s; GEP-7526 cross-brand contamination in schedule data; GEP-8430 TCM Time-Machine-only schedule; GEP-8778 Time Machine titles include movie year; GEP-5406 Twig template for TCM DVS TV schedule embed; GEP-5378 spike: embed into legacy TCM page.
- **Architecture review**: CDPARF-54 Review & approve ADD 003 "TCM on UEP" (2024-05, Approved).
- **TCM site search on UEP via Motif** 2025-03 – 2025-04: GEP-9016 extend siteSearch GraphQL query to Motif; GEP-9039 type-ahead suggestions query; GEP-9169/9170/9171 results meta, relevancy/sorting, bodyText length param; GEP-9318 exclude film pages outside flight window; GEP-9355 decouple Motif search service from GepContentBase; GEP-9370 sync GEP env configs with Motif envs; GEP-9446 filter film results by license and availability.
- **TCM platform/security**: GEP-9457 webpack dev server in production preference center (security bug, 2025-04); GEP-9209 rotate a TCM third-party API key; GEP-6858 migrate TCM CMS to new Okta SSO IdP; GEP-5355 TCM TOP2 auth flow POC (2024-01); KYAC-401 TCM 404s redirect to SAML flow; KYAC-421 editors unable to publish long articles; GEP-6311 TCM VOD table cron; GEP-8756 restore deleted article; KYAC-841/KYAC-1035 TCM in Context service/configs; KYAC-810 gep-bot cache purge for TCM; KYAC-560 [TCM] URL Redirects epic (2024-06); KYAC-541 Adult Swim music page redirects; TCMAPP-423 TCM Roku Search 2.0 (2024-03).
- **Security hygiene**: GEP-6326 disallow PROPFIND → 405; GEP-6462 AWS access key rotation across three portal accounts (keys last rotated 2019); GEP-6701 npm vulnerabilities in lambdas; GEP-8609 Lambda Node vulnerability; GEP-9246 Next.js security vulnerability in RE + web (2025-03).
- **Platform upgrades / quality**: GEP-7729 upgrade lambdas to Node 22 LTS (2024-10); GEP-8352 eslint-config to Node 22; GEP-8879 Epic: improve code coverage for backend services (2025-02); GEP-6393 evaluate Redis for Apollo persisted queries (2024-05).
- **Observability / ops**: GEP-5510 create a Sentry project when standing up app IaC (2024-01; = GEP-5177 rollout); GEP-5427 CDN purge from StatusHub; GEP-6736 nonprod alerts to release channel; GEP-5657 replace 404 crawler with new crawler (2024-02); GEP-5578 fix TNT/TBS deployment failures; GEP-7477 CoE: deployment release failure; GEP-9319 SQS message size limit in normalizer CMS job; GEP-8907 component sync Drupal lambda; GEP-8897 RE save status; GEP-7220 DC save errors; GEP-5813 variants locale.

### Assigned, page 4 (2022-02-14 – 2024-01-04; last page)
- **Production incidents / CoE (root cause, fixes)**: GEP-3427 INC01544383 country/region restriction not working at page level (2022-09); GEP-3533 [TCM] INC01758733 errors displayed to end users (2023-07); GEP-4449 INC01765648 root cause of WatchTCM failing to load PST feeds (2023-07); GEP-4453 TCM INC01766498 better error handling in TCM API (2023-07); GEP-4678 [TCM] INC01794210 schedule admin tool not saving (2023-08); GEP-4831 CoE: TCM Livestream outage (2023-09); GEP-5120 [TCM live feed] placeholder schedule content for missing upstream data, INC0031188 (2023-11); GEP-5190 [TCM] INC0046418 PHP deprecation errors visible in prod (2023-11); GEP-5219 some HBO.com pages not loading (2023-11); GEP-4811 DC web publish 5xx flapping alert (Cancelled).
- **Observability / CI**: GEP-5177 Create a Sentry project for GEP services (2023-11); GEP-5014 build pipelines post to Slack (2023-10); GEP-4857 refactor repo tagging pipeline (2023-09); GEP-5100 integrate Cartographer builds (staging → prod) into sprint deployment cycles (2023-11); GEP-4861 [TCM] update alerting; GEP-5206 web server production logging.
- **Security audits**: GEP-5079 statushub, GEP-5080 context, GEP-5083 cartographer, GEP-5179 wme-gep-scripts (2023-11).
- **Search / data quality**: GEP-4468 Automate Elasticsearch dedupe scripts (2023-07); GEP-5290 DC Swiftype indices out of sync across envs (2023-12); GEP-3642 POC Meilisearch for content discovery engine pt. 2 (Cancelled, 2023-05); GraphQL duplicate series/seasons/episodes triage (GEP-3708, GEP-3709, GEP-4379); GEP-4879 genres query excludes expired content; GEP-4406 HBO duplicated image in content tray.
- **Internationalization (I18N C1)**: GEP-3582 spike on locale script; GEP-4520 spike: identify legitimate variants; GEP-4938 GraphQL/Lambda changes for legacy articles (2023-10).
- **Adult Swim on GEP**: GEP-4702 homepage free-episodes query missing show URL; GEP-4881 AS CDN wildcard pathing; GEP-4901 free episode bad video URLs; GEP-5292 Chromecast streaming from mobile app; GEP-5315 episode-path creation should only report 404s.
- **TCM**: GEP-4637 enhance accessibility compliance; GEP-4651 McFly admin tool not updating content; GEP-5106 simplify 31 Days of Oscars site (redirect by 2024-01-31); KYAC-146/163 TCM DB participant page updates; KYAC-169 ad units; KYAC-178 TCM API should not return VODs without mediaID; KYAC-396 LinearSchedule titles without titleId.
- **POCs / spikes**: GEP-3590 POC: Pact broker service (contract testing, 2023-06; matches local pact_broker / terraform-pact-broker clones); GEP-4380 Fargate tooling to register secret files; GEP-3450 central entrypoint for brand default configs (Cancelled, 2022-02).
- Other: GEP-3417 Drupal: allow deletion of Features and Series (2022-11); GEP-4886 DC games filter.

### Reported by Matt, assigned to others or unassigned (tech-lead ticket writing), 2023-05 – 2026-11
Shows Matt breaking down work for the team. Assignees named only where it shows delegation.
- **UEB design breakdown (2024-02)**: GEP-5712 Define messages and schemas; GEP-5713 Define messaging protocols; GEP-5714 Define producer API; GEP-5715 Define consumer API (all → Dennis Padilla, Done); GEP-5716 high-level architecture (Cancelled); GEP-6641 Message observability epic (Cancelled); GEP-7187 Bull queue dashboard replacement / GEP-7275 remove Bull dependency (Cancelled); GEP-5762 RabbitMQ proxy for Session Manager (Cancelled). **Close-out: GEP-11816 Decommission RabbitMQ broker for all envs (2026-02, → Yongli Cheng, Done).**
- **Backend test-coverage drive (2024-09; Matt owns epic GEP-8879, 2025-02)**: GEP-7304 Render Engine, GEP-7306 Lambda unit-test pipeline, GEP-7307 Cartographer coverage report, GEP-7308 Context Service, GEP-7309 GraphQL, GEP-7311 Lambdas (Done); GEP-7310 StatusHub (Cancelled); GEP-11965 keep coverage on new code (Cancelled).
- **Production Release Improvements epic GEP-7476 (2024-10, Done)** after CoE GEP-7477 deployment failure: GEP-7475 single efficient error page spike (Done); GEP-7474 attack-scenario load tests, GEP-7478 input sanitization, GEP-7479 health check ready only after build, GEP-7480 abnormal-traffic monitoring, GEP-7481 scaling runbooks, GEP-7482 CDN cache-hit-ratio alerts, GEP-7483 GraphQL error-page/search query optimization, GEP-7484 image requests hitting web servers (Cancelled).
- **GraphQL / search reliability (2025-06 – 2025-12)**: GEP-9880 GraphQL restarting — Redis out of memory; GEP-9967 invalidating in-memory cache across ECS tasks; GEP-10386 4xx errors in GraphQL; GEP-11088 incident_2801442 Elasticsearch 5xx from missing field mapping; GEP-11236 Fix DataLoader anti-patterns in resolvers (→ Shon Stafford, Done); GEP-11307 Elasticsearch thread-pool exhaustion causing 5xx (Done); **GEP-11237 Migrate nonprod Elasticsearch 7.x → OpenSearch 3.x (Done)**; GEP-11235/11253 production-mirrored staging + load-testing tools (To Do); GEP-10837 cross-cluster ES snapshot/restore (To Do); GEP-11773 harden content ingest + alerting for missing canonicalUrl (Done).
- **Fastly → CloudFront workstream breakdown (2025-08/09, all Cancelled — program deprioritized)**: GEP-10241 workstream; GEP-10448 infra foundation + shared modules; GEP-10449 CloudFront Functions; GEP-10453 KeyValueStore; GEP-10454 brand-specific config; GEP-10455 cache-bandaid on CloudFront; GEP-10459 cache invalidation system; GEP-10460 monitoring/ops; GEP-10461 migrate first brand.
- **Component Service decommission + ThemeService metadata (2025-12 – 2026-06)**: GEP-11332 getComponentMetadata() in ThemeService; GEP-11333 RE → ThemeService metadata; GEP-11335 prod rollout of RE bundle metadata; GEP-11338 remove GraphQL client from Lambda; GEP-11339 remove metadata upload from postpublish (→ Yongli Cheng, Done); GEP-11488 shut down component-service S3 bucket; GEP-11489 remove Drupal dependency on Component Service GQL; GEP-12678 Decommission GraphQL from Component Service (Done).
- **UEB asset_refresh / theme pinning (2025-10 – 2026-03)**: GEP-10861 Drupal publishes asset_refresh to UEB; GEP-10862 Theme Service publishes AssetPinned; GEP-12034 Web handles asset_refresh from UEB (Done).
- **Publish optimization ideas (2026-03 – 2026-05, Cancelled)**: GEP-11993 streaming archive + multipart S3 upload; GEP-11994 async publish; GEP-11995 persist Next build cache across Fargate; GEP-11857; GEP-12385 ephemeral infra.
- **Manifest program follow-ons (2026-08 – 2026-10)**: GEP-12889 GraphQL execution parity tests for TCM static routes (Done); GEP-13237/13238 parameterized routes via Page Alias + Drupal; GEP-13242 route-group CDN purge + staggered ISR fan-out (Cancelled); GEP-13516 QA E2E for AS/HBO/Cinemax/DC before prod; GEP-13716/13718/13720 publish modules-bundle/theme pin without image rebuild (spikes); GEP-13750 bump Next.js 16.4.x; GEP-13671 monitoring for WatchTCM TV-provider sign-in failures.
- **Security findings Matt filed on WB Portals (2026-07)**: CLOUD-10192 GraphQL auth bypass (pre-prod rollout: origin header + WAF, HIGH); CLOUD-10193 unrestricted PII/CMS exposure via GraphQL field; CLOUD-10194 Build Status API unauthenticated data + stack-trace exposure (all Done, fixed by teammates). CONFIDENTIAL — describe only generically ("identified and drove remediation of API security findings").
- **Wiz/cloud-posture breakdown for AWS accounts (2026-05, Cancelled)**: GEP-12418–12421, GEP-12439, GEP-12470 (S3/Lambda@Edge exceptions, "252 Wiz rows, ~99 services"). CONFIDENTIAL.
- **Security-agent test fixtures**: CLOUD-13681–13690, CLOUD-13700 "[TEST] security-agent-poc …" (2026-10/11) — synthetic vulnerability tickets Matt created to exercise the agent (parent/child linking, no vendor fix, mixed remediation, host vulns, cloud control).
- **Context Service safeguards (2026-01)**: GEP-11457 harden prod Context safeguards; GEP-11458 prod config pinning (Done). GEP-8620 Context UI reminder.
- **Sentry rollout breakdown (2024-01/02)**: GEP-5389–5392, GEP-5595 extend wme-gep-debug to send logs to Sentry (Done).
- **I18N (2023-05 – 2024-03)**: GEP-3745 schema refactor to remove en_US; GEP-4462/4475 locale script; GEP-4741 I18N C2 INC01797995 page-band geotargeting; GEP-5908/5913/5921 variant, language, offerings across Page Alias, GraphQL index mapping, Lambdas (Done).
- **Schedule**: GEP-5868 remove old ES schedule data; GEP-6168 Cast & Crew in ScheduleEntry; GEP-4880 TCM docs for running schedule lambda.
- **Ops/tooling**: GEP-4583 Session Manager Elastic proxy (2023-08); GEP-8989 remove Guard Dog secrets scanning; GEP-8997 apply Lambda Terraform; GEP-8394 DNS-lookup injection attempts causing web 5xx; GEP-9068 multi-property link scanner; GEP-5168 JSON validation for ES mappings; GEP-5781/6633/6772 Cartographer Adult Swim alerting/retries; GEP-10057–10059, GEP-10020/10021 PagerDuty/Datadog severity for Adult Swim legacy site; GEP-9705/9706 TNT/TBS 5xx runbook + white-hat noise threshold; GEP-12150 theme-version diff script; GEP-12803 TCM app-configs to new account (Cancelled); GEP-9519 remove unused third-party client code; GEP-9489 TCM multiple feature data sources spike; GEP-12804/12805 re-ingest TCM to Motif + enable Motif for TCM site search (2026-07).
- Pact contract testing (2023-06/09, Cancelled): GEP-3586, GEP-3587, GEP-4707.

### wbdstreaming.atlassian.net (18 issues)
- **CoE incident reports assigned to Matt (COER project, auto-created)**: COER-9186 (2025-03, Cartoon video data: no running containers in prod, Cancelled); COER-9686 (2025-07-06, GEP published web server 5xx anomaly, mitigated, Completed); COER-9946 (2025-09-13, Cartoon video data: no running containers in prod, Completed); COER-13852 (2026-08, Cartoon video API synthetics, Cancelled); COER-14085 (2026-10-12, TCM.com TV-provider sign-in broken, Completed; pairs with GEP-13595 hotfix + GEP-13614 CoE work).
- **Cross-team requests Matt filed for the Kafka/UEP onboarding (2024-04 – 2024-06)**: write access to the central asynchronous-messaging-solution repo for himself and a teammate (CEA-60194, CEA-60210, RDE-15258); PR approvals from central infrastructure/cluster/service-catalog teams (CEA-60314, CEA-60452, CEA-60516, CEA-60677, CEA-61340, CEA-62997); Grafana + OpenSearch access (CEA-60410); cloud access for the API/UEP accounts (CEA-60390, CEA-61328); Kafka dev topic (CEA-63009).

### Jira gaps
- Project keys DRUTCM (TCM 2020–2023), WMEEPP (GEP 2021–2023), NBADE (NBA 2019–2020) and earlier NBA work do not exist on either accessible Jira site — that history is only visible through PR titles and commits.
- "Commented on" is not searchable in Jira Cloud JQL.

## Confluence — DONE (listing); key pages read below

### wbddigital — 32 pages created by Matt (space CE = "CD+P Entertainment" unless noted)
- **Unified Event Bus (2024)**: "WBD Event Bus Inventory" (inventory of Kafka/messaging use across WBD orgs); "Event Bus Phase 1 summary and next steps" (inventory found RabbitMQ, Kafka, Redis/Bull, SNS in use with no unified pattern); "[WIP] Event-Driven Architecture Landscape" (2024-04, requirement matrix: Kafka vs RabbitMQ vs Bull/Redis vs SNS/SQS); **"LADR: UEP Unified Event Bus" (APPROVED; authors Dennis Padilla + Matthew Chamblin; approvers Michael Chastain, Nick Padovani; due 2024-03-29)**; "Migration Plan" (dual-write to legacy + Kafka, migrate consumers, test, monitor); "How to Use Kafka Locally" (Docker + Confluent CLI).
- **Manifest-driven publishing program (2026-05 – 2026-11)**: "Manifest-Driven Publishing" (program page: epic GEP-12361 "Q3 BE Services Platform Improvement Boost", due 2026-09-29, TCM dev validation brand, HBO dev hub routes next); "Manifest-Driven Publishing — Implementation Guide"; "— Glossary"; "— Sprint Plan" (personal space; "Team assumed: Matthew Chamblin + Shon Stafford only"; points are estimates); "GEP-12748/12361 — Revised plan: publish-triggered rendering, Jira changes, and the September timeline" (personal space, 2026-07-16); "Transitioning to Manifest-Driven Publishing in GEP Web: Overview and Request Lifecycle" (2026-05); "Publish Optimization" (personal space); "Manifest SSR Architecture Overview"; "Manifest SSR Data Flow"; "Manifest Data Flow" (2026-11-13); **"ADR: Large manifest pages — universal pointer + cached layout asset" (Accepted 2026-09-03, amended 09-04; impl GEP-13249, wme-gep-web PR #1807)**; "Manifest Layout Components Dev Guide" (for component authors); "Manifest Publishing Dashboard" (observability); "Manifest Runbook" (on-call); "Manifest reference (ops)".
- **TCM → GEP**: **"UEP-LADR: TCM Redirect Strategy" (author Matt, 2025-05-21, DRAFT): "migrating TCM data to GEP, requiring redirect management for ~220k URLs across multiple content types"**; "Legacy Feed Support" (2024-07; partner feeds e.g. Roku search feed — contains internal URLs, CONFIDENTIAL); "TCM Homepage Shows Preview" (runbook).
- **Incident reports (CoE) authored**: "INC0593471 - 2024-09-24 - DC.com Prod Deployment Incident"; "INC2417202 — 2025-05-16 — T-Nets Microsites 5xx".
- **Runbooks / ops docs**: "On-Call Runbook" (last edited 2026-10); "Missing Schedule Data" (2024-08: GraphQL getScheduleEntries check + clean re-ingest via ingestion-hash reset); "AWS Key Rotation" (2024-08, 180-day rotation procedure).
- **Release**: "Release Notes - GEP 26.2.1 - Apr 23" (2026-04).
- **Transition**: "VBO Transition Plan for Matt Chamblin" (2026-11-13): transition plan for "manifest-driven publishing, the Unified Event Bus (UEB), and the Security Agent". PERSONAL/HR context — do not cite on resume; useful as an ownership summary.

### wbddigital — 13 pages edited (not created) by Matt
"Security Agent (Ready for Review)" (2026-11; context: teams manually connecting the same story across Brinqa and Heimdall findings, CLOUD Jira tickets, GitHub repos, Dependabot alerts, many AWS accounts); "Security Agent PoC Runbook" (2026-11); "Migrating GEP off of Fastly CDN" (2025-08; business driver is a contract change — CONFIDENTIAL); "TCM UAT | Site Search" (2025-09); "UEP Sprint Maintenance" (sprint release rotation guide); "Deploy: Staging" (release orchestrator); "Reset: QA & Dev with mainline code and production data"; "GEP Sprint Calendars"; "March Madness Live Event Report 2026 - MML on TBS, TNT & truTV" (live-event on-call log); "ODT/ODS Event Consumer Run Book" (2026-03); "TCM | AWS Alerts" (DOC space, 2024-08: alarm thresholds); "TCM Deployment Instructions" (TCMDEV space, 2024-07); "INC01803785 - 14Sep2023 - TCM Live Simulcast East Unavailable" (2023-10).

### wbdstreaming — 15 pages created/edited by Matt (Architecture, CoE, OpEng spaces)
- **Architecture decision records authored by Matt**:
  - **UEP-LADR 005: Event Bus Content-Feed Architecture** — APPROVED (2024-07; approvers Rajesh Mahajan, Nick Padovani, Michael Chastain, Chris Jones, Brian O'Neil).
  - **UEP-LADR 0011: Fastly-CloudFront CDN Migration** — DRAFT (created 2025-08-28).
  - **UEP-LADR 0013: Automated Site Refresh on Theme and Modules-Bundle Pin Events** — REJECTED (2025-09-26), then **0013-2 APPROVED** (created 2025-10-09).
  - **UEP-LADR 0014: TCM Search Migration from Motif to Swiftype** — APPROVED (created 2025-10-23).
  - **UEP Core UI LADR 015: Component Service GraphQL Decommission** — APPROVED 2026-01-15 (created 2025-12-18; approver Robert Raheja).
  - **UEP-LADR 0017: Page Publishing Optimization** — APPROVED 2026-04-14 (created 2026-04-02; approvers Rajesh Mahajan, Robert Raheja).
- **Security review**: "ENT - KYAC-1458 - TCM Migrate Search to Swifttype - Project Spotlight Security Questions" (authors Matt Chamblin + Rajesh Mahajan, 2026-02).
- **Incident reports (CoE, "Celebration of Error Reports")**: 2025-07-06 #2519381 GEP published web server 5xx anomaly (legacy adultswim.com 5xx from a missing SSM parameter, mitigated); 2025-09-13 #2657485 Cartoon video data: no running containers in prod (cn-go-videodata unhandled exception); 2025-12-04 #2861708 GEP sites experiencing issues due to GraphQL hotfix (widespread outage across GEP sites on 2025-12-03 ~5:30 PM ET — Matt's role TBD); 2026-10-09 #3700152 TCM TV-provider activation stuck on Fire TV + 2026-10-12 #3706383 TCM.com TV-provider sign-in broken.
- "Access and Secrets" runbook (Data & Analytics space, 2026-10; agent catalog access for agent owners).

### Key Confluence pages read (verbatim facts)
- **VBO Transition Plan for Matt Chamblin** (wbddigital, Matt, 2026-11-13). Ownership statements: "Matt wrote most of the manifest publish and serve code and its runbooks and change procedures, has the most commits on the UEB client library since 2024, and is the only committer on `security-agent-poc`." UEB = "the `@warnermediacode/wme-uep-unified-event-bus` client library for the WBD AMS Confluent Kafka service, and the GEP producers and consumers that carry publish, save, bulk update, and asset refresh messages between Drupal, Render Engine, web, and StatusHub"; consumers also include GraphQL, Page Alias, Cartographer; one shared topic with `organization.producer.type.action` filters; S3 reference payloads for large messages; AWS PrivateLink connectivity. Security Agent POC = "an orchestrator and five sub-agents on ACME Forge that dedupe, triage, remediate, review, and verify CLOUD (Brinqa) and Dependabot findings, stopping at Ready for Review"; epic GEP-13764 (owner Rajesh Mahajan, who also wrote the ADR); **Step Functions and remaining sub-agent stories are assigned to Matias Eguez (GEP-13783/13787/13788/13789)**; Okta M2M client wired by Matt (GEP-13822); member of the "Security & Incident Response Agents" tiger team. Manifest epic GEP-12361 owner: Rajesh Mahajan.
- **UEP-LADR 0017: Page Publishing Optimization** (wbdstreaming ARC space; author Matt; APPROVED by Rajesh Mahajan + Robert Raheja; created 2026-04-02, v7 2026-08-19). Baseline numbers stated in the LADR: a single-page HBO publish rebuilt "all 824 pages" in "about 11 minutes" (~8 min `next build`, ~1 min zip+upload, ~13 s web download/extract, ~1 min theme/sync); TCM brand package ~479 MB (439 MB node_modules), 39 compiled pages; zip shipped per publish "~200+ MB". Design: Render Engine emits per-route JSON manifest to S3; web catch-all route + component registry + dynamic renderer; CDN purge instead of worker fork; feature-flagged brand-by-brand rollout with parity testing. **Expected outcomes (projections, not measurements): content publish ~11 min → seconds; 824 page files → 1 catch-all; 0 zip per publish; no worker restarts.**

- **CoE 2025-12-04 #2861708 "GEP sites experiencing issues due to Graphql hotfix"** (wbdstreaming CoER space; page created by someone else; Matt is a listed contributor/editor — which sections he wrote is not recorded). P1, ~3.9 hours; TCM.com + DC.com fully down, HBO/Cinemax/Adult Swim degraded, Watch TCM apps down. Root cause: a GraphQL search hotfix (authored by another engineer, not Matt) added a collapse/inner_hits secondary sort that exhausted OpenSearch JVM heap under production traffic. **Matt's verified part: he filed the follow-up action items GEP-11236 (DataLoader anti-patterns), GEP-11237 (ES 7.x → OpenSearch 3.x nonprod, Done), GEP-11235/GEP-11253 (production-mirrored staging + load testing), GEP-11307 (ES thread-pool exhaustion), and was assignee of GEP-11300 (AI code review in GitHub).** CONFIDENTIAL incident details — generalize ("drove post-incident hardening of the shared search/data layer").

## Personal notes in ~/documentation (secondary evidence — Matt's own working notes, not authoritative)
~140 markdown notes, 2021-02 – 2026-08. Topics line up with the git/Jira record; items that add information:
- **HBO GEP Pages Go Live** (archive, 2022-03/04): AEM → GEP cutover for HBO.com series sections (Chernobyl, His Dark Materials, Lovecraft Country, watch-free-episodes) via CDN edge dictionaries (`backend_lookup`, `path_pattern_dictionary`) plus an AEM → GEP redirect table; "done on 3/30/2022 at 5:45PM". Corroborates wme-gep-cdn-iac#49 "hbo page launch 3 31 22".
- **TCM linear schedule Step Function** (TCM/lambdas, 2023-08): an AWS Step Function of eight Lambdas (add titles, schedule rows, cast, director, genre, images, names, activate titles) calling tcm-webservices endpoints. A Step Functions + Lambda project separate from the security agent.
- **TCM SQL-injection remediation** (TCM/SQLi input escape + SQLi-placeholders, 2021-06): endpoint-by-endpoint audit of tcm-webservices with fixes (allow-lists, escaping, numeric-only params, locking down write/delete endpoints behind keys). CONFIDENTIAL specifics — generalize.
- **Interviewing**: candidate interview-question template (2022-09) — evidence of participating in hiring. Candidate name omitted.
- Other topic notes: WMEEPP-617 GraphQL caching research (2021-06); WMEEPP-572 Terraform upgrade (2021-07); WMEEPP-692 Azure migration (2021-06); WMEEPP-1719 Drupal DB sync (2022-03); WMEEPP-1686 publish bug (2022-03); WMEEPP-2473 brand theme bug (2022-07); WMEEPP-3815 (2023-01); GEP International backend + localization (2022-02/04); MongoDB evaluation (2022-04); limited-series / DC talent content types and content migration (2022); Schedule (2022-08); node-sass (2023-06); Elasticsearch ops notes (2021–2023: reindex, alias workflow, page-alias changes); i18n / language context / variants (2023); pact contract testing (2023-09); brand packaging (2023-09); Cache Purge GEP Bot (2023-09); Swiftype search (2024-03); RabbitMQ message broker (2024-07); tunnel/bastion proxy (2024-09); Kafka local POC + event-bus inventory (2024-09); **Context Service proposal** (2024-10: Global → Service → Environment → Instance config precedence); UEB env configs + sample messages (2025); Motif site search for TCM/HBO/DC (2025-03); Fargate (2025-05); **Artillery + GraphQL load-test scripts** (2025-08, 2026-02); CDN config diffs (2025-09); getGqlData / origin-toggler bookmarklets (2025-11 — dev tooling); session-manager (2025-12); **Automated Site Refresh — Jira Tickets** (2026-03) + site refresh (2026-05); Event Bus Documentation (2026-08); TCM Drupal upgrade (2021-08), TCM Okta/SimpleSAML (2021–2024), TCM Akamai cache clear (2022-01), TCM Roku search feed docs (2022-01), BigPanda–CloudWatch integration (2021-06).
- Skipped as personal/sensitive: `email-credentials.md`, `personal/goal-setting.md`, `Language of Compassion.md`.

## Repos known only from GitHub PRs (not cloned locally) — DONE
26 repos, 243 authored PRs. Evidence = PR titles only (no diffs read).
- **turnercode/nba-ng** — NBA League Pass subscription storefront (Angular, with SSR). **185 PRs authored (142 merged), 2019-04-22 – 2020-03-19.** Work, by ticket: global nav (NBADE-1181, #45); purchase confirmation page + itemized list (NBADE-1291); Branch deep linking (NBADE-1295); payment styling (NBADE-1697); League Pass ↔ Team Pass "switch teams" flow + e2e tests (NBADE-1332, #168, #301); manage subscriptions (#211); sales sheet — one-time purchase (NBADE-1582), team-pass purchase (NBADE-1769), SEO (NBADE-1689), copy (NBADE-2343/2356), configurable header (NBADE-2466), compare-features config (NBADE-2468), holiday pricing grid (NBADE-2562), hide monthly option (NBADE-2836), OptinMonster (NBADE-2875); edge blackout notice (NBADE-1892); Ensighten analytics + Lighthouse performance refactor (NBADE-1642, phases 3–4); Adobe Analytics (NBADE-2164); send single-game pages to SSR (NBADE-2247); add-on cards for multiple team passes (NBADE-1225); "do not honor" API-call handling (#621/#652); purchase history fixes; **coverage threshold raised to 94% (#873 "coverageThreshold 94 percent")**; CODEOWNERS setup (#365, #564, #651); release promotion INT → QA → MASTER and versioned production deploys 8.5.18 – 8.5.41 (#694 – #916). Role: primary front-end contributor + release driver for this period (PR counts; reviewer data not checked).
- **turnercode/nba-angular-dependencies** — 6 PRs (2019-03/04): Slick carousel replacement (NBADE-965), node-sass fix, deploy 6.1.0-63.
- **turnercode/nba-amp** — 1 PR (2018-11): deploy 1.0.3.
- **Azure Pipelines migration for TBS / truTV / Highlander / web video configs (2021-06/07)** — 18 PRs across `tbs-app-configs` (WMEEPP-696), `tbs-config` (WMEEPP-700), `tru-app-configs` (WMEEPP-697), `tru-config` (WMEEPP-702), `wme-webvideo-config` (WMEEPP-699), `highlander-node` (WMEEPP-693 "Highlander to Azure").
- **node-sass → sass across 13 brand theme repos (2023-06-09 – 06-13, WMEEPP-4545)** — wme-theme-as, -cinemax, -cnkr, -dc, -gelatam, -hbo, -international, -sandbox, -tbs, -tcm, -template, -tnt, -trutv. Also WYSIWYG text-alignment fixes in wme-theme-dc (WMEEPP-3815, 2023-01) and wme-theme-hbo (WMEEPP-4008, 2023-02).
- **Sentry IaC (GEP-5177, 2024-01)** — also landed in `wme-gep-service-template` (#21, #22) and `wme-avs-replacement-cms` (#416).
- `eslint-config-wme-gep` #30 (GEP-8352 ESLint update, 2025-01); `dvs-schedules-temp` #50 (CLOUD-10173 CVE remediation for a TNT/TBS schedule service, 2026-07).

## HBO.com schedule page — consolidated evidence (known starting point)
**Conclusion:** Matt built and maintained the **schedule data side** (ingestion + GraphQL schedule API) that HBO.com and TCM.com schedule pages and the HBO homepage schedule ribbon consume. No evidence that he built the front-end page itself (no schedule-page commits by Matt in wme-gep-web, renderengine, or the component library; Parts A/C/E).
- **2022 (HBO on GEP launch period):** GraphQL schedule feeds queries — WMEEPP-1966 (wme-gep-graphql #551/#555) and WMEEPP-1967/1968 (#565/#566), 2022-04/05; HBO AEM → GEP cutover routing done 2022-03-30 (personal note) and wme-gep-cdn-iac #49 "hbo page launch 3 31 22".
- **2024–2026 Jira (assignee = Matt, all Done):** GEP-5750 TCM US-west feed derived from East feed; GEP-5923 / GEP-6190 capitalization-rules investigation incl. HBO all-caps series; GEP-5927 titleId/scheduleId collision; GEP-5990 DVS flag in GraphQL; **GEP-6068 extend schedule ingestion with Time Machine properties** (graphql #976–979, lambdas #744/745); GEP-6528 ScheduleEntry fields to move off the TCM DB; GEP-7166 Datadog TCM schedule feed alert; **GEP-7223 schedule ribbon 500s / query errors**; **GEP-7526 cross-brand contamination in schedule data**; GEP-8430 Time Machine-only schedule missing titles; **GEP-11160 "Programs missing TITLE ID from Time Machines causing schedule display issues on HBO.com" (2025-11)**; KYAC-1587/1602 TCM schedule episode images (2026).
- Ops: Confluence runbook "Missing Schedule Data" (Matt, 2024-08); Part A: schedule API features (feeds, filters, publish toggle, brand scoping, event-bus ingestion), 2022–2025.
- Suggested resume phrasing: "Owned the schedule data pipeline and GraphQL schedule API behind HBO.com and TCM.com schedule pages (multi-brand linear schedules from an internal scheduling system)." Generalize "Time Machine" (internal system name).

## Confluence pages that mention Matt (created by others) — DONE
Search: `mention = currentUser() AND creator != currentUser()` on both sites. "Mentioned" means named on the page; his role on each page is noted only where the page states it.
- **wbddigital (56 results):**
  - "TOP2 Feature Requirements [TCM]" (2024-01): "Tech lead: Michael Walters / Matthew Chamblin".
  - Security & Incident Response Agents scrum notes (2026-10-27 → 11-12): participant; 2026-11-02 action item for Matt: "Add all shell security agents with the correct names…".
  - GEP release notes listing him as contributor: 26.1.4 (2026-02-24), 26.1.5 (2026-03), 26.3.2 (2026-07-29), 26.3.7 (2026-10-06), 26.4.1 (2026-10-20). He authored 26.2.1.
  - "GEP PRD: Episode support for TCM" (2026-06, team member); "Initiation Brief: TCM to GEP" (2025-04).
  - "Program Hub: GEP Performance and Release Modernization" and "GEP Platform Performance Boost" (2026-06): program context for the manifest work.
  - "Robert Raheja: 14-Sep Parental Leave Coverage Plan" (2026-09): named; coverage scope not read.
  - Retrospectives (2023-12 → 2025-02); "2024-02-08 Dev working session"; "2023-12-14 I18n Capability 1 – Demo for Brian"; "2023-12-08 Internal Demo on C1".
  - CoEs: "INC01809876 – 22Sep2023 – 404 Errors on HBO"; "INC01803534 – 14Sept2023 – Page Aliases Empty"; "INC01803785 TCM Live Simulcast".
  - March Madness Live 2026; Core UI sprint pages.
- **wbdstreaming:**
  - "Motif LADR 012" (author Justin Montgomery): approver with Will Schaefer, approved 2025-04-29.
  - "AMS Service Account Inventory" (central Kafka team): listed as a contact.
  - CoE "2025-10-13 – 2729683 – GEP Elasticsearch missing data": production search data was deleted during an OpenSearch POC through misrouted proxy host mappings, by another engineer. Matt's role is not determined; `gep-datastore-proxy-cli` (created 2025-10-22) followed this incident.
  - Cartoon video-data CoEs, TCM TV-provider sign-in CoEs, and the KYAC-1458 security questionnaire.

## Findings by repo
Per-repo findings live in `resume-inventory-parts/` (Appendix B links at the end of the main document).
