# Borrowable code library

The examples are optional ingredients, not rules. Search [`../examples/pattern-index.json`](../examples/pattern-index.json) by `archetypes`, `technologies`, or `purpose`, then inspect the listed files.

## Start with the simplest layer

1. **HTML + CSS:** content hierarchy, responsive composition, product frames, grids, cards, pricing, editorial rhythm.
2. **Small JavaScript:** tabs, disclosure, progressive enhancement, pointer-responsive detail.
3. **React/Tailwind:** reusable components when the target already uses React.
4. **Framer Motion or GSAP:** state transitions or scroll narratives that CSS cannot express clearly.
5. **WebGL/R3F:** a governing visual metaphor, spatial explanation, material effect, or high-volume GPU animation.

Do not add a dependency solely because an example uses it. Translate the underlying behavior into the project’s existing stack when practical.

## Runnable foundation

`examples/vanilla/` is a complete dependency-free page with:

- accessible responsive navigation;
- asymmetric hero with live product panel;
- proof strip and workflow chapters;
- tabs implemented as progressive enhancement;
- pricing cards and final action;
- fluid type and spacing tokens;
- reduced-motion and high-contrast considerations;
- a subtle pointer spotlight that disappears on touch/reduced motion.

Use it to inspect semantic structure or borrow isolated patterns. Replace all sample copy, data, colors, and proportions.

## React and Tailwind

`examples/react/MarketingPatterns.tsx` includes composable primitives for an asymmetric hero, product window, chapter, metric band, pricing matrix, and final CTA. The file uses Tailwind utility classes but keeps data and children injectable.

`examples/react/MotionPatterns.tsx` contains Framer Motion examples for section reveals, a magnetic action, layout tabs, and an accessible product-story sequence. Motion is disabled or simplified when reduced motion is requested.

## GSAP

`examples/motion/scroll-story.ts` progressively enhances a pinned product story with `gsap.matchMedia()`, cleans up correctly, and leaves a readable static layout on small screens or reduced motion.

## WebGL and shaders

`examples/webgl/AtmosphereCanvas.tsx` is an R3F canvas with a static CSS fallback, DPR cap, visibility pausing, reduced-motion handling, and conservative shader math.

- `atmosphere.vert`: low-amplitude vertex displacement.
- `atmosphere.frag`: an original soft spectral field with grain and pointer focus.
- `halftone.frag`: a subject-derived print/data treatment for image or render passes.

WebGL is appropriate when it communicates material, space, motion, or a core metaphor. It is usually wrong for routine feature sections, forms, pricing, or text-heavy pages.

## Archetype starters

`examples/starters/archetypes.ts` defines original section blueprints and proof types for all six archetypes. `examples/starters/ArchetypePage.tsx` renders those blueprints as a semantic React page shell. Treat the sequences as prompts and rearrange them to match the actual buying journey.

## Adaptation checklist

- Replace sample text and data with real product content.
- Map colors, type, spacing, and radius values to existing tokens.
- Remove dependencies the repository does not already need.
- Verify keyboard order, labels, focus visibility, touch behavior, and reduced motion.
- Test static fallback before approving an effect.
- Profile hero media and WebGL on a mid-range mobile device.

