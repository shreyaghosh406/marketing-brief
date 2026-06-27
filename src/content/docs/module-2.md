---
title: Module 2 — How AI tools actually work
description: An accurate mental model of LLMs and agentic AI — and their limits.
---

### Why this matters

AI is now part of nearly every marketer's daily toolkit, and it's increasingly part of the products marketers sell. If you understand it, you'll use it well and talk about it honestly. If you don't, you'll either treat it as magic (and overpromise) or fear it (and underuse it). This module gives you an accurate mental model — no engineering degree required — and, just as importantly, a clear sense of what these tools *can't* do, so you never market a lie.

### The core ideas

**What a large language model (LLM) is.**

Picture an assistant who has read an unimaginable amount of text — books, articles, conversations — and whose one talent is this: given some text, it predicts what word most plausibly comes next. That's genuinely most of what's happening. You give it a prompt, and it continues, one likely word at a time, until it's produced a full response.

That sounds almost too simple to be useful, but "predict the next word, extremely well, having read almost everything" turns out to produce something that can summarize, translate, draft, explain, and answer. ChatGPT, Claude, Gemini — these are all LLMs.

The key intuition: **an LLM is producing plausible text, not retrieving verified facts.** Usually plausible and true line up. Sometimes they don't. Hold onto that — it explains the limits below.

**What "agentic" adds.**

A plain LLM can only talk. It writes you a response and stops. An **agentic** AI is an LLM that's been given two new things:

1. **Tools** — the ability to *do* things: search the web, send an email, read a file, update a spreadsheet, call another service.
2. **A goal it can pursue in steps** — instead of one reply, it can plan, take an action, see what happened, and take the next action.

The analogy: a plain LLM is a brilliant assistant locked in a room with only a pen. An agentic AI is that same assistant given hands, a phone, internet access, and a to-do list. It can actually *get things done* in the world, not just describe how.

This is exactly what makes a product like Gravity possible — the agents aren't chatting, they're *acting*.

**How marketers actually use these tools.**

Day to day, you'll use AI to draft first versions of copy, brainstorm angles, summarize research, turn messy notes into clean structure, and spot patterns in feedback. Used well, it removes the blank-page problem and does the boring 80% so you can spend your judgment on the 20% that matters.

The non-negotiable rule: **a human stays in the loop.** AI gives you a strong first draft; you bring the taste, the fact-checking, and the final call. Never ship AI output you haven't read and judged yourself.

**The limits — read this twice.**

- **Hallucination.** Because the model produces *plausible* text, it will sometimes state something false with total confidence — a fake statistic, a quote nobody said, a feature a product doesn't have. It isn't lying; it has no concept of lying. It's predicting plausible words. *You* must verify anything factual.
- **No real-time knowledge by default.** Unless a tool gives it live access, a model doesn't know today's news or this week's numbers.
- **It can't feel your brand.** It can imitate a voice you describe, but it doesn't have taste. Taste is your job.

If you internalize these limits, you'll never write a marketing claim you can't stand behind. That's the difference between a marketer people trust and one they learn to ignore.

### Worked example

Imagine an agent built to research and draft sales outreach:

- The **LLM** is the brain that understands the request and writes the emails.
- The **tools** are a web search (to find prospects) and an email drafter (to write to each one).
- The **steps**: search for matching companies → read what they do → draft a tailored email per company.
- The **guardrail**: it drafts but doesn't *send* — a human reviews first. That human-in-the-loop is deliberate, and it's exactly the kind of honest limit you'd be smart to mention rather than hide.

### Common mistakes

- **Treating AI as magic.** It's a powerful tool with sharp edges, not a wizard. Magic-framing sets up customers to feel cheated.
- **Trusting output blindly.** Confident and correct are not the same thing in AI. Verify facts.
- **Sci-fi framing.** "It thinks! It's alive!" Skip it. Clear, grounded language makes you sound like someone who actually understands the tech — which earns more trust than hype.

### Your assignment — "Explain agentic AI"

Two parts:

1. Explain **agentic AI to a 12-year-old** in exactly five sentences. Simple words, a good analogy, no jargon.
2. List **two things AI agents are genuinely great at** and **two things they're still bad at** — written for someone whose job is to market AI *honestly*.

**Rubric**

| Criterion | What we're looking for |
|-----------|------------------------|
| **Correct model** | Your explanation isn't wrong or hand-wavy. A real 12-year-old would actually get it. |
| **Good analogy** | You make an abstract idea click for a non-technical reader. |
| **Honesty about limits** | Your strengths and weaknesses are real, specific, and relevant to honest marketing. |

Rated **Developing / Solid / Strong.**

### Further reading (optional)

Try giving an AI assistant a small real task and watch where it shines and where it stumbles. Nothing teaches the limits faster than seeing them yourself.
