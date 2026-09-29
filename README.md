# Frontend Design Director

A routing-first design-and-build skill for Claude Code and Codex. It classifies the website by buying psychology, then loads a focused playbook for product-led SaaS/AI, developer platforms, fintech/enterprise, ecommerce/physical products, research/editorial sites, or portfolios and high-concept launches.

The reference corpus covers ElevenLabs, Linear, Stripe, Perplexity, Supabase, Cloudflare, Firecrawl, Cursor, Retool, Ramp, Mercury, Prism Science, The Content Architecture, Blink, and Edoardo Lunardi’s Prism case study. Research is **in progress**: the [coverage ledger](references/studies/coverage.md) distinguishes discovery, content extraction, browser capture, and analyst review. Perplexity and Ramp could not be visually studied in the current environment. Do not interpret a fetched page as a completed design study.

Version 0.2.0 adds four distinct standalone studies, a runnable React/motion/WebGL lab, measured visual observations, and evidence-based review criteria. The six archetype blueprints are planning tools, not six finished designs. All examples are optional ingredients.

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

Open [the gallery](examples/index.html) locally, or inspect the studies and captured previews:

| Study | Product idea | Borrowable behavior |
|---|---|---|
| [Northstar](examples/vanilla/index.html) · [preview](examples/previews/vanilla-desktop.png) | Product judgment | Evidence, dissent, and a reversible decision |
| [Lilt](examples/commerce/index.html) · [preview](examples/previews/commerce-desktop.png) | Physical object | Original SVG product, finishes, sample bag, specifications |
| [Relay](examples/developer/index.html) · [preview](examples/previews/developer-desktop.png) | Developer infrastructure | Request, response, retry, and rejection fixtures |
| [Fieldwork](examples/research/index.html) · [preview](examples/previews/research-desktop.png) | Research/editorial | Manipulable signal, uncertainty, methods, editorial index |

The four studies require no build and can open as HTML files. To run the integration lab:

```sh
cd examples
bun install --frozen-lockfile
bun run dev
# open /lab.html
bun run build
```

Reproducible browser checks are included in `examples/tests/verify.mjs`. See the [verification report](references/verification.md) for setup, tested states, and limitations.

The production build includes all four studies and the lab. Browse [pattern-index.json](examples/pattern-index.json) and [composition recipes](references/composition-recipes.md) for adaptation notes. Fonts are bundled for offline use, with licenses in `examples/assets/`.

## Quality and limits

See the [audit and evaluation record](references/audit-and-evaluation.md), [verification report](references/verification.md), and [measured reference studies](references/studies/visual-studies.md). The first Northstar failed its visual ambition; this version responds to that audit. No matched, blinded benchmark against Claude's default skill has been completed, so this repository makes no validated superiority claim.

Original code and writing are licensed under MIT. Bundled fonts use their included SIL Open Font Licenses. Site names belong to their respective owners; reference sites' code, imagery, and brands are not licensed by this repository.
