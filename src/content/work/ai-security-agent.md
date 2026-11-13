---
title: An AI agent pipeline for vulnerability tickets
summary: I built the working proof of concept for a multi-agent pipeline that dedupes, triages, drafts fixes for, reviews, and verifies vulnerability tickets, then stops for a human.
role: Primary developer of the proof of concept
company: Warner Bros. Discovery
year: "2026"
stack: [TypeScript, Node.js, LLM agents, Docker, Trivy, GitHub API, Jira API, AWS]
featured: true
order: 5
---

## Context

Engineering teams were spending real time on vulnerability tickets before any fixing started. The same issue would show up as a scanner finding, a ticket, and a dependency alert, spread across many repositories and cloud accounts, and someone had to connect them by hand.

A small cross-team group was formed to see whether AI agents could take on that work. The program's design and ownership sat with a colleague. My part was building the proof of concept that showed it running end to end.

## What I built

The pipeline takes each ticket through five steps:

1. **Dedupe**: group tickets that describe the same underlying issue.
2. **Triage**: decide whether it is real, where it lives, and how to fix it.
3. **Remediation**: open a pull request with the proposed fix.
4. **Secure code review**: a second agent reviews that pull request.
5. **Verification**: rebuild and rescan to confirm the finding is gone.

It then stops at "ready for review". People merge and close; the agents never do.

The pieces I wrote:

- A deterministic TypeScript orchestrator. The control flow is ordinary code, and the agents are called for the judgement steps only.
- Five agent handlers, each a configuration file plus a handler.
- My own ticket and pull-request write tools, with a strict contract for which statuses and labels an agent may set.
- A worker that rebuilds a container image and rescans it with Trivy.
- A CI check that catches drift in the agent prompts.
- Machine-to-machine authentication to the company's internal agent platform.

I tested it with synthetic tickets and ran one end to end.

## Outcome

This was a proof of concept, so there are no production numbers to quote. It demonstrated the whole flow on a test ticket, and colleagues are building out the production orchestration.

Two design choices I would keep: orchestration in plain code so the flow is predictable and testable, and a hard stop before anything is merged.
