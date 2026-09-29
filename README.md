# Frontend Design Director

A routing-first design-and-build skill for Claude Code and Codex. It classifies the website by buying psychology, then loads a focused playbook for product-led SaaS/AI, developer platforms, fintech/enterprise, ecommerce/physical products, research/editorial sites, or portfolios and high-concept launches.

The reference library synthesizes structural and visual lessons from ElevenLabs, Linear, Stripe, Perplexity, Supabase, Cloudflare, Firecrawl, Cursor, Retool, Ramp, Mercury, Prism Science, The Content Architecture, Blink, and Edoardo Lunardi’s Prism case study.

The `examples/` directory adds optional implementation ingredients: a runnable zero-dependency page, CSS systems, React/Tailwind components, Framer Motion and GSAP recipes, Three.js/R3F shaders, and six archetype starters. They are examples to borrow from, not mandatory conventions.

## Install for Claude Code

```bash
git clone https://github.com/adamperlis/frontend-design-director.git ~/.claude/skills/frontend-design-director
```

Or copy the `frontend-design-director` folder into `~/.claude/skills/`.

## Install for Codex

```bash
git clone https://github.com/adamperlis/frontend-design-director.git ~/.codex/skills/frontend-design-director
```

## Use

Invoke `frontend-design-director` explicitly, or ask the agent to design, build, or critique a marketing site. The skill keeps detailed category playbooks in `references/` so only relevant guidance is loaded.

## Principles

- References supply reasoning and structure, not copyable branding.
- One primary archetype, at most one secondary influence.
- Product, object, evidence, or thesis appears in the first viewport.
- Every section advances understanding, proof, differentiation, or action.
- Accessibility, responsive behavior, reduced motion, and performance are part of the design.

## Code examples

Open `examples/vanilla/index.html` directly for a working HTML/CSS/JavaScript demonstration. Browse `examples/pattern-index.json` by archetype, technology, or purpose, then copy only the relevant pattern into the target project.

Licensed under MIT. Site names belong to their respective owners.
