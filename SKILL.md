---
name: frontend-design-director
description: Design, build, or critique distinctive marketing websites and product frontends by first identifying the site archetype, then applying an evidence-backed structure, visual system, interaction model, and quality bar. Use for landing pages, multi-page marketing sites, SaaS and AI products, developer tools, fintech, ecommerce or physical products, research/editorial sites, portfolios, and high-concept launches. Do not use for ordinary application UI work where an established product design system already dictates the answer.
---

# Frontend Design Director

Create a coherent design argument, not a decorated template. Preserve an existing brand or design system when one exists; these references supply reasoning and structure, never someone else’s identity, copy, assets, or signature composition.

## Route before designing

Identify the primary archetype and buying condition. If the brief spans categories, choose one primary archetype and at most one secondary influence.

| Archetype | User must believe | Default evidence | Read |
|---|---|---|---|
| Product-led SaaS / AI | “I understand the workflow and want to try it.” | product-in-action, use cases, customer proof | [saas-ai.md](references/saas-ai.md) |
| Developer platform / infrastructure | “It works, integrates, and will scale.” | live-looking output, code, architecture, benchmarks | [developer-platforms.md](references/developer-platforms.md) |
| Enterprise / fintech | “This is credible, controlled, and worth switching to.” | outcomes, controls, implementation, trust | [fintech-enterprise.md](references/fintech-enterprise.md) |
| Ecommerce / physical product | “I desire this object and can confidently buy it.” | product photography, detail, fit, proof, logistics | [commerce-physical.md](references/commerce-physical.md) |
| Research / science / editorial | “I grasp why this matters and trust the work.” | narrative, diagrams, publications, people | [research-editorial.md](references/research-editorial.md) |
| Portfolio / studio / launch | “This point of view is memorable.” | art direction, selected work, one governing metaphor | [portfolio-experimental.md](references/portfolio-experimental.md) |

When uncertain, read [routing.md](references/routing.md). For inner pages, read [page-archetypes.md](references/page-archetypes.md).

## Working method

1. Write a one-sentence concept: “This site should feel like **X** because the audience needs to believe **Y**.”
2. Select two relevant references from [reference-library.md](references/reference-library.md): one for information architecture, one for expressive treatment. Never average five sites together.
3. Establish the page’s job, conversion, proof burden, and one dominant visual idea before choosing components.
4. Draft the section sequence in plain language. Every section must advance understanding, proof, differentiation, or action; remove sections that only restate the hero.
5. Define a small token system before implementation: canvas, surface, ink, muted ink, accent, border, type roles, radius logic, spacing rhythm, and motion character.
6. Build the semantic skeleton and responsive hierarchy first. Add expressive media and motion only after the page reads correctly without them.
7. Verify with [quality-gates.md](references/quality-gates.md). If animation materially shapes the experience, also read [motion.md](references/motion.md).

## Non-negotiable design rules

- Give each page one dominant idea. Repetition creates identity; unrelated tricks create noise.
- Show the product, object, evidence, or thesis in the first viewport. A generic gradient is not product proof.
- Use composition before decoration: scale, placement, crop, rhythm, contrast, and whitespace do more work than shadows or effects.
- Make the hero specific. Pair a sharp claim with a concrete visual or interaction that proves it.
- Alternate proof modes down the page: demonstration → metric → customer → mechanism → action. Avoid ten identical feature cards.
- Match density to risk. Developer pages may be information-dense; luxury products need space; regulated products need calm clarity; experimental sites need a stable navigational spine.
- Use accent color as syntax: action, state, category, or narrative emphasis. Do not sprinkle it randomly.
- Make typography carry hierarchy. Use no more type styles than the content model needs, and keep line lengths intentional.
- Let the interface explain itself. Product visuals need legible states, realistic data, and a clear focal task—not decorative dashboard confetti.
- Mobile is a recomposition. Preserve the concept while changing crop, order, density, and interaction; do not merely stack desktop columns.
- Respect `prefers-reduced-motion`; never gate meaning behind hover, scroll choreography, or a canvas effect.
- Do not reproduce reference copy, trademarks, imagery, proprietary UI, or a recognizable page wholesale. Abstract the principle and create original work.

## Avoid the “AI website” default

Reject these unless the brief genuinely calls for them:

- centered headline + purple glow + three equal cards + logo strip;
- every section inside a rounded rectangle;
- icons used where a concrete product state or photograph would be stronger;
- arbitrary glassmorphism, blurred blobs, or floating pills;
- huge type with no relationship to the product’s tone;
- motion on every element instead of one choreographed system;
- copied dark-mode developer aesthetics for non-technical audiences;
- long pages that repeat claims without increasing evidence.

When a result still feels generic, do not add polish first. Revisit the concept sentence, evidence choice, section order, and dominant visual idea.
