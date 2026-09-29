# Local verification — 30 September 2026

Scope: four original composition studies, not four full website clones. Compare with the [source evidence](../../references/studies/direct-ui-reconstruction.md).

- Inspected all four opening desktop renders at 1280 × 720 and their corresponding source captures. Major heading/stage proportions intentionally follow the measured references; Arial, original copy, gradients, and fixture UI are substitutions, not pixel-perfect matches.
- Inspected the Linear lower chapter after adding the foreground conversation and oversized masked board. The focal interaction remains outside the background board mask.
- Rendered all four local studies in a 390px-wide iframe and checked document width at 320px: no page-level horizontal overflow. These are browser viewport checks, not physical-phone tests or source-mobile comparisons.
- Exercised Cursor draft approval: visible “Draft approved. Ready to export.” consequence.
- Exercised Linear status selection. Independent source review caught and corrected mobile-hidden status, mismatched issue content, and fade overlap with properties.
- Exercised Firecrawl-style invalid URL feedback, valid local extraction, and JSON output selection. No external request is made.
- Exercised ElevenLabs-style Creative → API switch, edited payload text, and ran the local fixture: visible 11-character acceptance for “Hello world.” No audio is generated.
- Independent code review prompted fixes for mobile voice visibility, active-orb action, focus indication, selector focus restoration, and reduced-motion scroll handling.

Full keyboard traversal, physical mobile interaction, reduced-motion rendering, every state at every breakpoint, and assistive-technology behavior remain unverified. Local controls were tested on desktop; iframe selector limitations prevented completing the mobile voice-click test. Do not describe this as a full accessibility audit.

Public code is ours. Retrieved vendor CSS, DOM measurements, and source screenshots remain outside the public repository. No source JavaScript, Three.js scene, or WebGL shader was recovered in this pass.
