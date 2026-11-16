---
title: NBA.com and the League Pass storefront
summary: Six years building fan-facing features for NBA.com and the subscription storefront for NBA League Pass.
role: Senior Web Developer
company: Turner Broadcasting System
year: "2014–2020"
stack: [Angular, TypeScript, Drupal 8, PHP, Twig, SCSS]
metrics:
  - { value: "94%", label: "test coverage gate on the storefront" }
  - { value: "154", label: "files changed in the HTTPS migration" }
highlight: { value: "94%", label: "coverage gate on the storefront" }
order: 7
---

## Context

NBA.com ran on Drupal 8 with a team of about a hundred contributors over its life. Alongside it, a separate Angular app handled buying and managing NBA League Pass subscriptions.

## NBA.com

I was one of the core feature developers and took a regular turn on release duty. Most of my work was front end: templates, styles, and JavaScript, with PHP where the feature needed it.

- **Fan votes and sweepstakes.** I was the top contributor to the module behind the Kia MVP vote and Rising Stars polls, including its admin configuration.
- **Tentpole events.** Schedule, scores, standings, and stats pages for All-Star, the Playoffs, the Draft, and Summer League. The 2018 Playoffs schedule fetched data server-side with cache timing that editors could set.
- **HTTPS migration.** I carried out the move to HTTPS in 2018, across 154 files plus environment settings.
- **Privacy.** GDPR consent, CCPA "Do Not Sell", and requiring the current password for account changes.

## League Pass storefront

In 2019 I moved to the storefront as its primary front-end contributor and drove its releases through each environment to production.

- Purchase confirmation, subscription management, and a flow for switching between League Pass and Team Pass, covered by end-to-end tests.
- The sales sheet: one-time and team purchases, a configurable feature comparison, and seasonal pricing layouts.
- Moved single-game pages to server-side rendering.
- A performance refactor guided by Lighthouse audits.
- Raised the test coverage threshold to 94% and added code owners.

## Outcome

I spent six years shipping fan-facing features, and much of that work followed the NBA calendar. A Playoffs page had to be ready before the Playoffs started.
