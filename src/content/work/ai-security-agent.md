---
title: AI agent pipeline for vulnerability tickets
summary: I built a multi-agent pipeline that dedupes, triages, drafts fixes for, reviews, and verifies vulnerability tickets, then stops for a human.
role: Primary developer
company: Warner Bros. Discovery
year: "2026"
stack: [TypeScript, Node.js, LLM agents, Docker, Trivy, GitHub API, Jira API, AWS]
featured: true
order: 5
---

## Context

Engineers were spending a lot of time on vulnerability tickets before anyone started fixing anything. The same issue could show up as a scanner finding, a ticket and a dependency alert, spread across many repositories and cloud accounts. Someone had to connect them by hand.

## What I built

The pipeline takes each ticket through five steps:

1. **Dedupe**: group tickets that describe the same underlying issue.
2. **Triage**: decide whether it is real, where it lives, and how to fix it.
3. **Remediation**: open a pull request with the proposed fix.
4. **Secure code review**: a second agent reviews that pull request.
5. **Verification**: rebuild and rescan to confirm the finding is gone.

It stops at "ready for review". People do the merging and the closing.

The pieces I wrote:

- A deterministic TypeScript orchestrator. The control flow is ordinary code, and the agents are called for the judgment steps only.
- Five agent handlers, each a configuration file plus a handler.
- My own ticket and pull-request write tools, with a strict contract for which statuses and labels an agent may set.
- A worker that rebuilds a container image and rescans it with Trivy.
- A CI check that catches drift in the agent prompts.
- Machine-to-machine authentication to the company's internal agent platform.

