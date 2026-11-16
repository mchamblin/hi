---
title: One event bus instead of four
summary: I designed and led the build of a Kafka event bus that replaced SQS, RabbitMQ, Redis queues, and SNS across a publishing platform.
role: Architect and lead implementer
company: Warner Bros. Discovery
year: "2024–2026"
stack: [Kafka, KafkaJS, Node.js, AWS Lambda, S3, Datadog]
metrics:
  - { value: "4 → 1", label: "messaging systems" }
  - { value: "13", label: "services and Lambdas on the shared library" }
  - { value: "7–8 min", label: "consumer connection delays tracked down and fixed" }
featured: true
highlight: { value: "4 → 1", label: "messaging systems" }
order: 2
---

## Context

The publishing platform is a set of services: a CMS, a rendering service, a web service, a content API, a job-status service, and a group of ingestion Lambdas. They talk to each other whenever content is saved, published, bulk-updated, or refreshed.

## The problem

Those messages travelled over four different systems (SQS, RabbitMQ, Redis-backed queues, and SNS) with no consistent design. Each one had its own failure modes and its own monitoring. Adding a new consumer meant learning whichever one that corner of the platform used.

## What I did

**Discovery.** I inventoried how messaging was used across the wider organization and wrote a requirements matrix comparing Kafka, RabbitMQ, Redis queues, and SNS/SQS.

**Decisions.** I designed the unified event bus on the company's managed Kafka service, and its decision record was approved. I wrote a second record for the content-feed architecture on top of it, approved by five reviewers.

**Onboarding.** Our platform was new to the central Kafka service. I made the first configuration changes for it (service account, environments, first topic) and worked through the access requests with the central cloud and release teams.

**The library.** I was the top contributor to the shared client library that every producer and consumer uses, and cut most of its releases. The library also has an audit-event method that never blocks the main flow and never audits its own audit events.

**The migration.** Each service moved behind a flag, usually dual-running old and new paths first:

- Four ingestion Lambdas from SQS to Kafka, with batching, rate limits, and metrics.
- The content API's feed consumer, followed by deleting about 1,700 lines of the old SQS code.
- The URL alias service and the job-status service.
- The web and rendering services.

## The hardest bug

In 2026 we saw publish messages consumed twice. The cause was that site builds ran inside the Kafka message handler. A build could take more than ten minutes, far longer than the 45-second session timeout, so the broker ejected the consumer mid-build and redelivered the message to another one.

I fixed it with job de-duplication and by tuning the session and rebalance timeouts. I also tracked down a member-ID error that caused consumers to take 7 to 8 minutes to connect.

## Outcome

One event bus now carries the platform's publish, save, bulk-update, and refresh messages. The shared library is a dependency of 13 services and Lambdas, and RabbitMQ is decommissioned in every environment.

I now keep long-running work out of message handlers. Acknowledge the message quickly, then hand the job to something built to run for minutes.
