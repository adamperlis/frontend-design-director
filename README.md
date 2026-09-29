# Frontend Design Director

A routing-first design-and-build skill for Claude Code and Codex. It classifies the website by buying psychology, then loads a focused playbook for product-led SaaS/AI, developer platforms, fintech/enterprise, ecommerce/physical products, research/editorial sites, or portfolios and high-concept launches.

The reference corpus covers ElevenLabs, Linear, Stripe, Perplexity, Supabase, Cloudflare, Firecrawl, Cursor, Retool, Ramp, Mercury, Prism Science, The Content Architecture, Blink, and Edoardo Lunardi’s Prism case study. Research is **in progress**: the [coverage ledger](references/studies/coverage.md) distinguishes discovery, content extraction, browser capture, and analyst review. Perplexity and Ramp could not be visually studied in the current environment. Do not interpret a fetched page as a completed design study.

The library includes four standalone studies, cinematic LUMA experiments, a product-led Cadence SaaS example, a runnable React/motion/WebGL lab, and evidence-based review criteria. The six archetype blueprints are planning tools, not six finished designs. All examples are optional ingredients. Cadence follows the current maximum of two loaded font families; older studies are retained as historical examples.

The September 29 navigation follow-up tracks 550 discovered destinations. All previously unreviewed opening captures were inspected, and 156 further destinations were attempted. Read the [follow-up synthesis](references/studies/navigation-followup-studies.md) and [coverage ledger](references/studies/coverage.md): sampled captures are not comprehensive motion, mobile, or every-section verification. Pear is included through source analysis and limited live observation.

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
| [Cadence](examples/saas/index.html) · [preview](examples/previews/saas-desktop.jpg) | Product-led SaaS | Date-change simulation, source/task UI slots, inspectable handoffs, explicit release gate, pricing calculator |
| [LUMA directed](examples/luma-directed/index.html) · [preview](examples/previews/luma-directed-desktop.jpg) | Physical product / cinematic | Persistent 3D instrument, material selection, chapter continuity |
| [Northstar](examples/vanilla/index.html) · [preview](examples/previews/vanilla-desktop.png) | Product judgment | Evidence, dissent, and a reversible decision |
| [Lilt](examples/commerce/index.html) · [preview](examples/previews/commerce-desktop.png) | Physical object | Original SVG product, finishes, sample bag, specifications |
| [Relay](examples/developer/index.html) · [preview](examples/previews/developer-desktop.png) | Developer infrastructure | Request, response, retry, and rejection fixtures |
| [Fieldwork](examples/research/index.html) · [preview](examples/previews/research-desktop.png) | Research/editorial | Manipulable signal, uncertainty, methods, editorial index |

Northstar, Lilt, Relay, and Fieldwork can open as HTML files. Cadence, LUMA, and the integration lab require the local server:

```sh
cd examples
bun install --frozen-lockfile
bun run dev
# open /saas/index.html, /luma-directed/index.html, or /lab.html
bun run build
```

Reproducible browser checks are included in `examples/tests/verify.mjs`. See the [verification report](references/verification.md) for setup, tested states, and limitations.

The production build includes the studies, Cadence, LUMA, and the lab. Browse [pattern-index.json](examples/pattern-index.json) and [composition recipes](references/composition-recipes.md) for adaptation notes. Fonts are bundled for offline use with included licenses. Cadence's separate [review record](examples/saas/REVIEW.md) identifies its tested states and remaining limitations.

## Quality and limits

See the [audit and evaluation record](references/audit-and-evaluation.md), [verification report](references/verification.md), and [measured reference studies](references/studies/visual-studies.md). The first Northstar failed its visual ambition; this version responds to that audit. No matched, blinded benchmark against Claude's default skill has been completed, so this repository makes no validated superiority claim.

Original code and writing are licensed under MIT. Bundled fonts use their included SIL Open Font Licenses. Site names belong to their respective owners; reference sites' code, imagery, and brands are not licensed by this repository.
