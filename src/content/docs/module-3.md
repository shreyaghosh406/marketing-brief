---
title: Module 3 — How to read metrics
description: Find the one number that's telling the truth — funnels, vanity vs. actionable metrics, and the North Star.
---

### Why this matters

Marketing without metrics is just decoration. You'll constantly be asked "is this working?" and the only honest answer comes from numbers. But numbers are slippery: the wrong ones make a failing campaign look like a triumph, and the right ones can reveal a problem nobody noticed. This module teaches you to look at a screen full of numbers and find the *one* that's telling the truth.

### The core ideas

**The funnel.**

Almost every business can be drawn as a funnel — a sequence people move through, narrowing at each step:

1. **Acquisition** — they find you (an ad, a post, a search result).
2. **Activation** — they reach the first real "aha" moment (they finish signup, they get a first result, they feel the value).
3. **Retention** — they come back. Once, then again, then habitually.
4. **Referral** — they tell other people.
5. **Revenue** — they pay.

People leak out at every stage. The marketer's job is to find *where* they leak and *why*. A funnel isn't a diagram you draw once — it's the lens you look through.

**Vanity metrics vs. actionable metrics.**

This is the single most important idea in this module.

A **vanity metric** looks impressive and feels good but doesn't help you decide anything. Total signups ever. Total impressions. Total followers. They only go up, so they always look like success — even when the business is dying.

An **actionable metric** changes a decision. *Activation rate.* *Week-1 retention.* *Cost to acquire a paying customer.* When these move, you know something real happened and you know what to do about it.

The test: **"If this number doubled, would I do anything differently?"** If no, it's probably vanity.

**Rates beat counts.**

A count is a total ("5,000 signups"). A rate is a proportion ("38% of signups activated"). Rates are almost always more honest, because they control for size. 5,000 signups sounds great until you learn only 3% came back. A falling rate while counts rise is one of the most common ways a business fools itself. Watch the rates.

**The North Star metric.**

The best teams pick **one metric that best captures the real value they deliver**, and orient around it. Examples:

- A music app might choose *weekly active listeners*, not total downloads.
- A marketplace might choose *successful transactions per week*, not signups.
- A messaging app might choose *messages sent between friends*, not total users.

A good North Star has a quality in common across all of these: it only goes up when customers are actually getting value. It's hard to fake. Picking the right one focuses an entire team.

**Retention and cohorts (lightly).**

Retention is whether people come back. A **cohort** is just a group that started at the same time — say, "everyone who signed up in March." Watching cohorts lets you ask "are people who joined recently sticking around better or worse than people who joined six months ago?" If newer cohorts retain worse, something you changed (or someone you're attracting) is getting worse. It's an early-warning system.

**What analytics tools do.**

Tools like PostHog, Amplitude, and Mixpanel are how teams *see* all of the above. They track what users do inside a product — every signup, click, and return visit — and turn it into funnels, retention curves, and dashboards. You don't need to run them on day one, but you should know the category exists and what it's for: turning raw behavior into the rates and curves you make decisions from.

### Worked example — read this dashboard

A fictional habit-tracking app, **Brightly**, tracked eight weeks of data. In week 3 it ran a big paid campaign that ended after week 5.

| Week | New signups | Activated (set up first habit) | Returned in week 1 | Upgraded to paid |
|------|-------------|--------------------------------|--------------------|------------------|
| 1 | 500 | 62% | 40% | 5% |
| 2 | 540 | 60% | 39% | 5% |
| 3 | 1,800 | 41% | 22% | 2% |
| 4 | 2,100 | 38% | 20% | 2% |
| 5 | 1,950 | 39% | 21% | 2% |
| 6 | 600 | 58% | 37% | 5% |

Look at it the vanity way first: signups **3–4×'d** in weeks 3–5. A naive report would scream success.

Now look at the rates. The moment the campaign hit, **activation, week-1 return, and paid conversion all collapsed** — and recovered the instant the campaign ended. The campaign poured in a flood of people who didn't activate, didn't come back, and didn't pay. It made the headline number look amazing while making the *business* worse. The money was wasted, or worse than wasted.

The honest read: signups are a vanity metric here. The metric that tells the truth is **activation rate** (closely followed by week-1 retention). If you fixed your eyes on one number going forward, it'd be activation — and the next question would be *why* these particular acquired users failed to activate.

That's the whole skill: ignore the flattering count, find the rate that's telling the truth.

### Common mistakes

- **Falling for the big number.** Totals almost always rise. That's not the same as progress.
- **Confusing correlation with cause.** Two things moving together doesn't mean one caused the other. Always ask what else changed.
- **Reporting a count when a rate is the story.** "We got 2,100 signups!" hides "but only 38% activated." Lead with the rate.

### Your assignment — "Diagnose the dashboard"

Using the **Brightly** table above (or a fresh scenario we provide):

1. In a short paragraph, say **what looks healthy, what looks broken, and the single metric you'd focus on next week** — and *why*. Show your reasoning, not just your conclusion.
2. Then define **five common marketing metrics in your own words** (suggested: acquisition, activation rate, retention, conversion rate, and one vanity metric you'd warn a teammate about).

**Rubric**

| Criterion | What we're looking for |
|-----------|------------------------|
| **Interpretation** | You read the numbers correctly and aren't fooled by the rising count. |
| **Judgment** | You separate vanity from actionable and pick a defensible focus metric. |
| **Reasoning** | You explain *why*, not just *what*. The thinking is visible. |

Rated **Developing / Solid / Strong.**

### Further reading (optional)

Search "vanity metrics vs actionable metrics" and "North Star metric." Then pick any app you love and guess what its North Star should be. You'll be right more often than you expect.
